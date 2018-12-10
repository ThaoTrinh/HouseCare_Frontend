// import React from 'react';
// import Table from 'element-react';

// export default class Schedule extends React.Component{
//   constructor(props) {
//     super(props);
  
//     this.state = {
//       columns: [
//         {
//           label: 'Time',
//           prop: 'time',
//           width: 150,
//           fixed: 'left'
//         },
//         {
//           label: 'Date',
//           prop: 'date',
//           width: 150,
//           fixed: 'left'
//         },
//         {
//           label: 'Number',
//           prop: 'number',
//           width: 120
//         },
//         {
//           label: 'Progress',
//           prop: 'progress',
//           width: 120
//         },
    
//         {
//           label: 'Operations',
//           fixed: 'right',
//           width: 120,
//           render: ()=>{
//             return <span><a type="text" size="small">Detail</a></span>;
//           }
//         }
//       ],
//       data: [{
//         time: 'Monday',
//         date: '2018-12-01',
//         number: '3',
//         progress: '2/3'
//       }, {
//         time: 'Tuesday',
//         date: '2018-12-02',
//         number: '3',
//         progress: '0/3'
//       }, {
//         time: 'Wednesday',
//         date: '2018-12-03',
//         number: '3',
//         progress: ''
//       }, {
//         time: 'Thursday',
//         date: '2018-12-04',
//         number: '3',
//         progress: '0/3'
//       }, {
//         time: 'Monday',
//         date: '2018-12-05',
//         number: '3',
//         progress: '0/3'
//       }, {
//         time: 'Friday',
//         date: '2018-12-06',
//         number: '3',
//         progress: '0/3'
//       }, {
//         time: 'Saturday',
//         date: '2018-12-07',
//         number: '3',
//         progress: '0/3'
//       },
//       {
//         time: 'Sunday',
//         date: '2016-05-04',
//         number: '3',
//         progress: '0/3'
//       }
//       ]
//     };
//   }
  
//   render() {
//     return (
//       <Table
//         style={{width: '100%'}}
//         columns={this.state.columns}
//         data={this.state.data}
//         border={true}
//         height={255}
//       />
//     );
//   }    
// }

import React from 'react';
import {Table, Button} from 'element-react';
export default class Schedule extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      columns: [
        {
          label: 'Time',
          prop: 'time',
          width: 120,
          sortable: true
        },
        {
          label: 'Date',
          prop: 'date',
          width: 180,
          sortable: true
        },
        {
          label: 'Hour',
          prop: 'hour',
          width: 120,
          sortable: true
        },
        {
          label: 'Name',
          prop: 'name',
          width: 150,
          sortable: true
        },
        {
          label: 'Address',
          prop: 'address',
          width: 180,
        },
        {
          label: 'Type',
          prop: 'type',
          sortable: true
        },

        {
          label: 'Status',
          prop: 'status'
        }

      ],
      data: [{
        time: 'Monday',
        date: '2016-05-03',
        hour: '15h',
        name: 'Thao',
        address: '12 Vo Van Ngan, Thu Duc',
        type: 'Don dep nha cua',
        status: 'Complete'
      }, {
        time: 'Monday',
        date: '2016-05-03',
        hour: '12h',
        name: 'Khoa',
        address: '14 Vo Van Tri, Go Vap',
        type: 'Cham soc tre em',
        status: 'Complete'
      }, {
        time: 'Monday',
        date: '2016-05-03',
        hour: '8h',
        name: 'Khoi',
        address: '12 Duong so 2, Thu Duc',
        type: 'Cham soc nguoi gia',
        status: 'Complete'
      }, {
        time: 'Tuesday',
        date: '2016-05-04',
        hour: '15h',
        name: 'Thinh',
        address: 'Phan Van Tri, Thu Duc',
        type: 'Don dep nha cua',
        status: 'Incomplete'
      },
      {
        time: 'Tuesday',
        date: '2016-05-03',
        hour: '15h',
        name: 'Thao',
        address: '12 Vo Van Ngan, Thu Duc',
        type: 'Don dep nha cua',
        status: 'Complete'
      },

      {
        time: 'Monday',
        date: '2016-05-03',
        hour: '15h',
        name: 'Thao',
        address: '12 Vo Van Ngan, Thu Duc',
        type: 'Don dep nha cua',
        status: 'Complete'
      }
      ]
    };
  }
  
  render() {
    return (
      <Table
        style={{width: '100%', backgroundcolor: '1111'}}
        columns={this.state.columns}
        data={this.state.data}
        border={true}
        
      />
    );
  }
  
}    