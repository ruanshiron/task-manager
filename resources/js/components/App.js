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

import { Button, Menu, MenuItem, MenuDivider } from '@blueprintjs/core';

import '@blueprintjs/core/lib/css/blueprint.css';
import { FocusStyleManager } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();

function LinkButton({ to, activeOnlyWhenExact, icon }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    })

    return (
        <Link to={to}>
            <Button style={{ margin: "4px" }} icon={icon} minimal large active={match ? true : false}></Button>
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

                            <LinkButton to="/" activeOnlyWhenExact={true} icon="home"></LinkButton>

                            <LinkButton to="/tasks" activeOnlyWhenExact={true} icon="projects"></LinkButton>

                            <LinkButton to="/kpi" activeOnlyWhenExact={true} icon="chart"></LinkButton>

                            <LinkButton to="/groups" activeOnlyWhenExact={true} icon="people"></LinkButton>

                            <LinkButton to="/units" activeOnlyWhenExact={true} icon="diagram-tree"></LinkButton>

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
