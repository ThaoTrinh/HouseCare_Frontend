import React from 'react';
import { Layout, Menu } from 'element-react';
import 'element-theme-default';
import Ionicon from 'react-ionicons';
require('../../styles/App.css');

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      role: null,
    };
    this.state.username = sessionStorage.getItem('username');
    this.state.role = sessionStorage.getItem('role');
    this.handleSignout = this.handleSignout.bind(this);
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
    alert("b");
  }

  handleSignout(){
    sessionStorage.setItem('username', null);
    this.setState({
      username: null
    })
  }

  render() {
    let userbar;
    if (this.state.username == "null" || this.state.username == null) {
      userbar = (
        <div>
          <a href="/signin">
            <Menu.Item index="3">Sign in</Menu.Item>
          </a>
          <a href="/signup">
            <Menu.Item index="4">Sign up</Menu.Item>
          </a>
        </div>
      );
    } else if (this.state.role == 0) {
      userbar = (
        <div>
          <Ionicon icon="contact" fontSize="35px" />
          <a href="/users">
            <Menu.Item index="3">{this.state.username}</Menu.Item>
          </a>
          <a href="/" onClick={this.handleSignout}>
            <Menu.Item index="4" >Sign out</Menu.Item>

          </a>
        </div>
      );
    } else {
      userbar = (
        
        <div>
          <Ionicon icon="contact" fontSize="35px" />
          <a href="/users1">
            <Menu.Item index="3">{this.state.username}</Menu.Item>
          </a>
          <a href="/" onClick={this.handleSignout}>
            <Menu.Item index="4">Sign out</Menu.Item>
          </a>
        </div>
      );
    }

    return (
      <div>
        <Layout.Row>
          <Layout.Col span="12">
            <div
              className="grid-content bg-purple"
              style={{ backgroundColor: '#eef1f6' }}
            >
              <img
                src="/logo/logo.png"
                alt="logo"
                style={{ weight: 60, height: 60, paddingLeft: 150 }}
              />
            </div>
          </Layout.Col>
          <Layout.Col span="12">
            <div className="grid-content bg-purple-light">
              <div className="line">
                <Menu
                  defaultActive="1"
                  className="el-menu-demo"
                  mode="horizontal"
                  onSelect={this.onSelect.bind(this)}
                >
                  <a href="/">
                    <Menu.Item index="1">Home</Menu.Item>
                  </a>
                  <Menu.Item index="2">About us</Menu.Item>
                  {userbar}
                </Menu>
              </div>
            </div>
          </Layout.Col>
        </Layout.Row>
      </div>
    );
  }

  onSelect() {}

  
}

export default Header;
