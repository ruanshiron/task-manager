import React from 'react';

import { Menu, Classes, MenuDivider } from "@blueprintjs/core"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import ListGroup from './ListGroup'
import CreateNewGroup from './CreateNewGroup'
import EditGroup from './EditGroup';

class GroupContent extends React.Component {

    handleClick(e) {
        e.preventDefault()
    }

    render() {
        return (
            <Switch>
                <Route exact path="/groups/">
                    <ListGroup/>
                </Route>
                {/* <Route path="/groups/:groupID">
                    <EditGroup/>
                </Route> */}
                <Route path="/groups/createNewGroup">
                    <CreateNewGroup/>
                </Route>
            </Switch>
        )
    }
}

export default GroupContent