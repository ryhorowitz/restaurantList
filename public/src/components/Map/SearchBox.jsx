import React from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

function SearchBox() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 39.952583, lng: () => -75.165222 },
      radius: 10 * 1000, // 10km
    },
  });

  const onLoad = () => {
    getGeocode({ address: 'Restaurants' })
    .then((suggestions) => {
      console.log('suggestions', suggestions);
    })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log('📍 Coordinates: ', { lat, lng });
      })
      .catch((error) => {
        console.log('😱 Error: ', error);
      });
  };

  return (
    <StandaloneSearchBox
      onLoad={onLoad}
    >
      <input
        type="text"
        placeholder="Search Restaurants Near By"
        style={{
          boxSizing: 'border-box',
          border: '1px solid transparent',
          width: '240px',
          height: '32px',
          padding: '0 12px',
          borderRadius: '3px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
          fontSize: '14px',
          outline: 'none',
          textOverflow: 'ellipses',
          position: 'absolute',
          left: '50%',
          marginLeft: '-120px',
          zIndex: '3',
        }}
      />
    </StandaloneSearchBox>
  );
}

export default SearchBox;
