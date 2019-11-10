import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const Map = withScriptjs(withGoogleMap((props) =>{
    const {isMarkerShown, userLocation} = props;
    let lat, lng;
    if(userLocation){lat = userLocation.lat; lng = userLocation.lng;} 
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 12.9716, lng: 77.5946 }} //show default map center as Bengaluru
        >
            {/* {isMarkerShown && userLocation && <Marker position={{ lat, lng }} />} */}
            {isMarkerShown && userLocation && typeof window.google!== void 0 && <MarkerWithLabel
                position={{ lat, lng }}
                labelAnchor={new window.google.maps.Point(40, 45)}
                labelStyle={{backgroundColor: "#f24343", fontSize: "12px", padding: "4px"}}
            >
                <div>You are here</div>
            </MarkerWithLabel>}
        </GoogleMap>
    );
}));

export default Map;
