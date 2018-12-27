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
        alert(JSON.stringify(data));
        let view = []
        data.map(
          (d) => {
            view.push({
              time: d.time,
              timespan: d.timespan,
              owner: d.owner.username,
              helper: d.helper ? d.helper.username : "Not Assigned",
              status: d.status == 0 ? "Due" : "Done",
              type: d.type,
              address: d.location,
              salary: d.expectedSalary,
            })
          }
        )
        // end process data
        this.setState({data: view});
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
