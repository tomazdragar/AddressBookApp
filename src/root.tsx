import * as React from 'react'
import {Provider} from 'react-redux'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import settings from "./components/settings/reducers/settings"
import users from "./components/users/reducers/users"

// This class is very important for testing.
// It 'separates' the redux provider/store from the app, so that we can use it for testing also.
// This gives us powerful tool for testing components with actual data.
// Instead of testing comopnents with dummy data, inserted directly to the component,
// we can build tests with real data from store and manipulate component while testing, so that
// we can actually test how it behaves!
const Root = ({children={}, initialState={}}) => {
    const rootReducer = combineReducers({
        settings,
        users,
    })

    // Create Redux store,
    // define its reducers
    // define optional initial state for tests
    // and apply all middlewares
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger)
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Root