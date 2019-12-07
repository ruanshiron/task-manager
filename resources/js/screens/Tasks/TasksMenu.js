import React from 'react';

import { Menu, Classes, MenuDivider } from "@blueprintjs/core"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch
} from "react-router-dom";


function LinkMenuItem({ to, activeOnlyWhenExact, icon, text }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    })

    return (
        <Link style={{ textDecoration: 'none', color: 'black' }} to={to}>
            <Menu.Item style={{marginTop: "2px"}} icon={icon} text={text} active={match ? true : false} />
        </Link>
    )
}

class TasksMenu extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                
                < Menu >
                    <LinkMenuItem icon="new-text-box" activeOnlyWhenExact to="/tasks/" text="Xem danh sách công việc" />
                    <LinkMenuItem icon="new-object" to="/tasks/new" text="Tạo mới công việc" />
                    <LinkMenuItem icon="new-object" activeOnlyWhenExact to="/tasks/template" text="Xem danh sách mẫu công việc" />
                    <LinkMenuItem icon="pie-chart" to="/tasks/template/new" text="Tạo mẫu công việc" />
                </Menu>

                < Menu style={{marginTop: "15px"}}>
                    <MenuDivider title="Nhóm của bạn" />
                    <LinkMenuItem icon="new-text-box" to="/tasks/1" text="Phòng đảm bảo chất lượng" />
                    <LinkMenuItem icon="new-object" to="/tasks/2" text="Bộ phận sản xuất" />
                    <LinkMenuItem icon="new-object" to="/tasks/3" text="Khắc phục sự cố" />
                </Menu>


            </div>

        )
    }
}

export default TasksMenu