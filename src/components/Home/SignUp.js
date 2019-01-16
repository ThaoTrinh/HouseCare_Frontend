import React from 'react';
import {
  Button,
  Layout,
  Form,
  Input,
  Radio,
  DatePicker,
  Slider,
} from 'element-react';
import 'element-theme-default';

import api from 'components/api';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        username: '',
        password: '',
        name: '',
        email: '',
        address: '',
        date: new Date(),
        sex: 'female',
        description: '',
        position: 'hirer',
        experience: 0,
      },
      err: false,
    };
  }

  onSubmit(e) {
    e.preventDefault();
    let name = this.state.form['name'];
    let username = this.state.form['username'];
    let password = this.state.form['password'];
    let email = this.state.form['email'];
    let role = this.state.form['position'] === 'helper' ? 0 : 1;
    let address = this.state.form['address'];

    if (
      username.length < 6 ||
      password.length < 8 ||
      !this.validateEmail(email)
    ) {
      alert('Input is false! Check again!');
    } else {
      api
        .signup(username, password, email, name, role, address)
        .then(status => {
          this.props.history.replace('/');
          this.forceUpdate();
        })
        .catch(err => {
          // alert("Input is false. Check again!");
          alert(err);
        });
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  checkUsername = () => {};

  handleChange = (key, value) => {
    this.setState({
      form: Object.assign(this.state.form, { [key]: value }),
    });
  };

  render() {
    return (
      <Layout.Row>
        <Layout.Col span="12">
          <div className="grid-content bg-purple">
            <img
              src="/logo/logup.jpg"
              alt="logo"
              style={{ height: 900, width: 620 }}
            />
          </div>
        </Layout.Col>

        <Layout.Col span="12">
          <div className="grid-content bg-purple-light">
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
                {this.state.form.username.length < 6 &&
                this.state.form.username.length > 0 ? (
                  <h6 style={{ color: 'red', marginLeft: 140 }}>
                    User name có ít nhất 6 kí tự{' '}
                  </h6>
                ) : (
                  ''
                )}
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
                <br />
                {this.state.form.password.length < 8 &&
                this.state.form.password.length > 0 ? (
                  <h6 style={{ color: 'red', marginLeft: 140 }}>
                    Password có ít nhất 8 kí tự{' '}
                  </h6>
                ) : (
                  ''
                )}
              </Form.Item>

              <Form.Item style={{ marginLeft: '-160px', marginTop: 30 }}>
                <h5 className="col-lg-2">Name</h5>
                <Input
                  className="col-lg-10"
                  value={this.state.form.name}
                  onChange={this.handleChange.bind(this, 'name')}
                />
              </Form.Item>

              <Form.Item style={{ marginLeft: '-160px', marginTop: 30 }}>
                <h5 className="col-lg-2">Email</h5>
                <Input
                  className="col-lg-10"
                  value={this.state.form.email}
                  onChange={this.handleChange.bind(this, 'email')}
                />
                {this.state.form.email === '' ? (
                  ''
                ) : this.validateEmail(this.state.form.email) ? (
                  ''
                ) : (
                  <h6 style={{ color: 'red', marginLeft: 140 }}>
                    Vui lòng nhập đúng email{' '}
                  </h6>
                )}
              </Form.Item>

              <Form.Item style={{ marginLeft: '-160px', marginTop: 30 }}>
                <h5 className="col-lg-2">Address</h5>
                <Input
                  className="col-lg-10"
                  value={this.state.form.address}
                  onChange={this.handleChange.bind(this, 'address')}
                />
              </Form.Item>

              <Form.Item style={{ marginLeft: '-160px', marginTop: 30 }}>
                <h5 className="col-lg-4" style={{ marginRight: '-118px' }}>
                  Date of birth
                </h5>
                <Form.Item prop="date1" labelWidth="0px" className="col-lg-8">
                  <DatePicker
                    value={this.state.form.date}
                    placeholder="Pick a date"
                    onChange={this.handleChange.bind(this, 'date')}
                  />
                </Form.Item>
              </Form.Item>

              <Form.Item style={{ marginLeft: '-160px', marginTop: 30 }}>
                <h5 className="col-lg-3">Experience</h5>
                <div style={{ marginLeft: 140, width: '450px' }}>
                  <Slider
                    value={this.state.form.experience}
                    onChange={this.handleChange.bind(this, 'experience')}
                  />
                </div>
              </Form.Item>

              <Form.Item style={{ marginLeft: '-160px' }}>
                <h5 className="col-lg-2" style={{ marginRight: 15 }}>
                  Sex
                </h5>
                <Radio
                  value="female"
                  checked={this.state.form.sex === 'female'}
                  onChange={this.handleChange.bind(this, 'sex')}
                >
                  Female
                </Radio>
                <Radio
                  value="male"
                  checked={this.state.form.sex === 'male'}
                  onChange={this.handleChange.bind(this, 'sex')}
                >
                  Male
                </Radio>
              </Form.Item>

              <Form.Item style={{ marginLeft: '-160px' }}>
                <h5 className="col-lg-2" style={{ marginRight: 15 }}>
                  Position
                </h5>
                <Radio
                  value="helper"
                  checked={this.state.form.positon === 'helper'}
                  onChange={this.handleChange.bind(this, 'position')}
                >
                  Helper
                </Radio>
                <Radio
                  value="hirer"
                  checked={this.state.form.position === 'hirer'}
                  onChange={this.handleChange.bind(this, 'position')}
                >
                  Hire
                </Radio>
              </Form.Item>

              <Form.Item style={{ marginLeft: '-160px', marginTop: 30 }}>
                <h5 className="col-lg-2">Description</h5>
                <Input
                  className="col-lg-10"
                  type="textarea"
                  style={{ width: 500, marginTop: 40 }}
                  value={this.state.form.description}
                  onChange={this.handleChange.bind(this, 'description')}
                />
              </Form.Item>

              <Form.Item style={{ marginTop: 30 }}>
                <Button
                  type="primary"
                  nativeType="submit"
                  style={{ marginLeft: 60 }}
                >
                  Sign up
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
