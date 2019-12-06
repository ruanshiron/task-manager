import React from 'react';

import { Menu, Classes, MenuDivider } from "@blueprintjs/core"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import UnitsKpiContent from './UnitsKpiContent'
import PersonalKpiContent from './PersonalKpiContent'
import DashboardKpiContent from './DashboardKpiContent'
import RateKpiContent from './RateKpiContent'

class KpiContent extends React.Component {

    handleClick(e) {
        e.preventDefault()
    }

    render() {
        return (
            <Switch>
                <Route exact path="/kpi/">
                    <UnitsKpiContent />
                </Route>
                <Route path="/kpi/units">
                    <UnitsKpiContent />
                </Route>
                <Route path="/kpi/personal">
                    <PersonalKpiContent />
                </Route>
                <Route path="/kpi/rate">
                    <RateKpiContent />
                </Route>
                <Route path="/kpi/dashboard">
                    <DashboardKpiContent />
                </Route>
            </Switch>
        )
    }
}

export default KpiContent