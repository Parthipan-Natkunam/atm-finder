import React from 'react';

import GoogleMap from '../components/Map';

class MapContainer extends React.Component{
    render(){
        const mapSdkUri = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_API_KEY}&libraries=places`;
        return(
            <GoogleMap isMarkerShown
                googleMapURL={mapSdkUri}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}

export default MapContainer;