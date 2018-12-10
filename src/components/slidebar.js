import React from 'react';
import {Menu} from 'element-react';


export default class SlideBar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  render(){
    return(
      <Menu defaultActive="3" className="el-menu-vertical-demo" theme="dark" style={{height: 950}}>
        <a href="/user1">
          <Menu.Item index="1" ><i className="el-icon-date"></i>Profile</Menu.Item>
        </a>
        <a href="/user1/changepassword">
          <Menu.Item index="2"><i className="el-icon-menu"></i>Change password</Menu.Item>
        </a>
        <a href="/user1/schedule">
          <Menu.Item index="3"><i className="el-icon-time"></i>Schedule</Menu.Item>
        </a>
        <a href="/user1/recruitment">
          <Menu.Item index="4"><i className="el-icon-document"></i>Recruitment</Menu.Item>
        </a>
      </Menu>
    );
  }
}