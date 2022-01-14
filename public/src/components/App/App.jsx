/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import css from './appStyles.css';

import Map from '../Map/Map.jsx';
import List from '../List/List.jsx';

function initList(setRestaurants) {
  axios.get('http://localhost:3000/markers')
    .then((response) => {
      console.log('res data is \n', response.data);
      setRestaurants(response.data);
    })
    .catch((err) => {
      console.error('ERROR\n', err);
    });
}

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    initList(setRestaurants);
  }, []);

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

