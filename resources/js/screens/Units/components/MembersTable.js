import React, { useState, useEffect } from 'react'
import { H6, Card, InputGroup, Button } from '@blueprintjs/core'
import { ItemSuggest } from '../../../components'

export function MembersTable({ users, onChange, members }) {

    const [state, setState] = useState({
        create: {
            id: 0,
            mission: ''
        }
    })

    useEffect(() => {


    })

    const deleteOnClick = (index) => {
        members.splice(index, 1)

        setState({
            ...state,
            members: members
        })
        if (onChange) onChange(members)
    }

    const nameEditOnChange = (v, i) => {
        members[i] = { ...members[i], user: v }
        setState({
            ...state,
            members: members
        })
    }

    const missionEditOnChange = (e, i) => {
        members[i].mission = e.target.value
        setState({
            ...state,
            members: members
        })
    }

    return (
        <div className="flex-fill bd-highlight">
            <div className="p-2">
                <H6>Phó đơn vị</H6>
                <Card elevation={0}>
                    <div className="">
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Họ và tên</th>
                                    <th scope="col">Nhiệm vụ</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    members.map((u, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td><ItemSuggest onChange={v => nameEditOnChange(v, i)} selected={u} items={users} fill /></td>
                                            <td><InputGroup onChange={e => missionEditOnChange(e, i)} value={u.mission ? u.mission : ''} /></td>
                                            <td>
                                                <Button onClick={(e) => deleteOnClick(i)} intent="danger" minimal icon='delete'></Button>
                                            </td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <th scope="row">{members.length + 1}</th>
                                    <td>
                                        <ItemSuggest
                                            items={users}
                                            selected={state.create}
                                            onChange={v => {
                                                setState({
                                                    ...state,
                                                    create: { ...state.create, ...v}
                                                })
                                            }}
                                            fill />
                                    </td>
                                    <td>
                                        <InputGroup fill
                                            value={state.create.mission}
                                            onChange={e => {
                                                setState({
                                                    ...state,
                                                    create: {
                                                        ...state.create,
                                                        mission: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <Button icon='add' intent="success" minimal
                                            onClick={e => {
                                                if (state.create.id != 0) {
                                                    members.push(state.create)
                                                    setState({
                                                        ...state,
                                                        members: members,
                                                        create: {
                                                            id: 0,
                                                            title: ''
                                                            , mission: ''
                                                        }
                                                    })
                                                    if (onChange) onChange(members)
                                                }
                                            }}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    )
}