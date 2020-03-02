import {CREATE_USER, FETCH_USERS, UPDATE_USER} from './action.types';

export const createUser = (userData) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
      .then((res) => res.json())
      .then((users) =>
        dispatch({
          type: CREATE_USER,
          payload: users,
        }),
      );
};
