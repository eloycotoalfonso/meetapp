# meetapp

This is a serverless app designed to display information about different upcoming events in a specified city.



# Characteristics
The app will have the following features based on the following user stories:


## Feature 2:  SHOW/HIDE AN EVENT’S DETAILS
  User’s story: As a User, I should be able to show/hide an event’s details so that I can see the information of one event or scroll quickly through the events to search for one of my interest. 

### Scenario 1: An event element is collapsed by default
    Given: User hasn’t opened an event
    When: User opens the app
    Then: The user should see a list of upcoming events
### Scenario 2: User can expand an event to see its details
    Given The event’s list is shown
    When: user clicks on a single event
    Then the information of the event should be loaded
### Scenario 3: User can collapse an event to hide its details
    Given An event is opened
    When user clicks on hide details
    Then the event’s view should be closed


## Feature 3: SPECIFY NUMBER OF EVENTS
  User’s story: As a user with a big screen, I should be able to specify the number of events so that I can load more events and not have the feeling the screen is unused.

### Scenario 1: When user hasn’t specified a number, 32 is the default number
    Given The main view is open
    When user opens the app
    Then 32 events should appear.
### Scenario 2: User can change the number of events they want to see
    Given The main view is open
    When user has specified a different number of events to display
    Then the number of events displayed should be the specified from the user


## Feature 4: USE THE APP WHEN OFFLINE
  User’s story: As a user from the countryside, I should be able to load the information when offline so that I can load the information when I’m heading to an event and don’t have internet.

### Scenario 1: Show cached data when there’s no internet connection´
    Given the main view is open
    When the app is opened without internet connection
    Then the app should display events saved in caché
### Scenario 2: Show error when user change the settings (city, time range).
    Given User request information not saved in caché
    When user clicks on search or opens an event
    Then an error message should appear


## Feature 5: DATA VISUALIZATION
  User’s story: As a user I should be able to see what next events in my city are so I can make spontaneous plans 

## #Scenario 1: Show a chart with the number of upcoming events in each city
    Given User search for a city
    When user doesn’t specify a time frame to show events
    Then the user should see the most recent events displayed

Dependencies:
