import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'element-react';
import 'element-theme-default';

import Navigation from 'components/Helper/navigation';
import JobPosting from 'components/Helper/jobPosting';

import Profile from 'components/profile';
import Schedule from 'components/schedule';
import ChangePassword from 'components/changePassword';
import DataContract from 'components/dataContract';

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
    const {drizzle, drizzleState} = this.props;

    return (
      <div>
        <Layout.Row className="tac">
          <Layout.Col span={4}>
            <Navigation />
          </Layout.Col>
          <Layout.Col span={20}>
            <div className="grid-content bg-purple-light">
            <Route exact
                  path ="/users"
                  render = {(props) =>
                  <Profile {...props}
                  header={Navigation}
                  drizzleState={drizzleState}
                  drizzle = {drizzle}
                  />}
                />
              <Route
                path="/users/reset_password"
                component={ChangePassword}
                header={Navigation}
              />
              {/* <Route
                path="/users/schedule"
                component={Schedule}
                header={Navigation}
              /> */}

              <Route
                path ="/users/schedule"
                render = {(props) =>
                <Schedule {...props}
                header={Navigation}
                drizzleState={drizzleState}
                drizzle = {drizzle}
                />}
              />

                <Route exact
                  path ="/users/notification"
                  render = {(props) =>
                  <JobPosting {...props}
                  header={Navigation}
                  drizzleState={drizzleState}
                  drizzle = {drizzle}
                  />}
                />
                
                <Route exact
                  path ="/users/datacontract"
                  render = {(props) =>
                  <DataContract {...props}
                  header={Navigation}
                  drizzleState={drizzleState}
                  drizzle = {drizzle}
                  />}
                />
            </div>
          </Layout.Col>
        </Layout.Row>
      </div>
    );
  }

  onSelect() {}
}
