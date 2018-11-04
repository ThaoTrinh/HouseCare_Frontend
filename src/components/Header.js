require('../styles/App.css');
import React from 'react';
import { Button , Layout, Menu } from 'element-react';
import 'element-theme-default';
import MainSlider from "./MainSlider"

class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  
  render() {
    return (
      <div>
        <Layout.Row>
        <Layout.Col span="12"><div className="grid-content bg-purple" style={{ backgroundColor:"#eef1f6"}}><img src="/logo/logo.png" style={{weight: 60, height: 60, paddingLeft:150}}/></div></Layout.Col>
        <Layout.Col span="12"><div className="grid-content bg-purple-light"> 
        <div className="line">
          <Menu defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
          
            <a href="/"><Menu.Item index="1">Home</Menu.Item></a>
            <Menu.Item index="2">About us</Menu.Item>
            <a href="/signin"><Menu.Item index="3">Sign in</Menu.Item></a>
            <a href="/signup"><Menu.Item index="4">Sign up</Menu.Item></a>
          </Menu>
        </div>
        </div></Layout.Col>
      </Layout.Row>
    </div>
    
    )
  }

  onSelect() {}
}

export default Header;