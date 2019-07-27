import {
  SIGN_UP,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESS,
  LOG_IN,
  LOG_IN_FAILED,
  LOG_IN_SUCCESS,
  GET_PUBLIC_JOKES,
  GET_PUBLIC_JOKES_FAILED,
  GET_PUBLIC_JOKES_SUCCESS,
} from '../actions/index'


const initialState = {
  username: "",
  password: "",
  isLoggedIn: false,
  isLoading: false,
  errorMessage: null,
  jokes: []
};

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGN_UP: {
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      }
    }
    case SIGN_UP_FAILED: {
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false
      }
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
      }
    }
    case LOG_IN: {
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      }
    }
    case LOG_IN_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errorMessage: null
      }
    }
    
    case GET_PUBLIC_JOKES: {
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      }
    }
    case GET_PUBLIC_JOKES_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    }
    case GET_PUBLIC_JOKES_SUCCESS: {
      console.log(action.payload)
      const newJokes = state.jokes.concat(action.payload)
      return {
        ...state,
        jokes: newJokes,
        isLoading: false,
        errorMessage: null
      }
    }
    default:
      return state
  }
}