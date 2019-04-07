import * as React from 'react'
import {mount} from 'enzyme'
import {} from 'jasmine'
import Root from '../../../root'
import users from '../../users/apis/randomuser'
import SettingsContainer from "../settings-container";

const getUsers = async() => users.get('/?page=1&results=5&seed=abc&nat=ch')
const settingsData = {
    title: "Settings",
    subtitle: "Settings page where you can change your browsing settings",
    excerpt: "Please select users location:",
    locale: "ch"
}
let wrapped

beforeEach(async () => {
    // Here we get the users from the api and fill the store with initial data
    const usersData = await getUsers()
    const initialState = {settings: settingsData, users: usersData.data.results}

    wrapped = mount(
        // Our tested component/container is filled with the data from the store.
        // This is very important, so that we can test it with the real data, as also
        // have connected component directly to the redux store. Therefore the props and state mapped is
        // updated correctly and we have solid base for testing component.
        <Root initialState={initialState}><SettingsContainer/></Root>
    )
})


// Starting with unit/integrational tests
it('is settings locale selector shown at load', () => {
    expect(wrapped.find('.locale-select').length).toEqual(1);
})

it('is default selection working correctly (testing with ch initial value)', () => {
    expect(wrapped.find('.ant-radio-button-wrapper-checked').text()).toEqual('CH');
})