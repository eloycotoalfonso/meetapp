import React, { Component } from 'react';

class NumberOfEvents extends Component {
    
    state = {
        number: 32,
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.props.updateEvents(null, value);
        this.setState({
            number: value,
        });
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


            </div>
        );
    }
}

export default NumberOfEvents;