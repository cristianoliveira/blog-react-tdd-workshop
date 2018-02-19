const API_URL = 'http://localhost:8082';

export const fetchPosts = () => {
  return fetch(API_URL + '/posts').then(res => res.json());
};

export const fetchComments = () => {
  return fetch(API_URL + '/comments').then(res => res.json());
};
