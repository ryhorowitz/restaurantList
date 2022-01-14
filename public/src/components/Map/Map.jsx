/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
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

function Map({ restaurants, setRestaurants }) {
  const { isLoaded, loadError } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
    version: 'weekly',
  });

  const [markers, setMarkers] = useState(restaurants);

  useEffect(() => {
    setMarkers(restaurants);
  }, [restaurants]);

  const onMapClick = useCallback((e) => {
    setRestaurants((current) => [
      ...current, {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date().toISOString(),
      },
    ]);
  }, [setRestaurants]);

  // const mapRef = useRef();
  // const onMapLoad = useCallback((map) => {
  //   mapRef.current = map;
  // }, []);

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
        // onLoad={onMapLoad}
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



//on map load add markers in state to the map.
