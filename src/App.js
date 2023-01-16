import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { mockData } from './mock_data';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api_development';
import './nprogress.css';


class App extends Component {
  
  state = {
    events: [],
    locations: [],
    selectedLocation: 'all',
    eventCount: 32
  }

  componentDidMount () {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        events = events.slice(0, this.state.NumberOfEvents);
        this.setState({ events, locations: extractLocations(events)});
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, inputNumber) => {
    const {eventCount, selectedLocation} = this.state;
    if(location){
      getEvents().then((events) => {

      const locationEvents = (location === 'all')?
      events :
      events.filter((event) => event.location === location);
      const eventsToShow = locationEvents.slice(0,eventCount);
      this.setState({
        events: eventsToShow,
        selectedLocation: location
      });
    });
  } else {
    getEvents().then((events) => {
      const locationEvents = (selectedLocation === 'all')?
      events:
      events.filter((event) => event.location === selectedLocation);
      const eventsToShow = locationEvents.slice(0,inputNumber);
      this.setState({
        events: eventsToShow,
        eventCount: inputNumber
      });
    })
  }
}

  
  render() {

    return (
      <div className = "App">
        <CitySearch locations = {this.state.locations} updateEvents = {this.updateEvents} />
        <NumberOfEvents updateEvents = {this.updateEvents}/>
        <EventList events = {this.state.events} eventCount = {this.state.eventCount}/>
      </div>
    );
  }
}

export default App;



