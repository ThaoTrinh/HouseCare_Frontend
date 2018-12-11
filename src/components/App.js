import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import {} from 'element-react';
import 'element-theme-default';
import MainSlider from './Home/MainSlider';
import Header from './Home/Header';
import Footer from './Home/Footer';
import SignIn from './Home/Signin';
import SignUp from './Home/Signup';
import HelperPage from './Helper/helperPage';
import HirerPage from './Hirer/hirerPage';

require.main.require('src/styles/App.css');

class App extends React.Component {

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
        <Header/>
        <div>
          <Route exact path="" component = {MainSlider} />
          <Route path="/signup" component = {SignUp} />
          <Route path="/signin" component = {SignIn} header = {Header}/>
          <Route path="/user" component = {HelperPage} header = {Header}/>
          <Route path="/user1" component = {HirerPage} header = {Header}/>
        </div>
        <Footer/>
      </div>
    );
  }

  onSelect() {}
}

export default App;
