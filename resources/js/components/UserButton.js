import React from 'react'

import { Button, Menu, MenuDivider, MenuItem, Popover, Position } from "@blueprintjs/core";
import axio from 'axios';

export class UserButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)

    }


    handleLogout(e) {
        console.log('xxs')
        axios({
            method: 'post',
            url: 'http://localhost:8000/logout',
        })
        .then(response => {
        });
    }

    render() {
        const menu = (
            <Menu>
                <MenuDivider title="hello" />
                <MenuItem text="Profile" />
                <MenuDivider />
                <form action="/logout" method="POST">
                    <input type="hidden" name="_token" value={$('meta[name=csrf-token]').attr('content')} />
                    <button type="submit" class="bp3-button bp3-fill bp3-minimal">Logout</button>
                </form>
            </Menu>
        );

        return (
            <Popover content={menu} position={Position.RIGHT_BOTTOM}>
                <Button style={{ margin: "4px" }} icon="person" minimal large></Button>
            </Popover>
        )
    }
}
