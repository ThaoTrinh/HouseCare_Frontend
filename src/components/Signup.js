import React from 'react';
import { Button , Layout, Form, Input, Checkbox, Select, Radio, Switch, DatePicker, Slider } from 'element-react';
import 'element-theme-default';
import MainSlider from "./MainSlider"
import createHistory from 'history/createBrowserHistory'
export default class SignUp extends React.Component{
  constructor(props) {
    super(props);
   
    this.state = {
        username: '',
        password: '',
        name: '',
        gmail: '',
        address:'',
        date:'',
        sex: 'female',
        description: '',
        position: 'helper',
        experience: 0
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeGmail = this.handleChangeGmail.bind(this);
    this.handleChangeSex = this.handleChangeSex.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangePosition = this.handleChangePosition.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
  }

  onSubmit(e) { const history = createHistory()
    e.preventDefault();
    console.log("aaaa")
    history.push({ pathname: '/' })
  }
  handleChangePosition(e) {
    this.setState({ position: e });
  }

  handleChangeExperience(e) {
    this.setState({ experience: e });
  }

  handleChangeUsername(e){
    this.setState({username: e});
  }

  handleChangePassword(e){
    this.setState({password: e});
  }

  handleChangeName(e){
    this.setState({name: e});
  }

  handleChangeAddress(e){
    this.setState({address: e});
  }

  handleChangeGmail(e){
    this.setState({gmail: e});
  }

  handleChangeDescription(e){
    this.setState({description: e});
  }

  handleChangeDate(e){
    this.setState({date: e});
  }

  handleChangeSex(e){
    this.setState({sex: e});
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
        <div className="grid-content bg-purple-light">
          <Form className="en-US" model={this.state} labelWidth="120" onSubmit={this.onSubmit.bind(this)}>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">User name</h5>
              <Input className = "col-lg-10" value={this.state.username} onChange={this.handleChangeUsername}></Input>
            </Form.Item>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">Password</h5>
              <Input className = "col-lg-10" style={{width: 485}} type = "password" value={this.state.password} onChange={this.handleChangePassword}></Input>
            </Form.Item>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">Name</h5>
              <Input className = "col-lg-10" value={this.state.name} onChange={this.handleChangeName}></Input>
            </Form.Item>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">Gmail</h5>
              <Input className = "col-lg-10" value={this.state.gmail} onChange={this.handleChangeGmail}></Input>
            </Form.Item> 

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">Address</h5>
              <Input className = "col-lg-10" value={this.state.address} onChange={this.handleChangeAddress}></Input>
            </Form.Item>

                <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
                  <h5 className = "col-lg-4" style={{marginRight: "-118px"}}>Date of birth</h5>
                  <Form.Item prop="date1" labelWidth="0px" className = "col-lg-8">
                    <DatePicker
                    value={this.state.date}
                    placeholder="Pick a date"
                    onChange={this.handleChangeDate}
                    />
                  </Form.Item>
                </Form.Item>

              <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
                <h5 className = "col-lg-3">Experience</h5>
                <div style = {{marginLeft: 140, width: "450px"}}>
                  <Slider value={this.state.experience} onChange={this.handleChangeExperience}/>
                </div>
            </Form.Item>

              <Form.Item style={{marginLeft: "-160px"}}>
                <h5 className = "col-lg-2" style={{marginRight: 15}}>Sex</h5>
                <Radio value="female" checked={this.state.sex === 'female'} onChange={this.handleChangeSex.bind(this)}>Female</Radio>
                <Radio value="male" checked={this.state.sex === 'male'} onChange={this.handleChangeSex.bind(this)}>Male</Radio>
            </Form.Item> 

            <Form.Item style={{marginLeft: "-160px"}}>
              <h5 className = "col-lg-2" style={{marginRight: 15}}>Position</h5>
              <Radio value="helper" checked={this.state.positon === 'helper'} onChange={this.handleChangePosition.bind(this)}>Helper</Radio>
              <Radio value="hirer" checked={this.state.position === 'hirer'} onChange={this.handleChangePosition.bind(this)}>Hire</Radio>
            </Form.Item> 

             <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">Description</h5>
              <Input className = "col-lg-10" type="textarea" style={{width: 500, marginTop: 40}} value={this.state.description} onChange={this.handleChangeDescription}></Input>
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