import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { mockData } from './mock_data';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import { OfflineAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';



class App extends Component {
  
  state = {
    events: [],
    locations: [],
    selectedLocation: 'all',
    eventCount: 32,
    showWelcomeScreen: undefined
  }

  async componentDidMount () {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({showWelcomeScreen: !(code || isTokenValid) });
    if((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          events = events.slice(0, this.state.eventCount);
          this.setState({ events, locations: extractLocations(events)});
        }
      });
    }
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
    if (this.state.showWelcomeScreen === undefined) return <div className='App'/>

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
        <WelcomeScreen showWelcomeScreen = {this.state.showWelcomeScreen} getAccessToken = {() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;



