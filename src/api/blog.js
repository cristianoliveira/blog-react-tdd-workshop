const API_URL = 'http://localhost:8082';

export const fetchPosts = () => {
  return fetch(API_URL + '/posts').then(res => res.json());
};
