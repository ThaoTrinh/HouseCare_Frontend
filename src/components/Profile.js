import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'element-react';
import 'element-theme-default';

import Navigation from 'components/Navigation';
import JobPosting from 'components/Helper/jobPosting';

import Schedule from 'components/schedule';
import ChangePassword from 'components/ChangePassword';
import HelperPage from 'components/Helper/HelperPage';
import HirerPage from 'components/Hirer/HirerPage';

import 'element-theme-default';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      role: sessionStorage.getItem('role', null),
    };
  }

  render() {
    const { role, path } = this.state;
    if (role === null) return <Redirect to="/" />;

    return (
      <Layout.Row>
        <Layout.Col span="4">
          <Navigation />
        </Layout.Col>

        <Layout.Col span="20">
          <Switch>
            <Route
              path={'/profile/reset-password'}
              component={ChangePassword}
            />
            <Route path={'/profile/schedule'} component={Schedule} />
            <Route path={'/profile/notification'} component={JobPosting} />
          </Switch>
        </Layout.Col>
      </Layout.Row>
    );
  }
}

export default Profile;
