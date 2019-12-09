import React, { useState, useEffect } from 'react';

import { ITreeNode, Tree, Tooltip, Position, Icon, Intent, Classes, } from '@blueprintjs/core';

import UnitsTree from './UnitsTree'
import UnitsContent from './UnitsContents'

export class Units extends React.Component {
    render() {
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
                        <UnitsTree /> 
                    </div>
                </div>    
                <div style={{marginLeft: "285px"}}>
                    <div className="container-fluid">
                        <UnitsContent />
                    </div>
                </div>
            </div>
        );
    }

}



