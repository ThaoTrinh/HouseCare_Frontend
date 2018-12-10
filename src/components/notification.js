import React from 'react';
import {Layout} from 'element-react';
export default class Notification extends React.Component{
  render(){
    return(
      <Layout.Row>
        <Layout.Col span="12"><div className="grid-content bg-purple"></div></Layout.Col>
        <Layout.Col span="12"><div className="grid-content bg-purple-light"></div></Layout.Col>
      </Layout.Row>
    );
  }
}