import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = '-rmlxPxWJJSoFtz8x8dorjcTbEBZaeQpanUA8A_mxIQ';

export const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
      params: {
        query,
        page,
        per_page: 12,
        client_id: ACCESS_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error.message);
    throw new Error('Failed to fetch images. Please try again later.');
  }
};
