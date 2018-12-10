import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import {} from 'element-react';
import 'element-theme-default';
import MainSlider from './MainSlider';
import Header from './Header';
import Footer from './Footer';
import SignIn from './Signin';
import SignUp from './Signup';
import Navigation from './navigation';
import Profile from './profile';
import HelperPage from './helperPage';
import ChangePassword from './changePassword';
import HirerPage from './hirerPage';

require('../styles/App.css');

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
          <Route path="/nav" component = {Navigation} header = {Header}/>
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
