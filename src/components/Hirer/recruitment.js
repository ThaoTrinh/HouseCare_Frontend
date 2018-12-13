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
import * as api from 'components/api';


export default class Recruitment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        address: '',
        salary: '',
        timespan: null,
        date: null,
        worktime: null,
        type: '',
        desc: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

    onSubmit(e) {
        const typeWork = this.state.type;
        const description = this.state.desc;
        const date = this.state.date;
        const worktime = this.state.worktime;
        const location = this.state.location;
        const salary = this.state.salary;
        const work_epocktime = date + worktime;

        const time_to_work = date.getTime() + 1000 * (worktime.getHours() * 60 * 60 + worktime.getMinutes() * 60);

        // work duration, not yet in UI, default to 3hours
        let timespan = this.state.timespan;
        timespan = 3 * 60 * 60 * 1000;

        api.createWork(typeWork, description, work_epocktime, timespan, location, salary)
            .then((data) => {
                alert(data);
            })
            .catch((err) => {
                alert(err);
            });
        e.preventDefault();
    }


  handleChange = name => value => { this.setState({[name]: value}); }

  render() {
    return (
      <div style={{width: 800, marginTop: 100, marginLeft: 100}}>
      <Form className="en-US" model={
      this.state} labelWidth="120" onSubmit={this.onSubmit.bind(this)}>
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
                value={this.state.worktime}
                selectableRange="18:30:00 - 20:30:00"
                placeholder="Pick a time"
                onChange={this.handleChange('worktime')}
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
      this.state.desc} style={
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
