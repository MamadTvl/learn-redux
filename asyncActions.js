const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const {FETCH_USERS_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} = require('./types')

const initialState = {
    loading: false,
    users: [],
    error: '',
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {
    console.log(store.getState().loading ? 'loading' : store.getState())
    return
})

const fetchUsers = require('./action')
store.dispatch((dispatch) => fetchUsers(dispatch))
