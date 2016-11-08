import React, { Component } from 'react';

export default class ButtonStartStop extends Component {


    render() {
        return (
            <input id="button_start_stop" type="button" onClick={this.props.click} value={this.props.value}/>
        );
    }
}