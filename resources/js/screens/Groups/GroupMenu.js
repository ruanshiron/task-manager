import React from 'react';

import { Menu, Classes, MenuDivider } from "@blueprintjs/core"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch
} from "react-router-dom";


function LinkMenuItem({ to, activeOnlyWhenExact, icon, text }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    })

    return (
        <Link style={{ textDecoration: 'none', color: 'black'}} to={to}>
            <Menu.Item style={{ marginTop: '2px' }} icon={icon} text={text} active={match ? true : false}/>
        </Link>
    )
}

class GroupMenu extends React.Component {

    handleClick(e) {
        e.preventDefault()
    }

    render() {
        return (
            < Menu >
                <MenuDivider title="GROUP" />
                <LinkMenuItem icon="new-text-box" activeOnlyWhenExact to="/groups/" text="Xen danh sách nhóm" />
                <LinkMenuItem icon="new-object" to="/groups/createNewGroup" text="Tạo mới nhóm" />
            </Menu>
        )
    }
}

export default GroupMenu