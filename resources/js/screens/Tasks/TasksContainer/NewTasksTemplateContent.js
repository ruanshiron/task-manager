import React, { useState, useEffect } from 'react';

import { H1, EditableText, H5, H3, H6, Button, Intent, MenuItem, Divider, InputGroup, Classes, Card, Checkbox, TextArea } from "@blueprintjs/core"
import { Suggest, Select, MultiSelect } from "@blueprintjs/select"

import UnitsTree from '../../Units/UnitsTree'
import { ItemSelect, ItemMultiSelect, NameDescriptionEditable } from '../../../components';
import { timingSafeEqual } from 'crypto';

const INTENTS = [Intent.NONE, Intent.PRIMARY, Intent.SUCCESS, Intent.DANGER, Intent.WARNING];

class NewTasksTemplateContent extends React.Component {

    constructor(props) {
        super(props)

        this.nameOnChange = this.nameOnChange.bind(this)
        this.descriptionOnChange = this.descriptionOnChange.bind(this)
        this.viewersOnChange = this.viewersOnChange.bind(this)
        this.observersOnChange = this.observersOnChange.bind(this)
        this.approversOnChange = this.approversOnChange.bind(this)
        this.implementersOnChange = this.implementersOnChange.bind(this)
    }

    state = {
        users: null,
        action_input: {
            name: "",
            description: ""
        },
        information_input: {
            name: "",
            description: ""
        },
        actions_table: {
            labels: [

            ]
        },
        informations_table: {

        },
        request: {
            name: "",
            description: "",
            viewers_id: [],
            implementers_id: [],
            observers_id: [],
            approvers_id: [],
            actions: [],
            informations: [],
            kpi_fun: ""
        }
    }

    componentDidMount() {
        // Fetch users
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/users',
        })
            .then(response => {
                try {
                    this.setState({
                        users: response.data.map(u => ({ ...u, title: u.name }))
                    })
                } catch (error) {
                    console.log(error);
                }
            });
    }

    nameOnChange(e) {
        this.setState({
            request: {
                ...this.state.request,
                name: e.target.value
            }
        })
    }

    descriptionOnChange(e) {
        this.setState({
            request: {
                ...this.state.request,
                description: e.target.value
            }
        })
    }

    viewersOnChange(value) {
        this.setState({
            request: {
                ...this.state.request,
                viewers_id: value.map(u => u.id)
            }
        })
    }

    implementersOnChange(value) {
        this.setState({
            request: {
                ...this.state.request,
                implementers_id: value.map(u => u.id)
            }
        })
    }

    approversOnChange(value) {
        this.setState({
            request: {
                ...this.state.request,
                approvers_id: value.map(u => u.id)
            }
        })
    }

    observersOnChange(value) {
        this.setState({
            request: {
                ...this.state.request,
                observers_id: value.map(u => u.id)
            }
        })
    }

    render() {

        return (
            <div style={{ paddingBottom: '50vh', paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">
                <div className="p-2">
                    <H3>Tạo mẫu mới</H3>
                    <p>Một công việc bắt buộc phải theo một mẫu nên, hãy tạo mẫu trước khi tao công việc</p>
                </div>
                <Divider />

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>Tên mẫu</H6>
                        <InputGroup fill value={this.state.request.name} onChange={this.nameOnChange} />
                    </div>
                </div>

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>Mô tả</H6>
                        <InputGroup fill value={this.state.request.description} onChange={this.descriptionOnChange} />
                    </div>
                </div>


                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>Người có quyền xem mẫu này</H6>
                        {
                            this.state.users &&
                            <ItemMultiSelect items={this.state.users} onChange={this.viewersOnChange} />
                        }
                    </div>
                </div>

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>Người thực hiện</H6>
                        {
                            this.state.users &&
                            <ItemMultiSelect items={this.state.users} onChange={this.implementersOnChange} />
                        }
                    </div>
                </div>

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>Người phê guyệt</H6>
                        {
                            this.state.users &&
                            <ItemMultiSelect items={this.state.users} onChange={this.approversOnChange} />
                        }
                    </div>
                </div>

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>Người quan sát</H6>
                        {
                            this.state.users &&
                            <ItemMultiSelect items={this.state.users} onChange={this.observersOnChange} />
                        }
                    </div>
                </div>

                <ActionsTable />

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>KPI mục tiêu</H6>
                        <InputGroup fill large />
                    </div>
                </div>
                <Divider />
                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="p-2">

                        <Button intent="success" large>Tạo công việc</Button>
                    </div>
                </div>
            </div>
        )
    }


}

export default NewTasksTemplateContent

function ActionsTable({ onChange }) {
    const [state, setState] = useState({
        data: [
            { name: "sample 1", description: "sample 1", must_be: false, editing: false },
            { name: "sample 2", description: "sample 2", must_be: false, editing: false },
            { name: "sample 3", description: "sample 3", must_be: false, editing: false }
        ],
        create: { name: "", description: "", must_be: false, editing: false }
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

    useEffect(() => {
        console.log(state);


    })

    return (
        <div className="flex-fill bd-highlight">
            <div className="p-2">
                <H6>Hành động</H6>
                <Card elevation={0}>
                    <div className="">
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Mô Tả</th>
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
                                                if (state.create.name.trim() != "")
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
