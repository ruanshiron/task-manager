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

class TasksContent extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/tasks" render={(props) => <TasksListContent {...props} />} />

                <Route exact path="/tasks/template/new" render={(props) => <NewTasksTemplateContent {...props} />} />
                <Route exact path="/tasks/template" render={(props) => <TasksTemplateContent {...props} />} />

                <Route exact path="/tasks/new" render={(props) => <NewTasksContent {...props} />} />
                <Route exact path="/tasks/:taskId" render={(props) => <TasksListContent {...props} />} />

            </Switch>
        )
    }
}

export default TasksContent
