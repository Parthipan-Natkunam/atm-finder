import React from "react";
import style from "../style/AtmList.module.css";

const AtmData = (props) => {
    const {locData} = props
    return(
        <li className={style.atmListItem}>
            <h5><span>{locData.serialNum}</span> {locData.name} </h5>
        </li>
    )
};

export default AtmData;

