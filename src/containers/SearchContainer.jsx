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