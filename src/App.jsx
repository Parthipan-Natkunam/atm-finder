import React from 'react';
import  style from './style/App.module.css';

import Search from './containers/SearchContainer';
import GMaps from "./containers/MapContainer";

function App() {
  return (
    <React.Fragment>
      <Search/>
      <div className={style.resultContainer}>
        <div className={style.mapWrapper}>
          {/* <GMaps/> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
