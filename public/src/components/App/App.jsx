/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import css from './appStyles.css';

import Map from '../Map/Map.jsx';
import List from '../List/List.jsx';

function App() {
  return (
    <div className="container">

      <div className="columnContainer">
        <div className="leftContainer" />
        <div className="middleContainer">
          <Map />
          <List />
        </div>
        <div className="rightContainer" />
      </div>
    </div>
  );
}

export default App;
