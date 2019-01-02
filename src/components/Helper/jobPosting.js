import React from 'react';
import { Table, Button } from 'element-react';
import api from 'components/api';
export default class JobPosting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { label: 'Time', prop: 'time', width: 120, sortable: true },
        { label: 'Duration', prop: 'timespan', width: 180, sortable: true },
        { label: 'Salary', prop: 'salary', width: 120, sortable: true },
        { label: 'Owner', prop: 'owner', width: 150, sortable: true },
        { label: 'Address', prop: 'address', width: 180 },
        { label: 'Type', prop: 'type', sortable: true },

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
                  Accept
                </Button>
              </span>
            );
          },
        },
      ],
      data: [],
    };
  }

  componentDidMount() {
    api
      .getWorkList()
      .then(data => {
        data.filter(d => d.worker == null);

        data.map(d => {
          d.time = new Date(Date.parse(d.time));
          d.time = d.time.toLocaleString();
          d.timespan = d.timespan / (1000 * 60 * 60) + ' hours';
          d.owner = d.owner.username;
          d.address = d.location;
          d.salary = d.expectedSalary;
        });
        this.setState({ data });
        // alert(JSON.stringify(data));
      })
      .catch(err => {
        alert(err);
      });
  }

  accept(index) {
    // khi 1 người nhấn vào nút accept thì trường dữ liệu đó sẽ bị xóa
    // dong huy bo do se duoc them vao lich trinh cua nguoi giup viec
    // lich trinh cua nguoi thue se cap nhat ten cua nguoi giup viec
    // bảng hiển thị của những người khác cũng sẽ không có

    // cap nhat lai helper cho cong viec
    const { data } = this.state;
    api
      .chooseWork()
      .then(data => {})
      .catch(err => {
        alert(err);
      });

    // xoa hang duoc chon do
    data.splice(index, 1);
    this.setState({
      data: [...data],
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
