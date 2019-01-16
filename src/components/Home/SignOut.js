import React from 'react';
import { Redirect } from 'react-router';

export default class SignOut extends React.Component {
  constructor(props) {
    super(props);

    sessionStorage.clear();
  }

  render() {
    return <Redirect push to="/" />;
  }
}
