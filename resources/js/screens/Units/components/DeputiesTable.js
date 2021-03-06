import React, { useState, useEffect } from 'react'
import { H6, Card, InputGroup, Button } from '@blueprintjs/core'
import { ItemSuggest } from '../../../components'

export function DeputiesTable({ users, onChange, deputies }) {

    const [state, setState] = useState({
        create: {
            id: 0,
            mission: ''
        }
    })

    useEffect(() => {


    })

    const deleteOnClick = (index) => {
        deputies.splice(index, 1)

        setState({
            ...state,
            deputies: deputies
        })
        if (onChange) onChange(deputies)
    }

    const nameEditOnChange = (v, i) => {
        deputies[i] = { ...v, mission: deputies[i].mission}
        onChange(deputies)
    }

    const missionEditOnChange = (e, i) => {
        deputies[i].mission = e.target.value
        onChange(deputies)
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
                                    deputies.map((u, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td><ItemSuggest onChange={v => nameEditOnChange(v, i)} selected={deputies[i]} items={users} fill /></td>
                                            <td><InputGroup onChange={e => missionEditOnChange(e, i)} value={u.mission ? u.mission : ''} /></td>
                                            <td>
                                                <Button onClick={(e) => deleteOnClick(i)} intent="danger" minimal icon='delete'></Button>
                                            </td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <th scope="row">{deputies.length + 1}</th>
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
                                                    deputies.push(state.create)
                                                    setState({
                                                        ...state,
                                                        deputies: deputies,
                                                        create: {
                                                            id: 0,
                                                            title: ''
                                                            , mission: ''
                                                        }
                                                    })
                                                    if (onChange) onChange(deputies)
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
