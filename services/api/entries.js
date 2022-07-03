import axios from 'axios';

const BASE_URL = 'http://api.wikishiput.com/entries';

export const entriesClient = axios.create({ baseURL: BASE_URL });

export const removeAuthEntriesToken = () => {
  entriesClient.defaults.headers.common['Authorization'] = '';
  delete entriesClient.defaults.headers.common['Authorization'];
};

export const setAuthEntriesToken = (token) => {
  if (token) {
    entriesClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

export const getTopEntries = async () => {
  const { data } = await entriesClient.get('/top');
  return data;
};
