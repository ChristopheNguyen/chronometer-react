import React, { Component } from 'react';

export default class ButtonReset extends Component {


    render() {
        return (
            <input id="button_reset" type="button" onClick={this.props.click} value={this.props.value} disabled={!this.props.disabled}/>
        );
    }
}