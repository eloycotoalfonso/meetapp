Feature: Show Hide an Event details

Scenario: An event element is collapsed by default
Given User hasn’t opened an event
When User opens the app
Then User should see a list of upcoming events


Scenario: User can expand an event to see its details
Given The events list is shown
When User clicks on a single event
Then the information of the event should be loaded

Scenario: User can collapse an event to hide its details
Given an event is opened
When user clicks on hide details
Then the event view should be closed
