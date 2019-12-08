import React from 'react';

import { ProgressBar } from '@blueprintjs/core'
import TasksMenu from './TasksMenu'
import TasksContent from './TasksContainer/TasksContent'

export class Tasks extends React.Component {

    render () {
        return (
            <div >
                <div style={{ left: "64px" }} className="navigation">
                    <div style={{
                        backgroundColor: "#EBF1F5",
                        minWidth: "285px",
                        maxWidth: "285px",
                        height: "100vh",
                        paddingTop: "28px"
                    }}>
                        <TasksMenu />
                    </div>
                </div>
                <div style={{marginLeft: "285px"}}>
                    <div className="container-fluid">
                        <TasksContent {...this.props}/>
                    </div>
                </div>
            </div>
        );
    }
    
}