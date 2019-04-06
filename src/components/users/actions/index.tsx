import users from '../apis/randomuser'

export const fetchUsers = (page, locale) => async dispatch => {
    const response = await users.get('/?page='+page+'&results=50&seed=abc&nat='+locale)

    dispatch ({
        type: 'FETCH_USERS',
        payload: {
            users: response.data
        }
    })
}

export const clearUsers = () => async dispatch => {
    dispatch ({
        type: 'CLEAR_USERS',
        payload: {
            users: []
        }
    })
}