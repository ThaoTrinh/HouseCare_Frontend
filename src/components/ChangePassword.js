import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Layout, Form, Input } from 'element-react';
import api from 'components/api';

export default class ChangePassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        password: '',
        newpassword: '',
        newpassword2: '',
      },
      username: '',
      success: false,
    };

    this.state.username = sessionStorage.getItem('username');
  }

  onSubmit(e) {
    e.preventDefault();
    let password = this.state.form['password'];
    let newpassword = this.state.form['newpassword'];
    let newpassword2 = this.state.form['newpassword2'];
    let username = this.state['username'];

    if (newpassword != newpassword2) {
      alert('Two password is different. Please enter again!');
      return;
    }

    api
      .changepassword(username, password, newpassword)
      .then(() => {
        this.state.setState({ success: true });
      })
      .catch(err => {
        alert(err);
      });
  }

  handleChange(key, value) {
    this.state.form[key] = value;
    this.forceUpdate();
  }

  render() {
    if (this.state.success) return <Redirect to="/signout" />;

    return (
      <Layout.Row>
        <Layout.Col span="24">
          <div className="grid-content bg-purple-light">
            <Form
              className="en-US"
              model={this.state.form}
              labelWidth="120"
              onSubmit={this.onSubmit.bind(this)}
            >
              <Form.Item style={{ marginLeft: '100px', marginTop: 100 }}>
                <h5 className="col-lg-2">Old password</h5>
                <Input
                  className="col-lg-10"
                  style={{ width: 485 }}
                  type="password"
                  value={this.state.form.password}
                  onChange={this.handleChange.bind(this, 'password')}
                />
              </Form.Item>

              <Form.Item style={{ marginLeft: '100px', marginTop: 30 }}>
                <h5 className="col-lg-2">New password</h5>
                <Input
                  className="col-lg-10"
                  style={{ width: 485 }}
                  type="password"
                  value={this.state.form.newpassword}
                  onChange={this.handleChange.bind(this, 'newpassword')}
                />
              </Form.Item>

              <Form.Item style={{ marginLeft: '100px', marginTop: 30 }}>
                <h5 className="col-lg-2">Password again</h5>
                <Input
                  className="col-lg-10"
                  style={{ width: 485 }}
                  type="password"
                  value={this.state.form.newpassword2}
                  onChange={this.handleChange.bind(this, 'newpassword2')}
                />
              </Form.Item>

              <Form.Item style={{ marginLeft: '300px', marginTop: 30 }}>
                <Button
                  type="primary"
                  nativeType="submit"
                  style={{ marginLeft: 60 }}
                >
                  Change
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
