import React from 'react';

import { ProgressBar } from '@blueprintjs/core';
import GroupMenu from './GroupMenu'
import GroupContent from './GroupContainer/GroupContent'

export class Groups extends React.Component {
    render () {
        return (
            <div>
                <div style={{ left: "64px" }} className="navigation">
                    <div style={{
                        backgroundColor: "#EBF1F5",
                        minWidth: "285px",
                        maxWidth: "285px",
                        height: "100vh",
                        paddingTop: "28px"
                    }}>
                        <GroupMenu />    
                    </div>
                </div>    
                <div style={{marginLeft: "285px"}}>
                    <div className="container-fluid">
                        <GroupContent />
                    </div>
                </div>
            </div>
        );
    }
    
}