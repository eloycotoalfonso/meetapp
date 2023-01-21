import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    
    state = {
        number: 32,
        errorText:''
    }

    handleInputChanged = (event) => {
        const value = Math.floor(event.target.value);
        // const check = Number.isInteger(value);
        // console.log(value);
        // console.log(typeof value);
        // console.log(check);
        this.props.updateEvents(null, value); 
        if(value < 1 || value > 32) {
            this.setState({
                number: value,
                errorText: 'Select number from 1 to 32'
            });
        } else {
            this.setState({
                number: value,
                errorText:''
            });
        }
    };

    render() {
        const number = this.state.number;

        return (
            <div className = "NumberOfEvents">
                <input 
                    className = 'eventsNumber' 
                    type = 'number'
                    value = {number}
                    onChange = {this.handleInputChanged}
                />
                <ErrorAlert text = {this.state.errorText}/>
            </div>
        );
    }
}

export default NumberOfEvents;