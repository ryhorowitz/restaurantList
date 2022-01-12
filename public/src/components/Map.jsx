/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  GoogleMap, useLoadScript, Marker, InfoWindow,
} from '@react-google-maps/api';
import styled from 'styled-components';

const libraries = ['places'];
const mapContainerStyle = {
  height: '480px',
  width: '480px',
};
const center = {
  lat: 39.952583,
  lng: -75.165222,
};

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  if (loadError) return 'Error';
  if (!isLoaded) return 'Loading...';

  return (
    <div>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center} />
    </div>
  );
}

export default Map;
