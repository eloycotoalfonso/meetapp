import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock_data';

describe('<Event /> component', () => {

    let EventWrapper;
    const event = mockData[0];

    beforeAll(() => {
        EventWrapper = shallow(<Event event = {event} />);
    })

    test ("render the component",() => {
        expect(EventWrapper).toBeDefined();
    });

    test("Have a title that is the summary", () => {
        const title = EventWrapper.find("h1.title");
        expect(title).toHaveLength(1);
    });

    test("Title is the summary of the event", () => {
        const title = EventWrapper.find("h1.title");
        expect(title.text()).toBe(event.summary);
    });

    test ("Component should have 2 paragraph components", () => {
        const paragraph = EventWrapper.find("p");
        expect(paragraph).toHaveLength(2);
    });

    test("render the start time in a paragraph", () => {
        const start = EventWrapper.find("p.start");
        expect(start.text()).toBe(new Date(event.start.dateTime).toString());
    });

    test("Location has to be there", () => {
        const location = EventWrapper.find("p.location");
        expect(location.text()).toBe(`@ ${event.summary} | ${event.location}`);
    });

    test("Rendering of the button", () => {
        const button = EventWrapper.find('button.expand');
        expect (button.text()).toBe("Show details");
    });

    test("events should be collapsed bt default", () => {
        const variable = EventWrapper.state("collapsed");
        expect(variable).toBe(true);
    });

    test("Simulation of the show details click", () => {
        const subtitle = EventWrapper.find("h2.about");
        const details = EventWrapper.find("a.externalDetails");
        const extra = EventWrapper.find("p.information");
        const button = EventWrapper.find('button.expand');
        
        expect(subtitle).toHaveLength(0);
        expect(details).toHaveLength(0);
        expect(extra).toHaveLength(0);

        button.simulate('click');
        expect(EventWrapper.state("collapsed")).toBe(false);
    });

    test("Simulate of the hide details click", () =>{
        
        EventWrapper.setState({collapsed: false});

        const subtitle = EventWrapper.find("h2.about");
        const details = EventWrapper.find("a.externalDetails");
        const extra = EventWrapper.find("p.information");
        const button = EventWrapper.find('button.expand');
        
        expect(subtitle).toHaveLength(1);
        expect(details).toHaveLength(1);
        expect(extra).toHaveLength(1);

        expect(subtitle.text()).toBe("About event:");
        expect(details.text()).toBe("See details on Google Calendar");
        expect(details.prop("href")).toBe(event.htmlLink);
        expect(extra.text()).toBe(event.description);
        expect(button.text()).toBe("Hide details");


        button.simulate('click');
        expect(EventWrapper.state("collapsed")).toBe(true); 
        
    })
});