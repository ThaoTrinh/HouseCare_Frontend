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

require('styles/App.css');

class App extends React.Component {
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
        <Header />
        <div>
          <Route exact path="" component={MainSlider} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} header={Header} />
          <Route path="/user" component={HelperPage} header={Header} />
          <Route path="/user1" component={HirerPage} header={Header} />
        </div>
        <Footer />
      </div>
    );
  }

  onSelect() {}
}

export default App;
