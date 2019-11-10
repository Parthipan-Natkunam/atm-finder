import {
    TOGGLE_MAP_MARKER
} from "../actions/mapActions";

const initialMapState = {
    isMarkerShown: false
};

const map = (state = initialMapState, action) => {
    switch (action.type) {
        case TOGGLE_MAP_MARKER:
            return {...state, isMarkerShown: action.payload};
        default:
            return state;
    }
};
  
export default map;