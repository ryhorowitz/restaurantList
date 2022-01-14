/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useRef } from 'react';
import {
  GoogleMap, useLoadScript, Marker, InfoWindow,
} from '@react-google-maps/api';
import mapStyles from './mapStyles';

const libraries = ['places'];
const mapContainerStyle = {
  height: '50vh',
  width: '90%',
  top: '5%',
  left: '5%',
  position: 'RELATIVE',
  overflow: 'hidden',
};
const center = {
  lat: 39.952583,
  lng: -75.165222,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
    version: 'weekly',
  });
  const [markers, setMarkers] = useState([]);

  const onMapClick = useCallback((e) => {
    setMarkers((current) => [
      ...current, {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date().toISOString(),
      },
    ]);
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return 'Error';
  if (!isLoaded) return 'Loading...';

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time}
            position={{
              lat: marker.lat,
              lng: marker.lng,
            }}
            z-index={2}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default Map;
