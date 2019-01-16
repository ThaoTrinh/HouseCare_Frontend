import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout } from 'element-react';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  render() {
    return (
      <Menu defaultActive="3" theme="dark" mode="vertical">
        <Link to="/profile">
          <Menu.Item index="1">
            <i className="el-icon-date" />
            Profile
          </Menu.Item>
        </Link>
        <Link to="/profile/reset-password">
          <Menu.Item index="2">
            <i className="el-icon-menu" />
            Change Password
          </Menu.Item>
        </Link>
        <Link to="/profile/schedule">
          <Menu.Item index="3">
            <i className="el-icon-time" />
            Schedule
          </Menu.Item>
        </Link>
        <Link to="/profile">
          <Menu.Item index="4">
            <i className="el-icon-message" />
            {/* Notification ({this.state.number}) */}
            Notification
          </Menu.Item>
        </Link>
      </Menu>
    );
  }
}
