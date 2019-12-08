import React from 'react';

import { ProgressBar } from '@blueprintjs/core';
import GroupMenu from './GroupMenu'
import GroupContent from './GroupContainer/GroupContent'

export class Groups extends React.Component {
    render () {
        return (
            <div className="container-fluid">
                <div className="row relative">
                    <div style={{ left: "64px" }} className="position-fixed">
                        <div style={{
                            backgroundColor: "#EBF1F5",
                            minWidth: "285px",
                            maxWidth: "285px",
                            padding: "15px",
                            height: "100vh",
                            paddingTop: "28px"
                        }}>
                            <GroupMenu />
                        </div>
                    </div>
                    <div className="fa-scroll border-left content-unit "
                        style={{minWidth: "800px", padding:"15px", height: "100vh", paddingTop: "28px", marginLeft: "285px"}}>
                            <GroupContent />
                    </div>
                </div>
            </div>
        );
    }
    
}