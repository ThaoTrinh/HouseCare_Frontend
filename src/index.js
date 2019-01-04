import React from 'react';
import ReactDOM from 'react-dom';
// import {Route, IndexRoute, Switch} from 'react-router';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import App from './components/App';


import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import './styles/font-awesome/css/font-awesome.min.css';
import './styles/footer.css';

const routes =
(
  <BrowserRouter>
    <Route path="/" component = {App}>
    </Route>
  </BrowserRouter>
);

<<<<<<< HEAD
=======
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
  
>>>>>>> master
ReactDOM.render(
  routes,
  document.getElementById('app'),  // eslint-disable-line no-undef
);