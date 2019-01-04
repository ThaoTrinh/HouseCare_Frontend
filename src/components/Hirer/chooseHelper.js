import React from 'react';
import { Table, Button } from 'element-react';
import api from 'components/api';


export default class ChooseHelper extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      columns: [
       
        { label: 'Date', prop: 'date', width: 180, sortable: true },
        { label: 'Hour', prop: 'hour', width: 140, sortable: true },
        { label: 'Name', prop: 'name', width: 178, sortable: true },
        { label: 'Address', prop: 'address', width: 180 },
        { label: 'Experience', prop: 'experience', width: 190, sortable: true },
        { label: 'Owner', prop: 'owner', width: 140, sortable: true },
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
                  onClick={this.accept.bind(this, index)}
                >
                  Choose
                </Button>
              </span>
            );
          },
        },
      ],
      data: [
        {
            owner: 'Thao',
            date: '2016-05-03',
            hour: '15h',
            name: 'Thao',
            address: '12 Vo Van Ngan, Thu Duc',
          },
          {
            owner: 'Thao',
            date: '2016-05-03',
            hour: '12h',
            name: 'Khoa',
            address: '14 Vo Van Tri, Go Vap',
          },
      ],
    };
  }

  accept(index) {
    api.chooseWork(index)
      .then(data => {
        
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <Table
        style={{ width: '100%' }}
        columns={this.state.columns}
        data={this.state.data}
        border
      />
    );
  }
}
