import React, { useState, useEffect } from 'react';

import { ITreeNode, Tree, Tooltip, Position, Icon, Intent, Classes, } from '@blueprintjs/core';

import UnitsTree from './UnitsTree'
import UnitsContent from './UnitsContents'

export function Units(props) {
    return (
        <div className="container-fluid">
            <div className="row relative">
                <div className="position-fixed" style={{ left: "64px" }}>
                    <div style={{backgroundColor: "#EBF1F5",minWidth: "285px", maxWidth: "285px", padding:"15px", height: "100vh", paddingTop: "30px"}}>
                        <UnitsTree />
                    </div>
                </div>
                <div className="fa-scroll border-left content-unit "
                    style={{minWidth: "800px", padding:"15px", height: "100vh", paddingTop: "28px", marginLeft: "285px"}}>
                        <UnitsContent/>
                </div>
            </div>
        </div>
    );
}

