import React from 'react'

import { Button, Menu, MenuDivider, MenuItem, Popover, Position } from "@blueprintjs/core";
import axio from 'axios';

export class UserButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)

    }

    state = {
        csrf: document.getElementById("csrf").children[0].defaultValue
    }

    componentDidMount() {
        console.log(this.state.csrf);

    }

    handleLogout(e) {
        console.log('xxs')
        axios({
            method: 'post',
            url: 'http://localhost:8000/logout',
        })
        .then(response => {
            console.log(response)
        });
    }

    render() {
        const menu = (
            <Menu>
                <MenuDivider title="hello" />
                <MenuItem text="Profile" />
                <MenuDivider />
                <form action="/logout" method="POST">
                    <input type="hidden" name="_token" value={this.state.csrf} />
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
