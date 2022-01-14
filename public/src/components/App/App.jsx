/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import css from './appStyles.css';

import Map from '../Map/Map.jsx';

function App() {
  return (
    <div className="container">

      <div className="columnContainer">
        <div className="leftContainer" />
        <div className="middleContainer">
          <div className="app">
            <div>I&apos;m in React App.jsx</div>
            <Map />
          </div>

        </div>
        <div className="rightContainer" />
      </div>
    </div>
  );
}

export default App;
