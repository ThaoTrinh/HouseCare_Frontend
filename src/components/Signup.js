import React from 'react';
import { Button , Layout, Form, Input, Checkbox, Select, Radio, Switch, DatePicker } from 'element-react';
import 'element-theme-default';
import MainSlider from "./MainSlider"

export default class SignUp extends React.Component{
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
                    <img src="/logo/logup.jpg" style={{height: 640, width: 620}}/>
                </div>
            </Layout.Col>


            <Layout.Col span="12">
                <div className="grid-content bg-purple-light">
                    <Form className="en-US" model={this.state.form} labelWidth="120" onSubmit={this.onSubmit.bind(this)}>

                        <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
                            <h5 className = "col-lg-2">User name</h5>
                            <Input className = "col-lg-10" value={this.state.form.username} onChange={this.onChange.bind(this, 'username')}></Input>
                        </Form.Item>

                        <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
                            <h5 className = "col-lg-2">Password</h5>
                            <Input className = "col-lg-10" style={{width: 485}} type = "password" value={this.state.form.password} onChange={this.onChange.bind(this, 'password')}></Input>
                        </Form.Item>

                        <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
                            <h5 className = "col-lg-2">Name</h5>
                            <Input className = "col-lg-10" value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
                        </Form.Item>

                        <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
                            <h5 className = "col-lg-2">Address</h5>
                            <Input className = "col-lg-10" value={this.state.form.address} onChange={this.onChange.bind(this, 'address')}></Input>
                        </Form.Item>

                        <div className = "col-lg-12" style={{left: "-33px"}}>
                        <div className = "col-lg-7">
                        <Form.Item style={{marginLeft: "-158px"}}>
                            <h5 className = "col-lg-4" style={{marginRight: "-5px"}}>Date of birth</h5>
                            <Form.Item prop="date1" labelWidth="0px" className = "col-lg-8">
                                <DatePicker
                                value={this.state.form.date1}
                                placeholder="Pick a date"
                                onChange={this.onChange.bind(this, 'date1')}
                                />
                            </Form.Item>
                        </Form.Item>
                        </div>
                        <div className = "col-lg-5">
                        <Form.Item style={{marginLeft: "-190px", marginRight: 35}}>
                            <h5 className = "col-lg-2">Sex</h5>
                            <Select value={this.state.form.sex} placeholder="Select your sex" className = "col-lg-10">
                            <Select.Option label="Male" value="shanghai"></Select.Option>
                            <Select.Option label="Female" value="beijing"></Select.Option>
                            </Select>
                        </Form.Item>
                        </div>
                        </div>

                        <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
                            <h5 className = "col-lg-3">Year of experience</h5>
                            <Checkbox.Group value={this.state.form.type} onChange={this.onChange.bind(this, 'type')}>
                            <Checkbox label="0 - 1" name="type" style={{marginRight: 20}}></Checkbox>
                            <Checkbox label="1 - 3" name="type" style={{marginRight: 20}}></Checkbox>
                            <Checkbox label="3 - 5" name="type" style={{marginRight: 20}}></Checkbox>
                            <Checkbox label="Over 5" name="type" style={{marginRight: 20}}></Checkbox>
                            </Checkbox.Group>
                        </Form.Item> 

                       <Form.Item style={{marginLeft: "-160px"}}>
                            <h5 className = "col-lg-2" style={{marginRight: 60}}>Position</h5>
                            <Radio.Group value={this.state.form.position}>
                            <Radio value="Hirer" style={{marginRight: 15}}></Radio>
                            <Radio value="House helper"></Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item style={{marginLeft: "-160px"}}>
                            <h5 className = "col-lg-2">Description</h5>
                            <Input className = "col-lg-10" type="textarea" style={{width: 500}} value={this.state.form.desc} onChange={this.onChange.bind(this, 'desc')}></Input>
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