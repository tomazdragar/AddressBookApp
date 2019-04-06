const initialState = []

export default function (state = initialState, action) {
    switch (action.type) {
        case "FETCH_USERS": {
            return action.payload.users.results
        }
        case "CLEAR_USERS": {
            return action.payload.users
        }
    }

    return state
}