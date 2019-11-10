import React from 'react';
import {connect} from "react-redux";

import GoogleMap from '../components/Map';

class MapContainer extends React.Component{
    render(){
        const mapSdkUri = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_API_KEY}&libraries=places`;
        const {isMarkerShown, userLocation} = this.props;
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

const mapStateToProps = (state) =>{
    return{
        isMarkerShown: state.map.isMarkerShown,
        userLocation: state.app.userLocation
    }
};

export default connect(mapStateToProps)(MapContainer);