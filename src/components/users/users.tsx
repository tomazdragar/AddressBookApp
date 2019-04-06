import * as React from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {fetchUsers, clearUsers} from "./actions/index"
import {setLocale} from "./../settings/actions/index"
import UsersList from "./users-list"

interface IUsers {
    users: any
    settings: any
    modalVisible: boolean
    fetchUsers: any
    clearUsers: any
    setLocale: any
}

const Users = ({users, settings, fetchUsers, clearUsers, setLocale }: IUsers) => {

    React.useEffect(()=>{
        if (!users.length) {
            setLocale('gb')
        }
    },[users])

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
        clearUsers,
        setLocale
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)