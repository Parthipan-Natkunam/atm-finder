import actionGenerator from "./actionGenerator";

// to set user's location from browser geolocation API or Search results
export const SET_USER_LOCATION = "SET_USER_LOCATION";
export const setCurrentLocation = actionGenerator(SET_USER_LOCATION);

// get nearby ATMs from google API
export const GET_ATM_LOCATIONS = "GET_ATM_LOCATIONS";
export const getAtmLocations = actionGenerator(GET_ATM_LOCATIONS);

// set nearby ATMs to store
export const SET_ATM_LOCATIONS = "SET_ATM_LOCATIONS";
export const setAtmLocations = actionGenerator(SET_ATM_LOCATIONS);
