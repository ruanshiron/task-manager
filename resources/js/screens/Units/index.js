import React, { useState, useEffect } from 'react';

import { ITreeNode, Tree, Tooltip, Position, Icon, Intent, Classes, } from '@blueprintjs/core';

import UnitsTree from './UnitsTree'
import UnitsContent from './UnitsContents'
import { Route } from 'react-router-dom';
import { UserButton } from '../../components';

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
                        <Route exact path="/units" > <UnitsTree/> </Route>
                        <Route exact path="/units/:unitId">  <UnitsTree/> </Route>
                    </div>
                </div>
                <div style={{marginLeft: "285px"}}>
                    <div className="container-fluid">
                    <Route exact path="/units/:unitId">  <UnitsContent /> </Route>
                    </div>
                </div>
            </div>
        );
    }

}



