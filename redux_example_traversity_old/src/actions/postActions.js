import { FETCH_POSTS, NEW_POST } from './types'

export function fetchPosts() {
  return function (dispatch) {
    console.log('Fetching')
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
      }))
  }
}

// same with es6 
// export const fetchPosts = () => dispatch => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts => dispatch({
//       type: FETCH_POSTS,
//       payload: posts
//     }))
// }