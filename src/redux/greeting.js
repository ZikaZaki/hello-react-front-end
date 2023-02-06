import axios from 'axios';

const GREETING_LOADING = 'GREETING_LOADING';
const GREETING_SUCCESS = 'GREETING_SUCCESS';
const GREETING_ERROR = 'GREETING_ERROR';

const initialState = {
  loading: false,
  greeting: null,
  error: '',
};

const greetingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GREETING_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GREETING_SUCCESS:
      return {
        ...state,
        loading: false,
        greeting: payload,
        error: '',
      };
    case GREETING_ERROR:
      return {
        ...state,
        loading: false,
        greeting: null,
        error: payload,
      };
    default:
      return state;
  }
};

export const fetchData = () => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  };

  try {
    dispatch({ type: GREETING_LOADING });
    const { data } = await axios.get('http://127.0.0.1:3001/greetings/', config);
    // Should convert data to JSON before dispatching data['message']
    dispatch({ type: GREETING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GREETING_ERROR, payload: error.message });
  }
};

export default greetingReducer;
