import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";


const Map = withScriptjs(withGoogleMap((props) =>{
    const {isMarkerShown, userLocation, setRef, fetchAtms, atmLocations} = props;
    let lat, lng;
    if(userLocation){lat = userLocation.lat; lng = userLocation.lng;} 
    return (
        <GoogleMap
            defaultZoom={18}
            center={!!userLocation ? {lat,lng} : { lat: 12.9716, lng: 77.5946 } } 
            ref={setRef}
            onBoundsChanged={fetchAtms}
        >
            {/* {isMarkerShown && userLocation && <Marker position={{ lat, lng }} />} */}
            {isMarkerShown && typeof window.google!== void 0 && <MarkerWithLabel
                position={{ lat, lng }}
                labelAnchor={new window.google.maps.Point(40, 45)}
                labelStyle={{backgroundColor: "#f24343", fontSize: "12px", padding: "4px"}}
            >
                <div>You are here</div>
            </MarkerWithLabel>}
            {atmLocations && atmLocations.map(location=>{
               return(
                <MarkerWithLabel 
                    position={{lat: location.lat, lng: location.lng}}
                    labelAnchor={new window.google.maps.Point(0, 0)}
                    labelStyle={{backgroundColor: "#333", color:"#fefefe", borderRadius:"50px", fontSize: "14px", padding: "4px"}}
                    key={location.id}
                >
                    <div>{location.serialNum}</div>
                </MarkerWithLabel>)
            })}
        </GoogleMap>
    );
}));

export default Map;
