import {CREATE_USER, FETCH_USERS, UPDATE_USER} from './action.types';
const initialState = {
  users: [],
  user: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        users: action.payload,
      };
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        users: action.payload,
      };
    default: return state;
  }
}
