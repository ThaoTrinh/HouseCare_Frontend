import React from 'react';
import { Table } from 'element-react';

import getjob from 'components/api';

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
          label: 'Date',
          prop: 'date',
          width: 180,
          sortable: true,
        },
        {
          label: 'Hour',
          prop: 'hour',
          width: 120,
          sortable: true,
        },
        {
          label: 'Name',
          prop: 'name',
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
        {
          time: 'Monday',
          date: '2016-05-03',
          hour: '15h',
          name: 'Thao',
          address: '12 Vo Van Ngan, Thu Duc',
          type: 'Don dep nha cua',
          status: 'Complete',
        },
        {
          time: 'Monday',
          date: '2016-05-03',
          hour: '12h',
          name: 'Khoa',
          address: '14 Vo Van Tri, Go Vap',
          type: 'Cham soc tre em',
          status: 'Complete',
        },
        {
          time: 'Monday',
          date: '2016-05-03',
          hour: '8h',
          name: 'Khoi',
          address: '12 Duong so 2, Thu Duc',
          type: 'Cham soc nguoi gia',
          status: 'Complete',
        },
        {
          time: 'Tuesday',
          date: '2016-05-04',
          hour: '15h',
          name: 'Thinh',
          address: 'Phan Van Tri, Thu Duc',
          type: 'Don dep nha cua',
          status: 'Incomplete',
        },
        {
          time: 'Tuesday',
          date: '2016-05-03',
          hour: '15h',
          name: 'Thao',
          address: '12 Vo Van Ngan, Thu Duc',
          type: 'Don dep nha cua',
          status: 'Complete',
        },

        {
          time: 'Monday',
          date: '2016-05-03',
          hour: '15h',
          name: 'Thao',
          address: '12 Vo Van Ngan, Thu Duc',
          type: 'Don dep nha cua',
          status: 'Complete',
        },
      ],
    };
  }

  // componentDidMount() {
  //   getjob()
  //     .then(data => {
  //       this.setState({ data: data });
  //     })
  //     .catch(() => {
  //       alert('cannot fetch job data');
  //     });
  // }

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
