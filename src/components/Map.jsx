import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) =>{
    const {isMarkerShown, userLocation} = props;
    let lat, lng;
    if(userLocation){lat = userLocation.lat; lng = userLocation.lng;} 
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 12.9716, lng: 77.5946 }} //show default map center as Bengaluru
        >
            {isMarkerShown && userLocation && <Marker position={{ lat, lng }} />}
        </GoogleMap>
    );
}));

export default Map;
