
import {FETCHING, SUCCESS, FAILURE} from "../actions";

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, {fetching: true});

    case SUCCESS:
      return Object.assign({}, state, {characters: [...action.payload], fetching: false});

    case FAILURE:
      return Object.assign({}, state, {fetching: false, error: action.payload});
      
    default:
      return state;
  }
};
