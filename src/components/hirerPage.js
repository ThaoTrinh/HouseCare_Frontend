import React from 'react';
import {Route} from 'react-router-dom';
import 'element-theme-default';
import {Layout, Switch, Client} from 'element-react';
import SliderBar from './slidebar';
import Profile from './profile';
import ChangePassword from './changePassword';
import Schedule from './schedule';
import Recruitment from './recruitment';

require('../styles/App.css');

export default class HelperPage extends React.Component {

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
        <Layout.Row className="tac">
          <Layout.Col span={4}>
            <SliderBar/>
          </Layout.Col>
          <Layout.Col span={20}>
            <div className="grid-content bg-purple-light">
              <Route exact path="/user1" component = {Profile} header = {SliderBar}/>
              <Route path="/user1/changepassword" component = {ChangePassword} header = {SliderBar}/>
              <Route path="/user1/schedule" component = {Schedule} header = {SliderBar}/>
              <Route path="/user1/recruitment" component = {Recruitment} header = {SliderBar}/>
            </div>
          </Layout.Col>
        </Layout.Row>
      </div>
    );
  }

  onSelect() {}
}


