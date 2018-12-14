import React from 'react';
import {
  Button,
  Layout,
  Form,
  Input,
  Radio,
  DatePicker,
  Slider
} from 'element-react';


import api from "components/api";
export default class ChangePassword extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        password: '',
        newpassword: '',
        newpassword2: '',
        username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.state.username = sessionStorage.getItem('username');
  }

  onSubmit(e) {
    e.preventDefault();
    let password = this.state['password'];
    let newpassword = this.state['newpassword'];
    let newpassword2 = this.state['newpassword2'];
    let username = this.state['username'];

    if(newpassword != newpassword2){
      alert("Two password is difference. Please enter again!")
    }

    api.changepassword(username, password, newpassword)
      .then(data => {
        sessionStorage.clear();
        this.props.history.push('/');
      })
      .catch(err => {
        alert(err);
      })
    }
  
  handleChange = name => value => {
    this.setState({[name]: value});
  }


  render() {
    return (
    <Layout.Row>
      <Layout.Col span="24">
        <div className="grid-content bg-purple-light">
          <Form className="en-US" model={this.state} labelWidth="120" onSubmit={this.onSubmit.bind(this)}>

            <Form.Item style={{marginLeft: "100px", marginTop: 100}}>
              <h5 className = "col-lg-2">Old password</h5>
              <Input className = "col-lg-10" style={{width: 485}} type = "password" value={this.state.password} onChange={this.handleChange('password')}></Input>
            </Form.Item>

            <Form.Item style={{marginLeft: "100px", marginTop: 30}}>
              <h5 className = "col-lg-2">New password</h5>
              <Input className = "col-lg-10" style={{width: 485}} type = "password" value={this.state.newpassword} onChange={this.handleChange('newpassword')}></Input>
            </Form.Item>

            <Form.Item style={{marginLeft: "100px", marginTop: 30}}>
              <h5 className = "col-lg-2">Password again</h5>
              <Input className = "col-lg-10" style={{width: 485}} type = "password" value={this.state.newpassword2} onChange={this.handleChange('newpassword2')}></Input>
            </Form.Item>

            <Form.Item style={{marginLeft: "300px", marginTop: 30}}>
              <Button type="primary" nativeType="submit" style={{marginLeft: 60}}>Change</Button>
              <Button style={{marginLeft: 140}}>Cancel</Button>
            </Form.Item>

          </Form>
        </div>
      </Layout.Col>
    </Layout.Row>
    )
  }
}
