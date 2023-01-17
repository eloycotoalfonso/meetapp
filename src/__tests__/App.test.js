import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock_data';
import { extractLocations, getEvents } from '../api_development';

describe('<App /> component', () => {
    
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });
    
    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });
    
    test('render CitySearch', () => {
        expect (AppWrapper.find(CitySearch)).toHaveLength(1);
    });

    test('render number of events', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    })

});

describe('<App /> integration', () => {

    test ('App passes "events" state as a prop to EventList', () => {
        const AppWrapper = mount(<App />);
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
        AppWrapper.unmount();
    });

    test ('App passes "locations" state as a prop to CitySearch', () => {
        const AppWrapper = mount(<App />);
        const AppLocationsState = AppWrapper.state('locations');
        expect(AppLocationsState).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
        AppWrapper.unmount();
    });

    test ('get list of events marching the city selected by the user', async() => {
        const AppWrapper = mount(<App />);
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({ suggestions: locations });
        const suggestions = CitySearchWrapper.state('suggestions');
        const selectedIndex = Math.floor(Math.random() * (suggestions.length));
        const selectedCity = suggestions[selectedIndex];
        await CitySearchWrapper.instance().handleItemClicked(selectedCity);
        const allEvents = await getEvents();
        const eventsToShow = allEvents.filter(event => event.location === selectedCity);
        expect (AppWrapper.state('events')).toEqual(eventsToShow);
        AppWrapper.unmount();
    });

    test('get list of all events when user selects "See all cities"', async () => {
        const AppWrapper = mount(<App />);
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        await suggestionItems.at(suggestionItems.length - 1).simulate('click');
        const allEvents = await getEvents();
        expect(AppWrapper.state('events')).toEqual(allEvents);
        AppWrapper.unmount();
    });

    test('App passes Number of Events to Eventlist',() =>{
        const AppWrapper = mount(<App />);
        const AppEventCountState = AppWrapper.state('eventCount');
        expect(AppEventCountState).not.toEqual(undefined);
        expect(AppWrapper.find(NumberOfEvents).state('number')).toEqual(AppEventCountState);
        AppWrapper.unmount();
    });

    test('Change the "number" state when the imput number changes', async()=> {
        const AppWrapper = mount(<App />);
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        const inputField = NumberOfEventsWrapper.find('.eventsNumber');
        const eventObject = {target: {value : 15} };
        inputField.simulate('change', eventObject);
        await getEvents();
        expect(AppWrapper.state('eventCount')).toBe(15);
        expect(NumberOfEventsWrapper.state('number')).toBe(15);
        AppWrapper.unmount();
    });

    test('The number of events rendered matching the input number', async () => {
        const AppWrapper = mount(<App />);
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        const EventListWrapper = AppWrapper.find(EventList);
        const eventObject = {target: {value : 1} };
        await NumberOfEventsWrapper.instance().handleInputChanged(eventObject);
        await getEvents();
        expect(AppWrapper.state('events')).toHaveLength(1);
        AppWrapper.unmount();
    });


});