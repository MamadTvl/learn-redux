const redux = require('redux')
const usersReducer = require('./users/reducer')
const thunkMiddleware = require('redux-thunk').default
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware


const store = createStore(usersReducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {
    console.log(store.getState().loading ? 'loading' : store.getState())
    return
})

module.exports = store