import React from 'react';
import ReactDOM from 'react-dom';
// import {Route, IndexRoute, Switch} from 'react-router';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {
  browserHistory
} from 'react-router';
import App from './components/App';
import SignUp from './components/Signup';
import SignIn from './components/Signin';

import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "./styles/font-awesome/css/font-awesome.min.css";
import "./styles/footer.css";
import MainSlider from './components/MainSlider';

const routes =
    (
        <BrowserRouter>
            <Route path="/" component = {App}>
            </Route>
        </BrowserRouter>
   )

ReactDOM.render(
    routes,
    document.getElementById('app'),  // eslint-disable-line no-undef
);