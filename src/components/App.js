require('../styles/App.css');
import React from 'react';
import { Button , Layout, Menu } from 'element-react';
import 'element-theme-default';
import MainSlider from "./MainSlider"
import Header from './Header'
import Footer from './Footer'
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
          {this.props.children}
        </div>
        <Footer/>
    </div>
    
    )
  }

  onSelect() {}
}

export default App;
