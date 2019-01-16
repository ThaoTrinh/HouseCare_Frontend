import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

export default class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    const { component, ...rest } = this.props;

    this.state = {
      component,
      rest,
    };
  }

  render() {
    return (
      <Route
        {...this.state.rest}
        render={props =>
          1 > 2 ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/signin',
                state: { from: this.props.location },
              }}
            />
          )
        }
      />
    );
  }
}
