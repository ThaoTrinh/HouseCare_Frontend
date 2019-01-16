import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'element-react';
import 'element-theme-default';

import Navigation from 'components/Helper/navigation';
import JobPosting from 'components/Helper/jobPosting';

import Profile from 'components/profile';
import Schedule from 'components/schedule';
import ChangePassword from 'components/ChangePassword';

require('styles/App.css');

export default class HelperPage extends React.Component {
  constructor() {
    super();
    this.state = { showPopup: false };
  }
  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  render() {
    return (
      <Switch location={this.props.location}>
        <Route exact path="/users" component={Profile} />
        <Route path="/users/reset_password" component={ChangePassword} />
        <Route path="/users/schedule" component={Schedule} />
        <Route path="/users/notification" component={JobPosting} />
      </Switch>
    );
  }

  onSelect() {}
}
