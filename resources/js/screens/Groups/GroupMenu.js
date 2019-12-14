import React from 'react';

import { Menu, Classes, MenuDivider } from "@blueprintjs/core"
import { LinkMenuItem } from '../../components'

class GroupMenu extends React.Component {

    handleClick(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div className="container-fluid">
                < Menu >
                    <MenuDivider title="GROUP" />
                    <LinkMenuItem icon="new-text-box" activeOnlyWhenExact to="/groups/" text="Xem danh sách nhóm" />
                    <LinkMenuItem icon="new-object" to="/groups/createNewGroup" text="Tạo mới nhóm" />
                </Menu>
            </div>
        )
    }
}

export default GroupMenu
