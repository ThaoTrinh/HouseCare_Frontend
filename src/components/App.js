import React from 'react';
import { Route } from 'react-router-dom';
import 'element-theme-default';

import MainSlider from 'components/Home/MainSlider';
import Header from 'components/Home/Header';
import Footer from 'components/Home/Footer';
import SignIn from 'components/Home/Signin';
import SignUp from 'components/Home/Signup';
import HelperPage from 'components/Helper/helperPage';
import HirerPage from 'components/Hirer/hirerPage';

import {Drizzle, generateStore} from "drizzle";
import Work from "../contracts/Work.json";
require('styles/App.css');

class App extends React.Component {
  constructor() {
    super();
    this.state = { showPopup: false, loading: true, drizzleState: null, drizzle : null};
  }
  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  componentDidMount() {
    const options = { contracts: []};
    const drizzleStore = generateStore(options);

    const drizzle = new Drizzle(options, drizzleStore);
    this.unsubscribe = drizzle.store.subscribe(() => {
      const drizzleState = drizzle.store.getState();
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({loading: false, drizzleState, drizzle});
      }
    })
  }



  render() {

    if (this.state.loading) {
      return "Loading, please wait";
    }

    return (
      <div>
        <Header />
        <div>
          <Route exact path="" component={MainSlider} />
          <Route path="/signup" component={SignUp} />
          {/* <Route path="/signin" component={SignIn} header={Header} drizzle = {drizzle}/> */}
          <Route path ="/signin" render = {(props) => <SignIn {...props} header={Header} drizzle={this.state.drizzle} drizzleState = {this.state.drizzleState}/>}/>
          <Route path ="/users" render = {(props) => <HelperPage {...props} header={Header} drizzleState={this.state.drizzleState} drizzle = {this.state.drizzle}/>}/>
          <Route path ="/users1" render = {(props) => <HirerPage {...props} header={Header} drizzleState={this.state.drizzleState} drizzle = {this.state.drizzle}/>}/>
          {/* <Route path="/users" component={HelperPage} header={Header} />
          <Route path="/users1" component={HirerPage} header={Header} /> */}

        </div>
        <Footer />
      </div>
    );
  }

  onSelect() {}
}

export default App;
