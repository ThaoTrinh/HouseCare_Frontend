import React from 'react';
import {
  Button,
  Layout,
  Form,
  Input,
} from 'element-react';
import 'element-theme-default';

import api from "components/api";

export default class SignIn extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        password: '',
        signin: false
    };

    // this.handleChangeUsername = this.handleChangeUsername.bind(this);
    // this.handleChangePassword = this.handleChangePassword.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {

    e.preventDefault();
    let username = this.state['username'];
    let password = this.state['password'];

    api.signin(username, password)
      .then(data => {
        // console.log(status);
        this.setState({signin: true});
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('role', data.role);
        sessionStorage.setItem('jwt', data.token);
        sessionStorage.setItem('id', data.id);
        // alert(sessionStorage.getItem('username'));
        //alert(sessionStorage.getItem('id'));
        //alert(JSON.stringify(data));
        // this.props.history.push('/', {
        //   isSignin: true
        // });

        this.props.history.go(-1);
      })
      .catch(err => {
        alert(err);
      })
  }

  handleChange = name => value => {
    this.setState({[name]: value});
  }

  /* handleChangeUsername(e){
    this.setState({username: e});
  }

  handleChangePassword(e){
    this.setState({password: e});
  } */


  render() {
    return (

    <Layout.Row>
      <Layout.Col span="12">
        <div className="grid-content bg-purple">
          <img src="/logo/logup.jpg" alt="logo" style={{height: 640, width: 620}}/>
        </div>
      </Layout.Col>


      <Layout.Col span="12">
        <div className="grid-content bg-purple-light" style={{marginTop: 200}}>
          <Form className="en-US" model={this.state} labelWidth="120" onSubmit={this.onSubmit.bind(this)}>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">User name</h5>
              <Input className = "col-lg-10" value={this.state.username} onChange={this.handleChange('username')}></Input>
            </Form.Item>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">Password</h5>
              <Input className = "col-lg-10" style={{width: 485}} type = "password" value={this.state.password} onChange={this.handleChange('password')}></Input>
            </Form.Item>


            <Form.Item style={{marginTop: 30}}>
              <Button type="primary" nativeType="submit" style={{marginLeft: 60}}>Sign In</Button>
              <Button style={{marginLeft: 140}}>Cancel</Button>
            </Form.Item>

          </Form>
        </div>
      </Layout.Col>
    </Layout.Row>
    )
  }
}
