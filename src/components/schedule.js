import React from 'react';
import { Table, Button, Notification, Loading, MessageBox, Popover } from 'element-react';
import * as moment from 'moment';

import Web3 from 'web3';

import api from 'components/api';
import Work from '../contracts/Work.json';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newContractAddress: null,
      currentContract: [],
      isLoading: false,
      drizzleState: null,
      columns: [
        {
          label: 'Time',
          prop: 'time',
          width: 120,
          sortable: true,
        },
        {
          label: 'Duration',
          prop: 'timespan',
          width: 100,
          sortable: true,
        },
        {
          label: 'Salary',
          prop: 'salary',
          width: 100,
          sortable: true,
        },
        {
          label: 'Owner',
          prop: 'owner',
          width: 130,
          sortable: true,
        },
        {
          label: 'Helper',
          prop: 'helper',
          width: 130,
          sortable: true,
        },
        {
          label: 'Address',
          prop: 'address',
          width: 150,
        },
        {
          label: 'Type',
          prop: 'type',
          sortable: true,
        },

        {
          label: 'Status',
          prop: 'status',
        },

        {
          label: 'Operations',
          prop: 'contractAddress',
          width: 120,
          fixed: 'right',
          render: (row, column, index) => {
            if (this.state.data[index].helper == 'Not Assigned')
              return <p>No Helper, no contract</p>;
            if (this.state.data[index].contractAddress)
              return (
                  <Button
                    type="text"
                    size="small"
                    // onClick={this.getContract.bind(this, index)}
                    onClick = {this.watchContract.bind(this, index)}
                    
                  >
                    {this.state.data[index].contractAddress}
                  </Button>
              );
            if (sessionStorage.getItem('role') === '0')
              return <p>Waiting for contract</p>;
            return (
              <Button
                type="text"
                size="small"
                onClick={this.createContract.bind(this, index)}
              >
                Create contract
              </Button>
            );
          },
        },
      ],
      data: [],
    };
  }

  watchContract(index) {
    window.open("https://ropsten.etherscan.io/address/" + this.state.data[index].contractAddress);
  }

  createContract(index) {
    const { drizzle, drizzleState } = this.props;

    const work = this.state.data[index];

    var web3 = new Web3(drizzle.web3.currentProvider);
    var myContract = new web3.eth.Contract(Work.abi);

    this.setState({
      isLoading: true,
    });

    myContract
      .deploy({
        data: Work.bytecode,
      })
      .send({
        from: drizzleState.accounts[0],
        gas: 1500000,
        gasPrice: '10000000000',
      })
      .then(newContractInstance => {
        this.setState({
          newContractAddress: newContractInstance.options.address
        });
        console.log(work);
        return newContractInstance.methods.setData(
          work._owner.walletAddress,
          work._helper.walletAddress,
          work._id,
          work.address,
          "",
          parseInt(work.salary) * 1000,
          moment(work.time).valueOf()
        ).send({
          from: drizzleState.accounts[0],
          gas: 1500000,
          gasPrice: '10000000000',
        });
      })
      .then(() => {
        return api.addContractAddress(
          this.state.data[index]._id,
          this.state.newContractAddress
        );
      })
      .then(data => {
        Notification.success({
          title: 'Contract creation success',
          onClick: () => {
            window.open("https://ropsten.etherscan.io/address/" + this.state.newContractAddress);
          },
          offset: 300
        });
        // update data with newly returned data
        this.state.data[index] = data;
        this.forceUpdate();
      })
      .catch(err => {
        Notification.error({
          title: 'Contract creation error',
        });
        console.log(err);
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  getContract(index) {
    const { drizzle, drizzleState } = this.props;

    const work = this.state.data[index];

    var web3 = new Web3(drizzle.web3.currentProvider);
    var instance = new web3.eth.Contract(Work.abi, work.contractAddress);

    instance.methods.getData().call({
      from: drizzleState.accounts[0],
      gas: 1500000,
      gasPrice: '10000000000',
    })
    .then((result) => {
      this.setState({
        currentContract: result
      });
      console.log(result)
      // MessageBox.alert(JSON.stringify(result), 'Contract data');
    })
  }

  componentDidMount() {
    api
      .getWorkListOfUser()
      .then(data => {
        // alert(JSON.stringify(data));
        data.map(d => {
          d.time = new Date(Date.parse(d.time));
          d.time = d.time.toLocaleString();
          d.timespan = moment.duration(d.timespan).asHours();
          d._owner = d.owner;
          d.owner = d.owner.username;
          d._helper = d.helper;
          d.helper = d.helper ? d.helper.username : 'Not Assigned';
          d.status = d.status == 0 ? 'Due' : 'Done';
          d.address = d.location;
          d.salary = d.expectedSalary;
        });
        this.setState({ data });
      })
      .catch(err => {
        alert(err);
      });
  }

  render() {
    return (
      <Loading loading={this.state.isLoading} text="Creating smart contract">
        <Table
          style={{ width: '100%', backgroundcolor: '1111' }}
          columns={this.state.columns}
          data={this.state.data}
          border
        />
      </Loading>
    );
  }
}
