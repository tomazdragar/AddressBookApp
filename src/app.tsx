import * as React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Root from './root'

// Containers
import Settings from './components/settings/settings'
import Users from './components/users/users'

// Components
import Navigation from "./components/navigation/navigation"


// Antd
import {LocaleProvider} from 'antd' // Locales for antd
import enUS from 'antd/lib/locale-provider/en_US' // Set Default locale for antd

// Import styles
import './styles/scss/main.scss'

// Wrap the app with the Root component, where we create the store.
// Then we use react router and set the locale.
// Then we load components for each route as also for the navigation.
ReactDOM.render(
    <Root>
        <BrowserRouter>
            <LocaleProvider locale={enUS}>
                <div className="main-wrapper">
                    <h1 className="meeting-title">Address book</h1>
                    <Navigation/>
                    <Switch>
                        <Route path="/" component={Users} exact={true}/>
                        <Route path="/settings" component={Settings}/>
                    </Switch>
                </div>
            </LocaleProvider>
        </BrowserRouter>
    </Root>
    , document.getElementById('main'));
