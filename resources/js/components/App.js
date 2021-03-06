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
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'

import { FocusStyleManager } from "@blueprintjs/core";
import { UserContext } from '../common/user';
import { UserButton } from './UserButton';

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

class App extends React.Component {

    constructor(props) {
        super(props)

        this.getUser = this.getUser.bind(this)
    }

    state = {
        user: undefined,
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        let user = null

        axios({
            method: 'get',
            url: 'http://localhost:8000/api/users/me',
        })
        .then(response => {
            this.setState({user: response})
        });
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
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

                                </div>
                                <UserButton />
                            </div>
                        </div>
                        <div className="content">
                            <Switch>
                                <Route exact path="/" render={(props) => <Home {...props}/>} />>
                                <Route path="/tasks" render={(props) => <Tasks {...props}/>} />
                                <Route path="/kpi" render={(props) => <Kpi {...props}/>}/>
                                <Route path="/groups" render={(props) => <Groups {...props}/>}/>
                                <Route path="/units" render={(props) => <Units {...props}/>}/>>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </UserContext.Provider>
        );
    }

}

export default App;

if (document.getElementById('task-manager')) {
    ReactDOM.render(<App />, document.getElementById('task-manager'));
}
