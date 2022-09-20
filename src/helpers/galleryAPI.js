import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29133647-3d8509d2cb813d5d67d4bc82b';

export const galleryApi = async (query, page = 1, perPage = 12) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/?key =${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    );
    const gallery = await JSON.parse(response);
    return gallery;
  } catch (error) {
    console.log(error);
  }
};
