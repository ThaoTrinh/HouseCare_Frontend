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
import { stringify } from 'querystring';
export default class Profile extends React.Component{
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
        id: '',
        walletAddress: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }



  onSubmit(e) {
    e.preventDefault();
    let name = this.state['name'];
    let username = this.state['username'];
    let password = this.state['password'];
    let email = this.state['gmail'];
    let id = this.state['id'];
    
    api.getuser(id)
      .then(data => {
        alert(data);
      })
      .catch(err => {
        alert(err);
      })
    }

  componentDidMount(){
    const {drizzle, drizzleState} = this.props;
    let id = sessionStorage.getItem('id');
    let walletAddress = '';
    api.getuser(id)
      .then(data => {
        alert(JSON.stringify(data));
        // Kiem tra xem neu data khong co wallet address thi
        if (data.walletAddress == null){
          //dung drizzle lay thong tin cua account neu co thi xac nhan de them thay doi thong tin wallet address
          // Neu khong co hien thi thong bao de dang ki tren meta mask
          if (!drizzleState.accounts){
            alert("Don't have a wallet address! Please sign up in meta mask");
          }
          else{
            walletAddress = drizzleState.accounts[0];
            alert("Wallet address is got automatic from your computer!", walletAddress);
            api.addWalletAddress(id, walletAddress)
              .then(data => {
                alert("Add wallet success");
              })
              .catch(err => {
                alert(err);
              })
          }
        }

        else{
          walletAddress = data.walletAddress;
        }
        //set trang thai cho user
        this.setState({
          name: data.name,
          username: data.username,
          position: data.role == 0 ? 'helper' : 'hirer',
          gmail: data.email,
          address: data.address,
          walletAddress: walletAddress,
          experience: data.experience,
          description: data.description,
          sex: data.sex

        });
        
        // alert(JSON.stringify(data));
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
      <Layout.Col span="7">
        <div className="grid-content bg-purple">
          <img src="/logo/people.jpg" alt="logo"/>
        </div>
      </Layout.Col>


      <Layout.Col span="17">
        <div className="grid-content bg-purple-light">
          <Form className="en-US" model={this.state} labelWidth="120" onSubmit={this.onSubmit.bind(this)}>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">User name</h5>
              <Input className = "col-lg-10" name="username" value={this.state.username} onChange={this.handleChange('username')}></Input>
            </Form.Item>

            <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">Wallet Address</h5>
              <Input className = "col-lg-10" style={{width: 565}} value={this.state.walletAddress} onChange={this.handleChange('password')}></Input>
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
                  <h5 className = "col-lg-4" style={{marginRight: "-137px"}}>Date of birth</h5>
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
              <Radio value="hirer" checked={this.state.position === 'hirer'} onChange={this.handleChange('position')}>Hirer</Radio>
            </Form.Item>

             <Form.Item style={{marginLeft: "-160px", marginTop: 30}}>
              <h5 className = "col-lg-2">Description</h5>
              <Input className = "col-lg-10" type="textarea" style={{width: 558, marginTop: 40}} value={this.state.description} onChange={this.handleChange('description')}></Input>
              </Form.Item>

            <Form.Item style={{marginTop: 30}}>
              <Button type="primary" nativeType="submit" style={{marginLeft: 60}}>Save</Button>
              <Button style={{marginLeft: 140}}>Cancel</Button>
            </Form.Item>

          </Form>
        </div>
      </Layout.Col>
    </Layout.Row>
    )
  }
}
