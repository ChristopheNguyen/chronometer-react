import React, { Component } from 'react';

import ButtonStartStop from './ButtonStartStop'
import ButtonReset from './ButtonReset'

export default class Chronometer extends Component {

    constructor(props){
        super(props);
        this.state =  {
            isStartOrStop: true,
            timerID: 0,

            startTime: null,
            diff: null,
            suspended: 0,

            disabled: false
        };

        this.handleClickStartStop = this.handleClickStartStop.bind(this);
        this.handleClickReset = this.handleClickReset.bind(this);
    }


    tick() {
        this.setState(prevState => ({
            diff: new Date(new Date() - this.state.startTime)
        }));
    }

    handleClickStartStop() {

        this.setState(prevState => ({
            isStartOrStop: !prevState.isStartOrStop
        }));


        const isStarted = this.state.isStartOrStop;
        let disabled = this.state.disabled;

        //Start
        if(isStarted){
            this.setState({
                startTime: new Date() - this.state.suspended,
                timerID : setInterval(() => this.tick(), 10),
                suspended: 0,
                disabled: false
            });
        }
        //Stop
        else{
            clearInterval(this.state.timerID);
            this.setState({
                startTime: null,
                suspended: this.state.diff,
                disabled: true
            });
        }
    }

    handleClickReset(){
        this.setState({
            startTime: null,
            diff: null,
            suspended: 0,
            disabled: false
        })
    }


    twoDigits(n){
        return n < 10 ? '0' + n : n;
    }


    render(){
        let diff = this.state.diff;
        let msec = diff ? Math.round(diff.getMilliseconds()/10) : 0;
        let sec = diff ? diff.getSeconds() : 0;
        let min = diff ? diff.getMinutes() : 0;

        return (
            <h1>
                {this.twoDigits(min)}:{this.twoDigits(sec)}:{this.twoDigits(msec)}
                &nbsp;
                <ButtonStartStop  click={this.handleClickStartStop} value={this.state.isStartOrStop ? 'Start' : 'Stop'} />
                &nbsp;
                <ButtonReset  click={this.handleClickReset} value='Reset' disabled={this.state.disabled}/>
            </h1>
        )
    }

}