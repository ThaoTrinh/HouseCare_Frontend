import React from 'react';

export default class DataContract extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        const data = this.props;
        return(
            <div>
                <p> Wallet address owner: {data[0]}</p>
                <p> Wallet address helper: {data[1]}</p>
                <p> Work ID: {data[2]}</p>
                <p> Address : {data[3]}</p>
                <p> Salary : {data[5]}</p>
                <p> Time : {data[6]}</p>
            </div>
        )
    }
}