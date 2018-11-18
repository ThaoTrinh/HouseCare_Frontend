import React from 'react';
// import {Link} from 'react-router';
import { Button , Layout, Form, Input, Checkbox, Select, Radio, Switch, DatePicker, Slider } from 'element-react';
import 'element-theme-default';
import MainSlider from "./MainSlider"
import api from "./api";
export default class SignIn extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
        username: '',
        password: ''
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  onSubmit(e) {

    e.preventDefault();
    let username = this.state['username'];
    let password = this.state['password'];

    api.signin(username, password)
      .then(status => {
        // console.log(status);
        this.props.history.push('/');
      })
      .catch(err => {
        alert(err);
      })
  }
  handleChangeUsername(e){
    this.setState({username: e});
  }

  handleChangePassword(e){
    this.setState({password: e});
  }


  render() {
    return (

    <Layout.Row>
      <Layout.Col span="12">
        <div className="grid-content bg-purple">
          <img src="/logo/logup.jpg" style={{height: 900, width: 620}}/>
        </div>
      </Layout.Col>


      <Layout.Col span="12">
        <div className="grid-content bg-purple-light" style={{marginTop: 200}}>
          <Form className="en-US" model={this.state} labelWidth="120" onSubmit={this.onSubmit.bind(this)}>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">User name</h5>
              <Input className = "col-lg-10" value={this.state.username} onChange={this.handleChangeUsername}></Input>
            </Form.Item>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">Password</h5>
              <Input className = "col-lg-10" style={{width: 485}} type = "password" value={this.state.password} onChange={this.handleChangePassword}></Input>
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