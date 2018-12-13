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
import 'element-theme-default';

import api from "components/api";

export default class SignUp extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        password: '',
        name: '',
        gmail: '',
        address:'',
        date: new Date(),
        sex: 'female',
        description: '',
        position: 'helper',
        experience: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let name = this.state['name'];
    let username = this.state['username'];
    let password = this.state['password'];
    let email = this.state['gmail'];
    let role = this.state['position'] === 'helper' ? 0 : 1 ;

    api.signup(username, password, email, name, role)
      .then(status => {
        // console.log(status);
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
      <Layout.Col span="12">
        <div className="grid-content bg-purple">
          <img src="/logo/logup.jpg" alt="logo" style={{height: 800, width: 620}}/>
        </div>
      </Layout.Col>


      <Layout.Col span="12">
        <div className="grid-content bg-purple-light">
          <Form className="en-US" model={this.state} labelWidth="120" onSubmit={this.onSubmit.bind(this)}>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">User name</h5>
              <Input className = "col-lg-10" name="username" value={this.state.username} onChange={this.handleChange('username')}></Input>
            </Form.Item>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">Password</h5>
              <Input className = "col-lg-10" style={{width: 485}} type = "password" value={this.state.password} onChange={this.handleChange('password')}></Input>
            </Form.Item>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">Name</h5>
              <Input className = "col-lg-10" value={this.state.name} onChange={this.handleChange('name')}></Input>
            </Form.Item>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">Gmail</h5>
              <Input className = "col-lg-10" value={this.state.gmail} onChange={this.handleChange('gmail')}></Input>
            </Form.Item>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">Address</h5>
              <Input className = "col-lg-10" value={this.state.address} onChange={this.handleChange('address')}></Input>
            </Form.Item>

                <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
                  <h5 className = "col-lg-4" style={{marginRight: "-118px"}}>Date of birth</h5>
                  <Form.Item prop="date1" labelWidth="0px" className = "col-lg-8">
                    <DatePicker
                    value={this.state.date}
                    placeholder="Pick a date"
                    onChange={this.handleChange('date')}
                    />
                  </Form.Item>
                </Form.Item>

              <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
                <h5 className = "col-lg-3">Experience</h5>
                <div style = {{marginLeft: 140, width: "450px"}}>
                  <Slider value={this.state.experience} onChange={this.handleChange('experience')}/>
                </div>
            </Form.Item>

              <Form.Item style={{marginLeft: "-160px"}}>
                <h5 className = "col-lg-2" style={{marginRight: 15}}>Sex</h5>
                <Radio value="female" checked={this.state.sex === 'female'} onChange={this.handleChange('sex')}>Female</Radio>
                <Radio value="male" checked={this.state.sex === 'male'} onChange={this.handleChange('sex')}>Male</Radio>
            </Form.Item>

            <Form.Item style={{marginLeft: "-160px"}}>
              <h5 className = "col-lg-2" style={{marginRight: 15}}>Position</h5>
              <Radio value="helper" checked={this.state.positon === 'helper'} onChange={this.handleChange('position')}>Helper</Radio>
              <Radio value="hirer" checked={this.state.position === 'hirer'} onChange={this.handleChange('position')}>Hire</Radio>
            </Form.Item>

             <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">Description</h5>
              <Input className = "col-lg-10" type="textarea" style={{width: 500, marginTop: 40}} value={this.state.description} onChange={this.handleChange('description')}></Input>
              </Form.Item>

            <Form.Item style={{marginTop: 30}}>
              <Button type="primary" nativeType="submit" style={{marginLeft: 60}}>Sign up</Button>
              <Button style={{marginLeft: 140}}>Cancel</Button>
            </Form.Item>

          </Form>
        </div>
      </Layout.Col>
    </Layout.Row>
    )
  }
}
