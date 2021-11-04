const {
    FETCH_USERS_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} = require('./types')
const BASEURL = 'https://fakerestapi.azurewebsites.net'
const axios = require('axios')

// action
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    }
}

// action
const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: users,
    }
}
// action
const fetchUsersFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error,
    }
}


// using dispatch function to make a change in states
const fetchUsers = (dispatch) => {
    dispatch(fetchUsersRequest())
    axios.get(`${BASEURL}/api/v1/Users`)
        .then((response) => {
            const users = response.data.map(user => user)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            dispatch(fetchUsersFailure(error.message))
        })
}

module.exports = fetchUsers