import * as React from 'react'
import { withRouter } from 'react-router'
import {Menu, Icon} from 'antd';

interface INavigation {
    history: any
}

const Navigation = ({ history }: INavigation) => {
    const [current, currentOpen] = React.useState(history.location.pathname)

    function handleClick(event) {
        currentOpen(event.key)
        history.push(event.key)
    }

    return (
        <div className="navigation-wrapper">
            <Menu
                onClick={event =>handleClick(event)} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="/">
                    <Icon type="team" />
                    Users
                </Menu.Item>
                <Menu.Item key="/settings">
                    <Icon type="setting" />
                    Settings
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default withRouter(Navigation)