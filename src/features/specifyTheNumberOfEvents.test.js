import { loadFeature, defineFeature } from 'jest-cucumber';

import React from 'react';
import { mount, shallow} from 'enzyme';
import App from '../App';
import { mockData } from '../mock_data';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyTheNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasnt specified a number, 32 is the default number', ({ given, when, then }) => {
        given('The main view is open', () => {

        });

        let AppWrapper
        when('user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        then('thirty-two events should appear', () => {
            AppWrapper.update();
            expect(AppWrapper.state('eventCount')).toBe(32);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        
        let AppWrapper, NumberOfEventsWrapper;
        given('The main view is open', () => {
            AppWrapper = mount(<App />);
            NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        });

        when('user has specified a different number of events to display', () => {
            const eventObject = {target: {value: 2}};
            NumberOfEventsWrapper.find('.eventsNumber').simulate('change', eventObject);
        });

        then('the number of events displayed should be the specified from the user', () => {
            expect(AppWrapper.state('eventCount')).toBe(2);
        });
    });


});