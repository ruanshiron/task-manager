import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Tasks, Groups, Kpi, Units, Home } from '../screens';

import { Button, Menu, MenuItem, MenuDivider } from '@blueprintjs/core';

import '@blueprintjs/core/lib/css/blueprint.css';
import { FocusStyleManager } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();

function App() {

    return (

        <Router>
            <div className="container" >
                <div className="navigation">
                    <div className="sidebar">
                        <div className="nav-header">
                            <Button style={{ margin: "4px" }} icon="home" minimal large active></Button>
                            <Button style={{ margin: "4px" }} icon="projects" minimal large ></Button>
                            <Button style={{ margin: "4px" }} icon="chart" minimal large ></Button>
                            <Button style={{ margin: "4px" }} icon="people" minimal large ></Button>
                            <Button style={{ margin: "4px" }} icon="diagram-tree" minimal large ></Button>
                        </div>
                        <Button style={{ margin: "4px" }} icon="person" minimal large></Button>
                    </div>
                </div>
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
        </Router>
    );
}

export default App;

if (document.getElementById('task-manager')) {
    ReactDOM.render(<App />, document.getElementById('task-manager'));
}
