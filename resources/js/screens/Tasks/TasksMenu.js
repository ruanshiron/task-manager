import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory, Switch, Route } from 'react-router-dom'

import { Menu, Classes, MenuDivider } from "@blueprintjs/core"
import { LinkMenuItem } from '../../components'
import { TTree } from '../../components/TTree';


export default function TasksMenu(props) {

    const [group, setGroup] = useState({ selected: null, list: null })

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/users/me',
        })
            .then(response => {
                try {
                    setGroup({
                        ...group,
                        list: response.data
                    })
                } catch (error) {
                    console.log(error);
                }
            });
    }, [])

    let history = useHistory()

    useEffect(() => {

    })

    return (
        <div className="container-fluid">

            < Menu >
                <LinkMenuItem icon="new-text-box" activeOnlyWhenExact to="/tasks/" text="Xem danh sách công việc" />
                <LinkMenuItem icon="new-object" to="/tasks/new" text="Tạo mới công việc" />
                <LinkMenuItem icon="new-object" activeOnlyWhenExact to="/tasks/template" text="Xem danh sách mẫu công việc" />
                <LinkMenuItem icon="pie-chart" to="/tasks/template/new" text="Tạo mẫu công việc" />
            </Menu>

            < Menu
                style={{
                    marginTop: "15px",
                    maxHeight: "30vh",
                    overflow: 'scroll',
                    overflowX: 'hidden'
                }}>
                <MenuDivider title="Nhóm của bạn" />
                {
                    group.list && group.list.map(u => (
                        <LinkMenuItem
                            key={u.id}
                            icon="people"
                            to={"/tasks/groups/" + u.id}
                            text={u.name}
                        />
                    ))
                }
            </Menu>
            <Switch>
                <Route
                    exact
                    path="/tasks/groups/:groupId"
                >
                    <GroupMenu />
                </Route>
            </Switch>
        </div>

    )
}

function GroupMenu(props) {

    return (
        <Menu style={{
            marginTop: "15px",
            maxHeight: "30vh",
            overflow: 'scroll',
            overflowX: 'hidden'
        }}>
            <MenuDivider title="Bộ phận sản xuất" />
            <TTree />
        </Menu>
    )
}

