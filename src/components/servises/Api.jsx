import axios from 'axios';

export async function FetchApi(searchQuery, page) {
  const KEY = `35024755-179d3c3e2c1748492a5c83824`;
  const BASE_URL = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  const response = await axios.get(BASE_URL);

  return response;
}
