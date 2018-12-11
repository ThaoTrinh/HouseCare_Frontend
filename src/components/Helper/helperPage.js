import React from 'react';
import {Route} from 'react-router-dom';
import 'element-theme-default';
import {Layout, Switch, Client} from 'element-react';
import Navigation from './navigation';
import Profile from '../profile';
import ChangePassword from '../changePassword';
import Schedule from '../schedule';
import NewWork from './newWork';

require('../../styles/App.css');

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
            <Navigation/>
          </Layout.Col>
          <Layout.Col span={20}>
            <div className="grid-content bg-purple-light">
              <Route exact path="/user" component = {Profile} header = {Navigation}/>
              <Route path="/user/changepassword" component = {ChangePassword} header = {Navigation}/>
              <Route path="/user/schedule" component = {Schedule} header = {Navigation}/>
              <Route path="/user/notification" component = {NewWork} header = {Navigation}/>
            </div>
          </Layout.Col>
        </Layout.Row>
      </div>
    );
  }

  onSelect() {}
}


