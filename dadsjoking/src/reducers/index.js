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
  ADD_PUBLIC_JOKE,
  ADD_PUBLIC_JOKE_FAILED,
  ADD_PUBLIC_JOKE_SUCCESS,
  DELETE_PUBLIC_JOKE,
  DELETE_PUBLIC_JOKE_FAILED,
  DELETE_PUBLIC_JOKE_SUCCESS,
  GET_PRIVATE_JOKES,
  GET_PRIVATE_JOKES_SUCCESS,
  GET_PRIVATE_JOKES_FAILED,
  ADD_PRIVATE_JOKE,
  ADD_PRIVATE_JOKE_FAILED,
  ADD_PRIVATE_JOKE_SUCCESS,
  EDIT_PRIVATE_JOKE,
  EDIT_PRIVATE_JOKE_FAILED,
  EDIT_PRIVATE_JOKE_SUCCESS,
  DELETE_PRIVATE_JOKE,
  DELETE_PRIVATE_JOKE_FAILED,
  DELETE_PRIVATE_JOKE_SUCCESS
} from '../actions/index'


const initialState = {
  username: "",
  password: "",
  isLoggedIn: false,
  isLoading: false,
  errorMessage: null,
  publicJokes: [],
  privateJokes: []
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
        isLoggedIn: true,
        isLoading: false,
        errorMessage: null,
      }
    }
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
        errorMessage: null
      }
    }
    case LOG_IN_FAILED: {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        errorMessage: action.payload
      }
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
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
      const newJokes = state.publicJokes.concat(action.payload)
      return {
        ...state,
        publicJokes: newJokes,
        isLoading: false,
        errorMessage: null
      }
    }
    case GET_PRIVATE_JOKES: {
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      }
    }
    case GET_PRIVATE_JOKES_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    }
    case GET_PRIVATE_JOKES_SUCCESS: {
      console.log(action.payload)
      const newJokes = state.privateJokes.concat(action.payload)
      return {
        ...state,
        privateJokes: newJokes,
        isLoading: false,
        errorMessage: null
      }
    }
    case ADD_PUBLIC_JOKE: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      }
    }
    case ADD_PUBLIC_JOKE_FAILED: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    }
    case ADD_PUBLIC_JOKE_SUCCESS: {
      console.log(action.payload)
      const newJokes = state.publicJokes.concat(action.payload)
      return {
        ...state,
        publicJokes: newJokes,
        isLoading: false,
        errorMessage: null
      }
    }
    case ADD_PRIVATE_JOKE: {
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      }
    }
    case ADD_PRIVATE_JOKE_FAILED: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    }
    case ADD_PRIVATE_JOKE_SUCCESS: {
      console.log(action.payload)
      const newJokes = state.privateJokes.concat(action.payload)
      return {
        ...state,
        privateJokes: newJokes,
        isLoading: false,
        errorMessage: null
      }
    }
    case DELETE_PUBLIC_JOKE: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      }
    }
    case DELETE_PUBLIC_JOKE_FAILED: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
    }
  }
    case DELETE_PUBLIC_JOKE_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        errorMessage: null
      }
    }
    case DELETE_PRIVATE_JOKE: {
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      }
    }
    case DELETE_PRIVATE_JOKE_FAILED: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
    }
  }
    case DELETE_PRIVATE_JOKE_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        errorMessage: null
      }
    }
    case EDIT_PRIVATE_JOKE: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      }
    }
    case EDIT_PRIVATE_JOKE_FAILED: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
    }
  }
    case EDIT_PRIVATE_JOKE_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        errorMessage: null
    }
  }
    default:
      return state
  }
}