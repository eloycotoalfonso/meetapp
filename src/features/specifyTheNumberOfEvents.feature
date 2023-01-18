Feature: Specify number of events

Scenario: When user hasnt specified a number, 32 is the default number
Given The main view is open
When user opens the app
Then thirty-two events should appear

Scenario: User can change the number of events they want to see
Given The main view is open
When user has specified a different number of events to display
Then the number of events displayed should be the specified from the user
