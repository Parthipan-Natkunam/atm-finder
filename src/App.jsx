import React from 'react';
import  style from './style/App.module.css';

import Search from './containers/SearchContainer';
import GMaps from "./containers/MapContainer";
import Atms from "./containers/AtmListContainer";

function App() {
  return (
    <React.Fragment>
      <Search/>
      <div className={style.resultContainer}>
        <div className={style.mapWrapper}>
          <GMaps/>
        </div>
        <div className = {style.listWrapper}>
          <Atms/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
