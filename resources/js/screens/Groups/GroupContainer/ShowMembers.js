import React, { useState, useEffect } from 'react'
import { H6, Card, InputGroup, Button } from '@blueprintjs/core'
import { ItemSuggest } from '../../../components'

export default function ShowMembers({users, onChange, members }) {

    const [state, setState] = useState({
        deputies: members ? members : [],
        create: {
            user: {
                id: 0,
            },
            mission: ''
        }
    })

    useEffect(() => {

    })

    const editOnClick = (index) => {
        setState({
            ...state,
            deputies: state.deputies.map((u, i) => index != i ? u : { ...u, editing: !u.editing })
        })
        if (onChange) onChange(state.deputies)
    }

    const deleteOnClick = (index) => {
        state.deputies.splice(index, 1)

        setState({
            ...state,
            deputies: state.deputies
        })
        if (onChange) onChange(state.deputies)
    }

    const nameEditOnChange = (v, i) => {
        state.deputies[i] = { ...state.deputies[i], user: v }
        setState({
            ...state,
            deputies: state.deputies
        })
    }

    const missionEditOnChange = (e, i) => {
        state.deputies[i].mission = e.target.value
        setState({
            ...state,
            deputies: state.deputies
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
                                    state.deputies.map((u, i) => (
                                        u.editing ?
                                            <tr key={i}>
                                                <th scope="row">{i + 1}</th>
                                                <td><ItemSuggest onChange={v => nameEditOnChange(v, i)} selected={u.user} fill /></td>
                                                <td><InputGroup onChange={e => missionEditOnChange(e, i)} value={state.mission} /></td>
                                                <td>
                                                    <Button onClick={(e) => editOnClick(i)} intent="warning" minimal>xong</Button>
                                                    <Button onClick={(e) => deleteOnClick(i)} intent="danger" minimal>xoá</Button>
                                                </td>
                                            </tr>
                                            :
                                            <tr key={i}>
                                                <th scope="row">{i + 1}</th>
                                                <td>{u.user.title}</td>
                                                <td>{u.mission}</td>
                                                <td>
                                                    <Button onClick={(e) => editOnClick(i)} intent="warning" minimal>sửa</Button>
                                                    <Button onClick={(e) => deleteOnClick(i)} intent="danger" minimal>xoá</Button>
                                                </td>
                                            </tr>
                                    ))
                                }
                                <tr>
                                    <th scope="row">{state.deputies.length + 1}</th>
                                    <td>
                                        <ItemSuggest
                                            items={users}
                                            selected={state.create.user}
                                            onChange={v => {
                                                setState({
                                                    ...state,
                                                    create: { ...state.create, user: v }
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
                                        <Button text="thêm" intent="success" minimal fill
                                            onClick={e => {
                                                if (state.create.user.id != 0) {
                                                    state.deputies.push(state.create)
                                                    setState({
                                                        ...state,
                                                        deputies: state.deputies,
                                                        create: {
                                                            user: {
                                                                id: 0,
                                                                title: ''
                                                            }, mission: ''
                                                        }
                                                    })
                                                    if (onChange) onChange(state.deputies)
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
