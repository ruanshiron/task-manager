import React, { useState, useEffect } from 'react';

import { H1, EditableText, H5, H3, H6, Button, Intent, MenuItem, Divider, InputGroup, Classes, Card, Checkbox, TextArea } from "@blueprintjs/core"
import { Suggest, Select, MultiSelect } from "@blueprintjs/select"

import UnitsTree from '../../../Units/UnitsTree'
import { ItemSelect, ItemMultiSelect, NameDescriptionEditable } from '../../../../components';
import { timingSafeEqual } from 'crypto';
import { ActionsTable } from '../../components';
import { InformationsTable } from '../../components/InformationsTable';

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

        this.actionsOnChange = this.actionsOnChange.bind(this)
        this.informationsOnChange = this.informationsOnChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
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

    actionsOnChange(data) {
        this.state.request.actions = data
    }

    informationsOnChange(data) {
        this.state.request.informations = data
    }

    onSubmit(event) {
        this.state.request.informations = this.state.request.informations.map((u, i) => ({ ...u, filetype_id: u.filetype.id, order: i + 1 }))
        this.state.request.actions = this.state.request.actions.map((u, i) => ({ ...u, order: i + 1 }))

        console.log(this.state.request);

        axios({
            method: 'post',
            url: 'http://localhost:8000/api/templates',
            data: this.state.request
        })
            .then(response => {
                console.log(response);

                this.props.history.push(`/tasks/template`)
            })
            .catch(error => {
                console.log(error);
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

                <ActionsTable onChange={this.actionsOnChange} />

                <InformationsTable onChange={this.informationsOnChange} />

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>KPI mục tiêu</H6>
                        <InputGroup
                            fill
                            large
                            onChange={(e) => {
                                this.setState({
                                    request: {
                                        ...this.state.request,
                                        kpi_fun: e.target.value
                                    }
                                })
                            }}
                        />
                    </div>
                </div>
                <Divider />
                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="p-2">
                        <Button
                            onClick={this.onSubmit}
                            intent="success" large
                        >
                            Tạo công việc
                        </Button>
                    </div>
                </div>
            </div>
        )
    }


}

export default NewTasksTemplateContent

