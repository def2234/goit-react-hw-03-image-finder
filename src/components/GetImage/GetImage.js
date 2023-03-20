const BASIK_URL = 'https://pixabay.com/api/';
const URL_SETTINGS = 'image_type=photo&orientation=horizontal&per_page=12';
const API_KEY = '33349604-d98837e0ddc559622cee86d09';

export const GetImage = (querry, page) => {
  return fetch(
    `${BASIK_URL}?q=${querry}&page=${page}&key=${API_KEY}&${URL_SETTINGS}`
  ).then(response => {
    return response.json();
  });
};
