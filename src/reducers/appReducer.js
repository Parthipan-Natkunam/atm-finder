import {
    SET_USER_LOCATION,
    SET_ATM_LOCATIONS
} from "../actions/appActions";

const initialAppState = {
    userLocation: null,
    atmLocations: []
};

const app = (state = initialAppState, action) => {
    switch (action.type) {
        case SET_USER_LOCATION:
            return {...state, userLocation: action.payload};
        case SET_ATM_LOCATIONS:
            return {...state, atmLocations: action.payload};
        default:
            return state;
    }
};
  
export default app;