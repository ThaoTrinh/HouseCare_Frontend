import React from 'react';
import { Button , Layout, Form, Input, Checkbox, Select, Radio, Switch, DatePicker } from 'element-react';
import 'element-theme-default';
import MainSlider from "./MainSlider"

export default class SignIn extends React.Component{
    constructor(props) {
        super(props);
      
        this.state = {
          form: {
            name: '',
            sex: '',
            date1: null,
            date2: null,
            public: false,
            type: [],
            position: '',
            desc: '',
            address: '',
            username: '',
            password: ''
          }
        };
      }
      
      onSubmit(e) {
        e.preventDefault();
      }
      
      onChange(key, value) {
        this.state.form[key] = value;
        this.forceUpdate();
      }
      
      render() {
        return (

        <Layout.Row>
            <Layout.Col span="12">
                <div className="grid-content bg-purple">
                    <img src="/logo/logup.jpg" style={{height: 500, width: 500}}/>
                </div>
            </Layout.Col>


            <Layout.Col span="12">
                <div className="grid-content bg-purple-light">
                    <Form className="en-US" model={this.state.form} labelWidth="120" onSubmit={this.onSubmit.bind(this)}>

                        <Form.Item style={{marginLeft: "-160px", marginTop: 200}}>
                            <h5 className = "col-lg-2">User name</h5>
                            <Input className = "col-lg-10" value={this.state.form.username} onChange={this.onChange.bind(this, 'username')}></Input>
                        </Form.Item>

                        <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
                            <h5 className = "col-lg-2">Password</h5>
                            <Input className = "col-lg-10" style={{width: 485}} type = "password" value={this.state.form.password} onChange={this.onChange.bind(this, 'password')}></Input>
                        </Form.Item>

                         <Form.Item style={{marginTop: 30}}>
                            <Button type="primary" nativeType="submit" style={{marginLeft: 60}}>Sign in</Button>
                            <Button style={{marginLeft: 140}}>Cancel</Button>
                        </Form.Item>
                       
                        </Form>
                </div>
            </Layout.Col>
          </Layout.Row>


        )
      }
}