import React, { useMemo, useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import css from './listStyles.css';
import ListItem from './ListItem.jsx';

function List({ restaurants }) { // add props from app state.
  // console.log('rests', restaurants);

  const data = restaurants.map(
    (rest, i) => <ListItem rest={rest} key={rest.lat} />,
  );

  console.log('list items', data);
  return (
    <div className="list">
      <ol>
        {data}
      </ol>
    </div>
  );
}

export default List;

List.propTypes = {
  restaurants: PropTypes.array,
  len: PropTypes.number,
};
