/**
 * @param {*} events:
 * The following function should be in the "api.js" file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It wuill also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */
import NProgress from 'nprogress';

import { mockData } from './mock_data';


export const extractLocations = (events) => {
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
};

const checkToken = async (accessToken) => {

};

const removeQuery = () => {

};

export const getEvents = async () => {

    if(window.location.href.startsWith('http://localhost')) {
        return mockData;
    }
    
};

export const getAccessToken = async () => {

};
  