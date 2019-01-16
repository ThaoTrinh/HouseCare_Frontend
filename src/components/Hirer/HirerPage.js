import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'element-react';
import 'element-theme-default';

import SliderBar from 'components/Hirer/slidebar';
import Recruitment from 'components/Hirer/recruitment';
import ChooseHelper from 'components/Hirer/chooseHelper';

import Profile from 'components/profile';
import ChangePassword from 'components/ChangePassword';
import Schedule from 'components/schedule';

require('styles/App.css');

export default class HirerPage extends React.Component {
  constructor() {
    super();
    this.state = { showPopup: false };
  }
  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  render() {
    return (
      <div>
        <Layout.Row className="tac">
          <Layout.Col span={4}>
            <SliderBar />
          </Layout.Col>
          <Layout.Col span={20}>
            <div className="grid-content bg-purple-light">
              <Route
                exact
                path="/users1"
                component={Profile}
                header={SliderBar}
              />
              <Route
                path="/users1/reset_password"
                component={ChangePassword}
                header={SliderBar}
              />
              <Route
                path="/users1/schedule"
                component={Schedule}
                header={SliderBar}
              />
              <Route
                path="/users1/recruitment"
                component={Recruitment}
                header={SliderBar}
              />

              <Route
                path="/users1/chooseHelper"
                component={ChooseHelper}
                header={SliderBar}
              />
            </div>
          </Layout.Col>
        </Layout.Row>
      </div>
    );
  }

  onSelect() {}
}
