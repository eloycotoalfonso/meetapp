import React, { Component } from 'react';



class Event extends Component {

    state = {
        collapsed: true,
    }

    toggleButton = () => {
        this.setState((prevState) => ({
          collapsed: !prevState.collapsed,
        }));
      };



    render(){
        const { event } = this.props;
        const { collapsed } = this.state;
        return (
            <div className = 'event'>
                <h1 className = "title">{event.summary}</h1>
                <p className = 'start'>{new Date(event.start.dateTime).toString()}</p>
                <p className = 'location'>@ {event.summary} | {event.location}</p>
                {!collapsed && (
                    <div>
                        <h2 className = 'about'>About event:</h2>
                        <a className = "externalDetails" href = {event.htmlLink}>See details on Google Calendar</a> 
                        <p className = 'information'>{event.description}</p>
                    </div>
                )}
                <button className = 'expand' onClick = {() => this.toggleButton()}>
                    {collapsed ? "Show" : "Hide"} details</button>
            </div>
        );
    }
}

export default Event;