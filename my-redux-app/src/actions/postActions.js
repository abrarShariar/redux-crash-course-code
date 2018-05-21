import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    dispatch({
      type: FETCH_POSTS,
      payload: posts
    });
}