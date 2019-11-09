import React from 'react';
import style from "../style/SearchBar.module.css";

import {getCurrentLocation} from "../utils/utility";

import SearchBar from "../components/SearchBar";
import LocateMeBtn from "../components/LocateMe";

class SearchContainer extends React.Component{
    
    getDeviceLocation = async()=>{
       try{
        let coordinates =  await getCurrentLocation();
        console.log(`Got Device Location:: lat:${coordinates.lat}  lng:${coordinates.lng}`);
       }catch(err){
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

export default SearchContainer;