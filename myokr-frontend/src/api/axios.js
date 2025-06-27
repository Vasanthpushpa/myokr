import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Change this if you're hosting backend elsewhere
});

export default instance;
