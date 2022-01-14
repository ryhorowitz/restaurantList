import React, { useMemo, useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import css from './listStyles.css';

function ListItem(props) {
  const { rest } = props;
  const { lat } = rest;
  // console.log('item is,', lat);
  return (
    <li>{lat}</li>
  );
}

export default ListItem;

ListItem.propTypes = {
};
