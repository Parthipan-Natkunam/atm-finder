import React from 'react';

import GoogleMap from '../components/Map';

class MapContainer extends React.Component{
    state={
        isMarkerShown: false,
        userLocation: null
    }

    render(){
        const mapSdkUri = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_API_KEY}&libraries=places`;
        const {isMarkerShown, userLocation} = this.state;
        return(
            <GoogleMap isMarkerShown={isMarkerShown}
                userLocation = {userLocation}
                googleMapURL={mapSdkUri}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}

export default MapContainer;