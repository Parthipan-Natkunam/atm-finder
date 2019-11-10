import React from 'react';
import style from "../style/SearchBar.module.css";

const SearchBar = (props)=>{
    return(
        <input id="locationSearchInput" type="text" placeholder="Search a location" className={style.placeSearchInput} autoFocus/>
    )
};

export default SearchBar;