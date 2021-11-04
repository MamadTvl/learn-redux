const store = require('../redux/store')
const {fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure} = require('../redux/users/action')
const BASEURL = 'https://fakerestapi.azurewebsites.net'
const axios = require('axios')

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

store.dispatch((dispatch) => fetchUsers(dispatch))
