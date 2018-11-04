import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import {browserHistory} from 'react-router'
import App from './components/App'
import SignUp from './components/Signup'
import SignIn from './components/Signin'
// Render the main component into the dom

import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "./styles/font-awesome/css/font-awesome.min.css";
import "./styles/footer.css"
import MainSlider from './components/MainSlider';
//
const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MainSlider}></IndexRoute>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/signin" component={SignIn}></Route>
      </Route>
    </Router>
  )
  
ReactDOM.render(
    routes,
    document.getElementById('app'), // eslint-disable-line no-undef
  );
