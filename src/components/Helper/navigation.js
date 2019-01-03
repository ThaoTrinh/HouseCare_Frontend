import React from 'react';
import { Menu } from 'element-react';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  render() {
    return (
      <Menu
        defaultActive="3"
        className="el-menu-vertical-demo"
        theme="dark"
        style={{ height: 850 }}
      >
        <a href="/users">
          <Menu.Item index="1">
            <i className="el-icon-date" />
            Profile
          </Menu.Item>
        </a>
        <a href="/users/reset_password ">
          <Menu.Item index="2">
            <i className="el-icon-menu" />
            Change password
          </Menu.Item>
        </a>
        <a href="/users/schedule ">
          <Menu.Item index="3">
            <i className="el-icon-time" />
            Schedule
          </Menu.Item>
        </a>
        <a href="/users/notification ">
          <Menu.Item index="4">
            <i className="el-icon-message" />
            {/* Notification ({this.state.number}) */}
            Notification
          </Menu.Item>
        </a>
      </Menu>
    );
  }
}
