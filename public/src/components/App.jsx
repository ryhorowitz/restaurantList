/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Map from './Map.jsx';

function App() {
  return (
    <div>
      <div>I&apos;m in React App.jsx</div>
      <p>{console.log(process.env.DB_HOST)}</p>
      <Map />
    </div>
  );
}

export default App;
