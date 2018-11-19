import React from 'react';
import {Route} from 'react-router-dom';
import 'element-theme-default';
import MainSlider from './MainSlider';
import Header from './Header';
import Footer from './Footer';
import SignIn from './Signin';
import SignUp from './Signup';
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
        <Header />
        <div>
          {/* {this.props.children} */}
          <Route exact path="" component = {MainSlider} />
          <Route path="/signup" component = {SignUp} />
          <Route path="/signin" component = {SignIn} header = {Header}/>
        </div>
        <Footer/>
      </div>
    );
  }

  onSelect() {}
}

export default App;
