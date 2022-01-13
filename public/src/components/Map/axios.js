import axios from 'axios';

const url = 'http://localhost:3000';

const saveMarkers = axios.post(url, {
  // data in state;
})
  .then((res) => {

  })
  .catch((err) => console.error('Error\n', err));
export default saveMarkers;
