import React from 'react';
import {connect} from "react-redux";
import style from "../style/SearchBar.module.css";

import {getCurrentLocation} from "../utils/utility";

import SearchBar from "../components/SearchBar";
import LocateMeBtn from "../components/LocateMe";

import {setUserLocation} from "../actions/appActions";
import {toggleMapMarker} from "../actions/mapActions";

class SearchContainer extends React.Component{
    
    
    toggleUserLocationAndMarker = (isSet,userLocbj) => {
        const {setUserLocation, switchMapMarkerVisibility} = this.props;
        if(isSet){
            setUserLocation(userLocbj);
            switchMapMarkerVisibility(true);
        }else {
            setUserLocation(null);
            switchMapMarkerVisibility(false);
        }
    }

    getDeviceLocation = async()=>{
       try{
            let coordinates =  await getCurrentLocation();
            const userLocbj = {lat:coordinates.lat,lng:coordinates.lng};
            this.toggleUserLocationAndMarker(true,userLocbj);
       }catch(err){
            this.toggleUserLocationAndMarker(false,null);
            console.log(err);
       }
    }

    componentDidMount(){
        const searchInput = document.getElementById("locationSearchInput");
        const autoCompleteInitInterval = setTimeout(()=>{
            if(searchInput && window.google){
                if(autoCompleteInitInterval){clearInterval(autoCompleteInitInterval)};
                console.log("Google SDK loaded");
                this.autoCompleteInstance = new window.google.maps.places.Autocomplete(searchInput,{
                    AutoCompleteSessionToken: new  window.google.maps.places.AutocompleteSessionToken()
                });
                window.google.maps.event.addListener(
                    this.autoCompleteInstance,
                    "place_changed",
                    ()=>{
                        const selectedLocation = this.autoCompleteInstance.getPlace();
                        if(selectedLocation && selectedLocation.geometry && selectedLocation.geometry.location){
                            const userLocObj = {
                                lat: selectedLocation.geometry.location.lat(),
                                lng: selectedLocation.geometry.location.lng()
                            }
                            this.toggleUserLocationAndMarker(true,userLocObj);
                        }
                    }
                );
            }
            else{
                console.log("waiting for google SDK to be loaded..will be re-tried in 0.5 seconds");
            }
        },500);
    }

    componentWillUnmount(){
        if(this.autoCompleteInstance && window.google){
            window.google.maps.event.clearInstanceListeners(this.autoCompleteInstance);
            this.autoCompleteInstance = void 0;
        }
    }

    render(){
        return(
            <div className={style.searchContainer}>
                <SearchBar/>
                <h3 className={style.orSeparator}>(OR)</h3>
                <LocateMeBtn getLocation={this.getDeviceLocation}/>
            </div>
        );
    }
}

// const mapStatetoProps = (state) => {
//     return{
//         currentLocation: state.app.userLocation
//     }
// };

const mapDispatchToProps = (dispatch) => {
    return {
        setUserLocation: (locationObj)=>{
            dispatch(setUserLocation(locationObj));
        },
        switchMapMarkerVisibility: (isVisible) =>{
            dispatch(toggleMapMarker(isVisible));
        }
    }
};

export default connect(null,mapDispatchToProps)(SearchContainer);