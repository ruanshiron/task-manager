import React, { useEffect, useState } from 'react'
import { Button, InputGroup, H6, Card } from '@blueprintjs/core'
import { ItemSelect } from '../../../components'

export function InformationsTable({ onChange, data }) {
    const [state, setState] = useState({
        filetypes: null,
        data: data ? data : [],
        create: { name: "", description: "", filetype: { id: 0, title: "null" }, must_be: false, editing: false }
    })

    function mustBeOnChange(index) {
        setState({
            ...state,
            data: state.data.map((u, i) => i != index ? u : { ...u, must_be: !u.must_be })
        })

    }

    function deleteOnChange(i) {
        state.data.splice(i, 1)

        setState({
            ...state,
            data: state.data
        })
    }

    function editOnChange(index) {
        setState({
            ...state,
            data: state.data.map((u, i) => i != index ? u : { ...u, editing: !u.editing })
        })
    }

    function nameEditOnChange(event, index) {
        setState({
            ...state,
            data: state.data.map((u, i) => i != index ? u : { ...u, name: event.target.value })
        })
    }

    function descriptionEditOnChange(event, index) {
        setState({
            ...state,
            data: state.data.map((u, i) => i != index ? u : { ...u, description: event.target.value })
        })
    }

    function filetypeEditOnChange(value, index) {
        setState({
            ...state,
            data: state.data.map((u, i) => i != index ? u : { ...u, filetype: value })
        })
    }

    useEffect(() => {
        if (onChange) onChange(state.data)
    })

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/filetypes',
        })
            .then(response => {
                setState({
                    ...state,
                    filetypes: response.data.map(u => ({ ...u, title: u.name }))
                })
            });

    }, [])

    return (
        <div className="flex-fill bd-highlight">
            <div className="p-2">
                <H6>Thông tin</H6>
                <Card elevation={0}>
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Mô Tả</th>
                                    <th scope="col">Kiểu dữ liệu</th>
                                    <th style={{ minWidth: '88px' }} scope="col">Bắt buộc</th>
                                    <th style={{ minWidth: '120px' }} scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.data.map((u, i) => (
                                        !u.editing ?
                                            <tr key={i}>
                                                <th scope="row">
                                                    {i + 1}
                                                </th>
                                                <td>
                                                    {u.name}
                                                </td>
                                                <td>
                                                    {u.description}
                                                </td>
                                                <td>
                                                    {u.filetype.title}
                                                </td>

                                                <td style={{ textAlign: 'center', verticalAlign: 'center' }}>
                                                    <Button onClick={(e) => mustBeOnChange(i)} minimal>{u.must_be ? "có" : "không"}</Button>
                                                </td>
                                                <td>
                                                    <Button onClick={(e) => editOnChange(i)} intent="warning" minimal>{u.editing ? "xong" : "sửa"}</Button>
                                                    <Button onClick={(e) => deleteOnChange(i)} intent="danger" minimal>xoá</Button>
                                                </td>
                                            </tr>
                                            :
                                            <tr key={i}>
                                                <th scope="row">
                                                    {i + 1}
                                                </th>
                                                <td>
                                                    <InputGroup value={u.name} onChange={(e) => nameEditOnChange(e, i)} />
                                                </td>
                                                <td>
                                                    <InputGroup value={u.description} onChange={(e) => descriptionEditOnChange(e, i)} />
                                                </td>
                                                <td>
                                                    {state.filetypes && <ItemSelect selected={u.filetype} items={state.filetypes} onChange={(e) => filetypeEditOnChange(e, i)} />}
                                                </td>
                                                <td style={{ textAlign: 'center', verticalAlign: 'center' }}>
                                                    <Button onClick={(e) => mustBeOnChange(i)} minimal>{u.must_be ? "có" : "không"}</Button>
                                                </td>
                                                <td>
                                                    <Button onClick={(e) => editOnChange(i)} intent="warning" minimal>{u.editing ? "xong" : "sửa"}</Button>
                                                    <Button onClick={(e) => deleteOnChange(i)} intent="danger" minimal>xoá</Button>
                                                </td>
                                            </tr>
                                    ))
                                }


                                {/* Thêm hành động */}
                                <tr>
                                    <th scope="row">{state.data.length + 1}</th>
                                    <td>
                                        <InputGroup
                                            value={state.create.name}
                                            onChange={e => {
                                                setState({
                                                    ...state,
                                                    create: {
                                                        ...state.create,
                                                        name: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <InputGroup
                                            value={state.create.description}
                                            onChange={e => {
                                                setState({
                                                    ...state,
                                                    create: {
                                                        ...state.create,
                                                        description: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </td>
                                    <td>
                                        {
                                            state.filetypes &&
                                            <ItemSelect
                                                items={state.filetypes}
                                                onChange={v => {
                                                    state.create.filetype = v
                                                }}
                                            />
                                        }
                                    </td>
                                    <td style={{ textAlign: 'center' }}>
                                        <Button
                                            onClick={(e) => {
                                                setState({
                                                    ...state,
                                                    create: { ...state.create, must_be: !state.create.must_be }
                                                })
                                            }}
                                            minimal
                                        >{
                                                state.create.must_be ? "có" : "không"}
                                        </Button>
                                    </td>
                                    <td>
                                        <Button intent="success" minimal
                                            onClick={e => {
                                                if (state.create.name.trim() != "" && state.create.filetype.id != 0 && state.create.description.trim() != "")
                                                    setState({
                                                        ...state,
                                                        data: [...state.data, state.create],
                                                        create: { name: "", description: "", must_be: false, editing: false }
                                                    })
                                            }}
                                        >thêm</Button>
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
