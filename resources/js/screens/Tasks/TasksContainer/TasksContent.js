import React from 'react';

import { Menu, Classes, MenuDivider } from "@blueprintjs/core"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import TasksListContent from './TasksListContent'
import NewTasksContent from './NewTasksContent';
import TasksTemplateContent from './TasksTemplateContent';
import NewTasksTemplateContent from './NewTasksTemplateContent';

class KpiContent extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/tasks/">
                    <TasksListContent />
                </Route>
                <Route path="/tasks/new">
                    <NewTasksContent />
                </Route>
                <Route exact path="/tasks/template">
                    <TasksTemplateContent/>
                </Route>
                <Route exact path="/tasks/template/new">
                    <NewTasksTemplateContent/>
                </Route>
            </Switch>
        )
    }
}

export default KpiContent