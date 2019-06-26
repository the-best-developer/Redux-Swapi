// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// export const addTodo = (e, todoItem) => {
//   e.preventDefault();
//   return {
//     type: ADD_TODO,
//     payload: todoItem
//   }
// };

const getPeople = () => dispatch => {
    //Trigger FETCHING when we make the request
    dispatch({type: FETCHING, payload: true});

    axios.get('https://swapi.co/api/people/')
    .then(({data}) => {
        //Trigger SUCCESS reducer on data retrival 
        dispatch({type: SUCCESS, payload: data.results});
    })
    .catch(err => {
        //Trigger FAILUER reducer on error
        dispatch({type: FAILURE, payload: err.message});
    });
  };

  export default getPeople