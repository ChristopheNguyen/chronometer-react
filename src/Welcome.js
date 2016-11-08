import React, { Component } from 'react';

export default class Welcome extends Component {
    render(){
        return (
            <h1>{this.props.text}</h1>
        )
    }
};