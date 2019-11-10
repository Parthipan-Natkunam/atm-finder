import React from 'react';
import {connect} from "react-redux";

import GoogleMap from '../components/Map';

import {setAtmLocations} from "../actions/appActions";

class MapContainer extends React.PureComponent{
    
    setMapRef = (ref) => {
        this.gMap = ref;
    }

    fetchAtms = () => {
        const {userLocation} = this.props;
        if(userLocation && window.google){
            const markerLocation = new window.google.maps.LatLng(userLocation.lat,userLocation.lng);
            const requestOptions = {
                location: markerLocation,
                type: ['atm'],
                rankBy: window.google.maps.places.RankBy.DISTANCE
            };
            const googlePlacesService = new window.google.maps.places.PlacesService(this.gMap.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
            googlePlacesService.nearbySearch(requestOptions, this.setAtmLocations);

        }else{
            console.log("Location not yet set by user or Invalid location");
        } 
    }

    setAtmLocations = (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && results && results.length > 0) {
            const normalizedResultArr =   results.map((atm,index)=>{
                return{
                    serialNum: ++index,
                    id: atm.id,
                    name: atm.name,
                    lat: atm.geometry.location.lat(),
                    lng:  atm.geometry.location.lng(),
                    image: (atm.photos && atm.photos.length > 0) ? atm.photos[0].getUrl() : atm.icon
                }
            }); 
            this.props.setAtmsInStore(normalizedResultArr);   
        }
    }

    render(){
        const mapSdkUri = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_API_KEY}&libraries=places`;
        const {isMarkerShown, userLocation, atmLocations} = this.props;
        return(
            <GoogleMap isMarkerShown={isMarkerShown}
                userLocation = {userLocation}
                setRef={this.setMapRef}
                atmLocations = {atmLocations}
                googleMapURL={mapSdkUri}
                fetchAtms={this.fetchAtms}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div id="map" style={{ height: `100%` }} />}
            />
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        isMarkerShown: state.map.isMarkerShown,
        userLocation: state.app.userLocation,
        atmLocations: state.app.atmLocations
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAtmsInStore: (atmArr) =>{
            dispatch(setAtmLocations(atmArr));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MapContainer);