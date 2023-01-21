import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { mockData } from './mock_data';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import { OfflineAlert } from './Alert';


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
        events = events.slice(0, this.state.eventCount);
        this.setState({ events, locations: extractLocations(events)});
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, inputNumber) => {
    const {eventCount, selectedLocation} = this.state;
    if(!location){
      location = selectedLocation;
    };
    getEvents().then((events) => {

      const locationEvents = (location === 'all')?
        events :
        events.filter((event) => event.location === location);
      inputNumber = !inputNumber ? eventCount : inputNumber;
      const eventsToShow = locationEvents.slice(0, inputNumber);
      this.setState({
        events: eventsToShow,
        selectedLocation: location,
        eventCount: inputNumber
      });
    });
  }

  
  render() {

    return (
      <div className = "App">
        <h1> MeetApp</h1>
        <div className='OfflineAlert Alert'>
          {!navigator.onLine && ( 
            <OfflineAlert text = {'You are currently offline. Events might not be up to date'} />
          )}
        </div>
        <div className = "SearchBox">
          <h3> Select your city </h3>
          <CitySearch locations = {this.state.locations} updateEvents = {this.updateEvents} />
          <h3> Events to display </h3>
          <NumberOfEvents updateEvents = {this.updateEvents}/>
        </div>
        <EventList events = {this.state.events} eventCount = {this.state.eventCount}/>
      </div>
    );
  }
}

export default App;



