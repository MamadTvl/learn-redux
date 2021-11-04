const {
    FETCH_USERS_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} = require('./types')

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    }
}


const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: users,
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error,
    }
}

module.exports = {
    fetchUsersRequest,
    fetchUsersFailure,
    fetchUsersSuccess
}