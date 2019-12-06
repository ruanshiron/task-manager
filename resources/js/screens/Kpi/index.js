import React from 'react';

import { ProgressBar } from '@blueprintjs/core';
import KpiMenu from './KpiMenu'
import KpiContent from './KpiContainer/KpiContent'

export function Kpi(props) {
    return (
        <div >
            <div style={{ left: "64px" }} className="navigation">
                <div style={{
                    backgroundColor: "#EBF1F5",
                    minWidth: "285px",
                    maxWidth: "285px",
                    padding: "15px",
                    height: "100vh",
                    paddingTop: "28px"
                }}>
                    <KpiMenu />
                </div>
            </div>
            <div style={{marginLeft: "285px"}}>
                <div className="container-fluid">
                    <KpiContent />
                </div>
            </div>
        </div>
    );
}