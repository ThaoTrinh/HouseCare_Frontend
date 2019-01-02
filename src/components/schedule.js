import React from 'react';
import { Table } from 'element-react';

import api from 'components/api';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
          width: 180,
          sortable: true,
        },
        {
          label: 'Salary',
          prop: 'salary',
          width: 120,
          sortable: true,
        },
        {
          label: 'Owner',
          prop: 'owner',
          width: 150,
          sortable: true,
        },
        {
          label: 'Helper',
          prop: 'helper',
          width: 150,
          sortable: true,
        },
        {
          label: 'Address',
          prop: 'address',
          width: 180,
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
      ],
      data: [
      ],
    };
  }

  componentDidMount() {
    api.getWorkList()
      .then(data => {
        // process data
        // alert(JSON.stringify(data));
        data.map(
          (d) => {
            // view.push({
            //   time: d.time,
            //   timespan: d.timespan,
            //   owner: d.owner.username,
            //   helper: d.helper ? d.helper.username : "Not Assigned",
            //   status: d.status == 0 ? "Due" : "Done",
            //   type: d.type,
            //   address: d.location,
            //   salary: d.expectedSalary,
            // })
            d.time = new Date(Date.parse(d.time));
            d.time = d.time.toLocaleString();
            d.timespan = (d.timespan / (1000 * 60 * 60)) + " hours";
            d.owner = d.owner.username;
            d.helper = d.helper ? d.helper.username : "Not Assigned";
            d.status = d.status == 0 ? "Due" : "Done";
            d.address = d.location;
            d.salary = d.expectedSalary;
          }
        )
        // end process data
        this.setState({data});
      })
      .catch((err) => {
        alert(err);
        // alert('cannot fetch job data');
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
