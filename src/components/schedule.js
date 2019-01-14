import React from 'react';
import { Table , Button} from 'element-react';
import * as moment from 'moment';

import Web3 from 'web3';

import api from 'components/api';
import Work from "../contracts/Work.json";

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drizzleState:null,
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
          width: 120,
          fixed: 'right',
          render: (row, column, index) => {
            return (
              <span>
                <Button
                  type="text"
                  size="small"
                  onClick={this.createContract.bind(this, index)}
                >
                  Create contract
                </Button>
              </span>
            );
          },
        },
      ],
      data: [],
    };
  }

  createContract() {
    const {drizzle, drizzleState} = this.props;

    var web3 = new Web3(drizzle.web3.currentProvider);
    var myContract = new web3.eth.Contract(Work.abi);
    console.log(web3);
    console.log(myContract);
    myContract.deploy({
      data: Work.bytecode,
      arguments: []
    })
    .send({
      from: drizzleState.accounts[0],
      gas: 1500000,
      gasPrice: '10000000000'
    })
    .then(function(newContractInstance) {
      console.log(newContractInstance.options.address)
    });
  }


  componentDidMount() {
    api
      .getWorkListOfUser()
      .then(data => {
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
      <Table
        style={{ width: '100%', backgroundcolor: '1111' }}
        columns={this.state.columns}
        data={this.state.data}
        border
      />
    );
  }
}
