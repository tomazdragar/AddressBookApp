import * as React from 'react'
import {mount} from 'enzyme'
import {} from 'jasmine'
import Root from '../../../root'
import users from '../apis/randomuser'





beforeEach(async () => {
    const usersData = await users.get('/?page=1&results=5&seed=abc&nat=ch')
    const settingsData = {
        title: "Settings",
        subtitle: "Settings page where you can change your browsing settings",
        excerpt: "Please select users location:",
        locale: "ch"
    }
    const initialState = {settings: settingsData, users: usersData.data.results}

    mount(
        <Root initialState={initialState}>

        </Root>
    );
});

it('shows a UserList component', () => {
    expect([1,2,3,4,5,6,7,8].length).toEqual(8);
})

