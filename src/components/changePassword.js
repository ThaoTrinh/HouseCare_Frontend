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

export default class ChangePassword extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        oldpassword: '',
        newpassword1: '',
        newpassword2: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let oldpassword = this.state['oldpassword'];
    let newpassword1 = this.state['newpassword1'];
    let newpassword2 = this.state['newpassword2'];

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
              <Input className = "col-lg-10" style={{width: 485}} type = "password" value={this.state.oldpassword} onChange={this.handleChange('oldpassword')}></Input>
            </Form.Item>

            <Form.Item style={{marginLeft: "100px", marginTop: 30}}>
              <h5 className = "col-lg-2">New password</h5>
              <Input className = "col-lg-10" style={{width: 485}} type = "password" value={this.state.newpassword1} onChange={this.handleChange('newpassword1')}></Input>
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