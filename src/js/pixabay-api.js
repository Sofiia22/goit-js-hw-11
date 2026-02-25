// js/pixabay-api.js
import axios from 'axios';

const API_KEY = '52770413-51c449e2c65101d33f96e6ea5';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
