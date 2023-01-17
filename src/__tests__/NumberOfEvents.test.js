import React from "react";
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';


describe('NumberOfEvents /> component', () =>{

    let NEventsWrapper;
    beforeAll(() => {
        NEventsWrapper = shallow(<NumberOfEvents />);
    });

    test("render the component", () => {
        expect(NEventsWrapper).toBeDefined();
    });

    test("render number of events input", () => {
        expect(NEventsWrapper.find('.eventsNumber')).toHaveLength(1);
    });

    test('render only numbers', () => {
        expect(NEventsWrapper.find('.eventsNumber').prop('type')).toBe('number');
    });

    test('render 32 as default value', () => {
        const number = NEventsWrapper.state('number');
        expect(number).toBe(32);
        expect(NEventsWrapper.find(".eventsNumber").prop('value')).toBe(number);
    });
});