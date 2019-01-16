import React from 'react';
import { Redirect } from 'react-router';
import { Button, Layout, Form, Input } from 'element-react';
import 'element-theme-default';

import api from 'components/api';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        username: '',
        password: '',
      },
      signin: false,
    };

    this.changeUser = this.props.changeUser;
  }

  onSubmit(e) {
    e.preventDefault();
    let username = this.state.form['username'];
    let password = this.state.form['password'];

    api
      .signin(username, password)
      .then(data => {
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('role', data.role);
        sessionStorage.setItem('jwt', data.token);
        sessionStorage.setItem('id', data.id);
        this.changeUser({
          username: data.username,
          role: data.role,
        });
        this.setState({ signin: true });
      })
      .catch(err => {
        alert(err);
      });
  }

  handleChange = (key, value) => {
    this.setState({
      form: Object.assign(this.state.form, { [key]: value }),
    });
  };

  render() {
    if (this.state.signin) return <Redirect push to="/" />;
    return (
      <Layout.Row>
        <Layout.Col span="12">
          <div className="grid-content bg-purple">
            <img
              src="/logo/logup.jpg"
              alt="logo"
              style={{ height: 640, width: 620 }}
            />
          </div>
        </Layout.Col>

        <Layout.Col span="12">
          <div
            className="grid-content bg-purple-light"
            style={{ marginTop: 200 }}
          >
            <Form
              className="en-US"
              model={this.state.form}
              labelWidth="120"
              onSubmit={this.onSubmit.bind(this)}
            >
              <Form.Item style={{ marginLeft: '-160px', marginTop: 30 }}>
                <h5 className="col-lg-2">User name</h5>
                <Input
                  className="col-lg-10"
                  value={this.state.form.username}
                  onChange={this.handleChange.bind(this, 'username')}
                />
              </Form.Item>

              <Form.Item style={{ marginLeft: '-160px', marginTop: 30 }}>
                <h5 className="col-lg-2">Password</h5>
                <Input
                  className="col-lg-10"
                  style={{ width: 485 }}
                  type="password"
                  value={this.state.form.password}
                  onChange={this.handleChange.bind(this, 'password')}
                />
              </Form.Item>

              <Form.Item style={{ marginTop: 30 }}>
                <Button
                  type="primary"
                  nativeType="submit"
                  style={{ marginLeft: 60 }}
                >
                  Sign In
                </Button>
                <Button style={{ marginLeft: 140 }}>Cancel</Button>
              </Form.Item>
            </Form>
          </div>
        </Layout.Col>
      </Layout.Row>
    );
  }
}
