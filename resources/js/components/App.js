import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import { Tasks, Groups, Kpi, Units, Home } from '../screens';

import { Button, Menu, MenuItem, MenuDivider, Tooltip, Position } from '@blueprintjs/core';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/select/lib/css/blueprint-select.css'
import { FocusStyleManager } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();

function LinkButton({ to, activeOnlyWhenExact, icon, name }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    })

    return (
        <Link to={to}>
            <Tooltip content={name} position={Position.RIGHT}>
                <Button style={{ margin: "4px" }} icon={icon} minimal large active={match ? true : false}></Button>
            </Tooltip>
        </Link>
    )
}

function App() {

    return (

        <Router>
            <div>
                <div className="navigation">
                    <div className="sidebar">
                        <div className="nav-header">

                            <LinkButton name="Trang chủ" to="/" activeOnlyWhenExact={true} icon="home"></LinkButton>

                            <LinkButton name="Công việc" to="/tasks" icon="projects"></LinkButton>

                            <LinkButton name="KPI" to="/kpi" icon="chart"></LinkButton>

                            <LinkButton name="Nhóm" to="/groups" icon="people"></LinkButton>

                            <LinkButton name="Đơn vị" to="/units" icon="diagram-tree"></LinkButton>
ß
                        </div>
                        <Button style={{ margin: "4px" }} icon="person" minimal large></Button>
                    </div>
                </div>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/tasks">
                            <Tasks />
                        </Route>
                        <Route path="/kpi">
                            <Kpi />
                        </Route>
                        <Route path="/groups">
                            <Groups />
                        </Route>
                        <Route path="/units">
                            <Units />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;

if (document.getElementById('task-manager')) {
    ReactDOM.render(<App />, document.getElementById('task-manager'));
}
