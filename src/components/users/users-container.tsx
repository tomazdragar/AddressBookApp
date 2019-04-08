import * as React from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {fetchUsers, clearUsers} from "./actions/index"
import UsersList from "./users-list"

interface IUsers {
    users: any
    settings: any
    modalVisible: boolean
    fetchUsers: any
    clearUsers: any
    setLocale: any
}

/**
 * Functional component which is an entry point to the users page.
 * It is connected to the redux store, its state is mapped to props as also action functions.
 * @param {object} user
 * @param {object} settings
 * @param {function} fetchUsers - Action
 * @param {function} clearUsers - Action
 */
const UsersContainer = ({users, settings, fetchUsers, clearUsers }: IUsers) => {

    // This functional component is actually a container... which is kind of pointless if we return only
    // one child component. However in reality there is usually more children returned, so I made this 'wrapper',
    // so that we can add more child components later and each get connected with the store.
    return (
        <div className="users">
            <UsersList users={users} fetchUsers={fetchUsers} clearUsers={clearUsers} settings={settings}/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        users: state.users,
        settings: state.settings
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchUsers,
        clearUsers
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)