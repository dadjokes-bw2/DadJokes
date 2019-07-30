import axios from 'axios'

//Sign-up action
export const SIGN_UP = 'SIGN_UP'  
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'

//Log-in action
export const LOG_IN = 'LOG_IN'
export const LOG_IN_FAILED = 'LOG_IN_FAILED'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'

//Get public jokes
export const GET_PUBLIC_JOKES = 'GET_PUBLIC_JOKES'
export const GET_PUBLIC_JOKES_FAILED = 'GET_PUBLIC_JOKES_FAILED'
export const GET_PUBLIC_JOKES_SUCCESS = 'GET_PUBLIC_JOKES_SUCCESS'

//Get private jokes
export const GET_PRIVATE_JOKES = 'GET_PRIVATE_JOKES'
export const GET_PRIVATE_JOKES_FAILED = 'GET_PRIVATE_JOKES_FAILED'
export const GET_PRIVATE_JOKES_SUCCESS = 'GET_PRIVATE_JOKES_SUCCESS'

//Add Joke
export const ADD_PUBLIC_JOKE = 'ADD_PUBLIC_JOKE'
export const ADD_PUBLIC_JOKE_SUCCESS = 'ADD_PUBLIC_JOKE_SUCCESS'
export const ADD_PUBLIC_JOKE_FAILED = 'ADD_PUBLIC_JOKE_FAILED'

export const ADD_PRIVATE_JOKE = 'ADD_PRIVATE_JOKE'
export const ADD_PRIVATE_JOKE_SUCCESS = 'ADD_PRIVATE_JOKE_SUCCESS'
export const ADD_PRIVATE_JOKE_FAILED = 'ADD_PRIVATE_JOKE_FAILED'

//Edit Joke
export const EDIT_PRIVATE_JOKE = 'EDIT_PRIVATE_JOKE'
export const EDIT_PRIVATE_JOKE_SUCCESS = 'EDIT_PRIVATE_JOKE_SUCCESS'
export const EDIT_PRIVATE_JOKE_FAILED = 'EDIT_PRIVATE_JOKE_FAILED'

//Delete Jokes
export const DELETE_PUBLIC_JOKE = 'DELETE_PUBLIC_JOKE'
export const DELETE_PUBLIC_JOKE_SUCCESS = 'DELETE_PUBLIC_JOKE_SUCCESS'
export const DELETE_PUBLIC_JOKE_FAILED = 'DELETE_PUBLIC_JOKE_FAILED'

export const DELETE_PRIVATE_JOKE = 'DELETE_PRIVATE_JOKE'
export const DELETE_PRIVATE_JOKE_SUCCESS = 'DELETE_PRIVATE_JOKE_SUCCESS'
export const DELETE_PRIVATE_JOKE_FAILED = 'DELETE_PRIVATE_JOKE_FAILED'

export function signUp(username, password) {
    return dispatch => {
        dispatch({type:SIGN_UP})

        const user = {username, password}

        return axios.post("https://backend-dadjokes.herokuapp.com/api/auth/register", user)
            .then((res) => {
                console.log(res)
                dispatch({type: SIGN_UP_SUCCESS})
            })
            .catch((err) => {
                console.log(err)
                dispatch({type: SIGN_UP_FAILED})
            })
    }
}

export function login(username, password) {
    return dispatch => {
        dispatch({type:LOG_IN})

        const user = {username, password}

        return axios.post("https://backend-dadjokes.herokuapp.com/api/auth/login", user)
            .then((res) => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
                dispatch({type: LOG_IN_SUCCESS})
            })
            .catch((err) => {
                console.log(err)
                dispatch({type: LOG_IN_FAILED})
            })
    }
}

export function getPublicJokes() {
    return dispatch => {
        dispatch({type: GET_PUBLIC_JOKES})

        axios.get("https://backend-dadJokes.herokuapp.com/api/publicJokes")
            .then((res) => {
                dispatch({type: GET_PUBLIC_JOKES_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                dispatch({type: GET_PUBLIC_JOKES_FAILED, payload: err})
            })
    }
}

export function getPrivateJokes() {
    return dispatch => {
        dispatch({type: GET_PRIVATE_JOKES})

        const headers = {
            Authorization: localStorage.getItem('token')
        }

        axios.get("https://backend-dadJokes.herokuapp.com/api/privateJokes", {headers})
            .then((res) => {
                dispatch({type: GET_PRIVATE_JOKES_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                dispatch({type: GET_PRIVATE_JOKES_FAILED, payload: err})
            })
    }
}

export function addPublicJoke(joke) {
    return dispatch => {
        dispatch({type:ADD_PUBLIC_JOKE})

        const body = {
            joke
        }      

        return axios.post("https://backend-dadJokes.herokuapp.com/api/publicJokes", {body})
            .then((res) => {
                console.log(res)
                dispatch({type: ADD_PUBLIC_JOKE_SUCCESS})
            })
            .catch((err) => {
                console.log(err)
                dispatch({type: ADD_PUBLIC_JOKE_FAILED})
            })
    }
}

export function addPrivateJoke(joke) {
    return dispatch => {
        dispatch({type: ADD_PRIVATE_JOKE})
        const headers = {
            Authorization: localStorage.getItem('token'),
        }
        const body = {
            joke
        }
        console.log(headers, body)
        return axios.post("https://backend-dadJokes.herokuapp.com/api/privateJokes", headers, body)
            .then((res) => {
                console.log(res)
                dispatch({type: ADD_PRIVATE_JOKE_SUCCESS})
            })
            .catch((err) => {
                console.log(err)
                dispatch({type: ADD_PRIVATE_JOKE_FAILED})
            })
    }
}

export function editPrivateJoke(joke) {
   
}

export function deletePublicJoke(id) {
    return dispatch => {
        dispatch({ type: DELETE_PUBLIC_JOKE})
        console.log(id)

        return axios.delete(`https://backend-dadJokes.herokuapp.com/api/publicJokes/${id}`)
            .then((res) => {
                console.log(res)
                dispatch({type: DELETE_PUBLIC_JOKE_SUCCESS})
            })
            .catch((err) => {
                console.log(err)
                dispatch({type: DELETE_PUBLIC_JOKE_FAILED})
            })
    }
}

export function deletePrivateJoke(joke) {
    
}