import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29133647-3d8509d2cb813d5d67d4bc82b';

export const galleryApi = async (query, page) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const gallery = response.data.hits.map(img => {
      const { id, largeImageURL, webformatURL, tags } = img;
      return {
        id,
        largeImageURL,
        webformatURL,
        tags,
      };
    });
    return gallery;
  } catch (error) {
    console.log(error);
  }
};
