import React from 'react';

import { Menu, Classes, MenuDivider } from "@blueprintjs/core"
import { LinkMenuItem } from '../../components'

class KpiMenu extends React.Component {

    handleClick(e) {
        e.preventDefault()
    }

    render() {
        return (
            < Menu >
                <MenuDivider title="KPI" />
                <LinkMenuItem icon="new-text-box" activeOnlyWhenExact to="/kpi/" text="KPI đơn vị" />
                <LinkMenuItem icon="new-object" to="/kpi/personal" text="KPI mục tiêu cá nhân" />
                <LinkMenuItem icon="new-object" to="/kpi/rate" text="Đánh giá KPI" />
                <LinkMenuItem icon="pie-chart" to="/kpi/dashboard" text="Thống kê KPI" />
            </Menu>
        )
    }
}

export default KpiMenu
