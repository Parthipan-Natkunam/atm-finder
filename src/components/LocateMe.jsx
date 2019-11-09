import React from 'react';
import style from "../style/SearchBar.module.css";

const LocateMe = (props)=>{
    const {getLocation} = props;
    return(
        <button className={style.locateMe} onClick={getLocation}>Locate Me</button>
    )
};

export default LocateMe;