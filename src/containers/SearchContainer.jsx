import React from 'react';
import style from "../style/SearchBar.module.css";

import SearchBar from "../components/SearchBar";
import LocateMeBtn from "../components/LocateMe";

class SearchContainer extends React.Component{
    render(){
        return(
            <div className={style.searchContainer}>
                <SearchBar/>
                <h3 className={style.orSeparator}>(OR)</h3>
                <LocateMeBtn/>
            </div>
        );
    }
}

export default SearchContainer;