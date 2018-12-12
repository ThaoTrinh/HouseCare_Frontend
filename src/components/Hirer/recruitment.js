import React from 'react';
import {
  Button,
  Layout,
  Form,
  Input,
  Radio,
  DatePicker,
  Slider,
  Select,
  TimePicker,
  Checkbox
} from 'element-react';
import 'element-theme-default';


export default class Recruitment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        address: '',
        salary: '',
        time: null,
        date: null,
        type: [],
        desc: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) { e.preventDefault(); }


  handleChange = name => value => { this.setState({[name]: value}); }

  render() {
    return (
      <div style={{width: 800, marginTop: 100, marginLeft: 100}}>
      <Form className="en-US" model={
      this.state.form} labelWidth="120" onSubmit={this.onSubmit.bind(this)}>
        <Form.Item label="Address" >
          <Input value={
      this.state.address} onChange={
      this.handleChange('address')} style={{marginLeft: 30}}></Input>
        </Form.Item>
        <Form.Item label="Salary" >
          <Select value={
      this.state.salary} style={
      { marginLeft: 30 }} placeholder="Please select salary for helper">
            <Select.Option label="50.000/hour" value="1"></Select.Option>
            <Select.Option label="75.000/hour" value="2"></Select.Option>
            <Select.Option label="100.000/hour" value="3"></Select.Option>
            <Select.Option label="150.000/hour" value="4"></Select.Option>
            <Select.Option label="200.000/hour" value="5"></Select.Option>
            <Select.Option label="250.000/hour" value="6"></Select.Option>
            <Select.Option label="300.000/hour" value="7"></Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Date">
          <Layout.Col span="11" >
            <Form.Item prop="date" labelWidth="0px" style={{marginLeft: 30}}>
              <DatePicker
                value={this.state.date}
                placeholder="Pick a date"
                onChange={this.handleChange('date')}
              />
            </Form.Item>
          </Layout.Col>
          <Layout.Col className="line" span="2">-</Layout.Col>
          <Layout.Col span="11">
            <Form.Item prop="time" labelWidth="0px">
              <TimePicker
                value={this.state.time}
                selectableRange="18:30:00 - 20:30:00"
                placeholder="Pick a time"
                onChange={this.handleChange('time')}
              />
            </Form.Item>
          </Layout.Col>
        </Form.Item>

        <Form.Item label="Activity type">
          <Checkbox.Group value={this.state.type} onChange={this.handleChange('type')} >
            <Checkbox label="Cham soc tre" name="type" style={{marginRight: 250, marginLeft: 30}}></Checkbox>
            <Checkbox label="Cham soc nguoi gia" name="type" style={{marginLeft: 0}}></Checkbox><br/>
            <Checkbox label="Quet don nha cua" name="type"style={{marginRight: 250, marginLeft: 30}}></Checkbox>
            <Checkbox label="Sua chua cac thiet bi" name="type" style={{marginLeft: "-33px"}}></Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item label="Description">
          <Input type="textarea" value={
      this.state.form.desc} style={
      { marginLeft: 30, width: 550 }}onChange={this.handleChange('desc')}></Input>
        </Form.Item>
        <Form.Item>
          <Button type="primary" nativeType="submit" style={{marginLeft: 200, marginRight: 100, marginTop: 50}}>Create</Button>
          <Button>Cancel</Button>
        </Form.Item>
      </Form>

    </div>
    )
  }
}
