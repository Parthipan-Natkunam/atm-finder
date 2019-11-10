import React from "react";
import {connect} from "react-redux";
import style from "../style/AtmList.module.css";
import ATMItem from "../components/AtmData";

class AtmListContainer extends React.Component{
    render(){
       const {atmLocations} = this.props;
       return(
        <ul className={style.atmList}>
            {atmLocations.map(location=>{
                return(<ATMItem locData={location}/>)
            })}
        </ul>
       )
    }
}

const mapStateToProps = (state) => {
    return {
        atmLocations: state.app.atmLocations
    }
}

export default connect(mapStateToProps)(AtmListContainer);