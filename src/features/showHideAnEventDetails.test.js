import { loadFeature, defineFeature } from 'jest-cucumber';

import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock_data';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test =>{
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('User hasn’t opened an event', () => {
        });

        let EventWrapper, event;
        event = mockData[0];
        when('User opens the app', () => {
            EventWrapper = shallow(<Event event = {event} />);
        });

        then('User should see a list of upcoming events', () => {
            expect(EventWrapper.state('collapsed')).toBe(true);

        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {

        let EventWrapper, event;
        event = mockData[0];
        given('The events list is shown', () => {
            EventWrapper = mount(<Event event = {event} />);
        });

        when('User clicks on a single event', () => {
            EventWrapper.find('.expand').simulate('click');
        });

        then('the information of the event should be loaded', () => {
            expect(EventWrapper.state('collapsed')).toBe(false);
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        
        let EventWrapper, event;
        event = mockData[0];
        given('an event is opened', () => {
            EventWrapper = mount(<Event event = {event} />);
            EventWrapper.find('.expand').simulate('click');
        });

        when('user clicks on hide details', () => {
            EventWrapper.find('.expand').simulate('click');
        });

        then('the event view should be closed', () => {
            expect(EventWrapper.state('collapsed')).toBe(true);
        });
    });
});