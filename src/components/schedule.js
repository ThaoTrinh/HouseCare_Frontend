import React from 'react';
import { Table, Button, Notification, Loading } from 'element-react';
import * as moment from 'moment';

import Web3 from 'web3';

import api from 'components/api';
import Work from '../contracts/Work.json';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
              return <p>{this.state.data[index].contractAddress}</p>;
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

  createContract(index) {
    let id = sessionStorage.getItem('id');
    const { drizzle, drizzleState } = this.props;

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
        return api.addContractAddress(
          this.state.data[index]._id,
          newContractInstance.options.address
        );
      })
      .then(data => {
        Notification.success({
          title: 'Contract creation success',
        });
        // update data with newly returned data
        this.state.data[index] = data;
        this.forceUpdate();
      })
      .catch(err => {
        alert(err);
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  getWorkList() {
    api
      .getWorkListOfUser()
      .then(data => {
        alert(JSON.stringify(data));
        data.map(d => {
          d.time = new Date(Date.parse(d.time));
          d.time = d.time.toLocaleString();
          d.timespan = moment.duration(d.timespan).asHours();
          d.owner = d.owner.username;
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

  componentDidMount() {
    api
      .getWorkListOfUser()
      .then(data => {
        // alert(JSON.stringify(data));
        data.map(d => {
          d.time = new Date(Date.parse(d.time));
          d.time = d.time.toLocaleString();
          d.timespan = moment.duration(d.timespan).asHours();
          d.owner = d.owner.username;
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
