const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case "FETCH_SETTINGS": {
            return { ...state, ...action.payload }
        }
        case "SET_LOCALE": {
            return { ...state, ...action.payload }
        }
    }

    return state
}