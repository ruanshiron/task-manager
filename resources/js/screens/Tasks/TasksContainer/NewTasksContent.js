import React from 'react';

import { H3, H6, Button, Intent, MenuItem, Divider, InputGroup, Classes } from "@blueprintjs/core"
import { Suggest, Select, MultiSelect } from "@blueprintjs/select"

import UnitsTree from '../../Units/UnitsTree'
import { ItemSelect, ItemMultiSelect } from '../../../components';
import { TTree } from '../../../components/TTree';
import axios from 'axios';

const INTENTS = [Intent.NONE, Intent.PRIMARY, Intent.SUCCESS, Intent.DANGER, Intent.WARNING];

class NewTasksContent extends React.Component {

    state = {
        users: null,
        tasks: null,
        templates: null,
        groups: [
            {id: 1, title: "Group 1"},
            {id: 2, title: "Group 2"},
        ],
        request: {
            parent_id: null,
            tempate_id: null,
            group_id: null,
            name: "",
            implementers_id: [ ],
            observers_id: [ ],
            approvers_id: [ ],
            priority_id: null,
            kpi_id: null
        }
    }

    constructor(props) {
        super(props)

        this.handleOnClick = this.handleOnClick.bind(this)

        this.taskOnSelect = this.taskOnSelect.bind(this)
        this.templateOnSelect = this.templateOnSelect.bind(this)
        this.groupOnSelect = this.groupOnSelect.bind(this)

        this.nameOnChange = this.nameOnChange.bind(this)
        this.implementersOnChange = this.implementersOnChange.bind(this)
        this.approversOnChange = this.approversOnChange.bind(this)
        this.observersOnChange = this.observersOnChange.bind(this)
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
                    users: response.data.map(u => ({...u ,title: u.name}))
                })
            } catch (error) {
                console.log(error);
            }
        });

        // Fetch tasks
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/tasks',
        })
        .then(response => {
            try {
                this.setState({
                    tasks: response.data.map(u => ({...u, title: u.name}))
                })
            } catch (error) {
                console.log(error);
            }
        })
    }

    componentDidUpdate() {

    }

    handleOnClick(e) {

    }

    taskOnSelect(value) {
        this.setState({
            request: {
                ...this.state.request,
                parent_id: value.id
            }
        })
    }

    templateOnSelect(value) {
        this.setState({
            request: {
                ...this.state.request,
                tempate_id: value.id
            }
        })
    }

    groupOnSelect(value) {
        this.setState({
            request: {
                ...this.state.request,
                group_id: value.id
            }
        })
    }

    nameOnChange(e) {
        this.setState({
            request: {
                ...this.state.request,
                name: e.target.value
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
                    <H3>Tạo công việc mới</H3>
                    <p>Hãy chọn mẫu công việc hoặc tạo một mẫu mới, và hoàn thành các mục dưới đây</p>
                </div>
                <Divider />

                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="p-2">
                        <H6>Công việc gốc</H6>
                            { this.state.tasks && <ItemSelect onItemSelect={this.taskOnSelect} items={this.state.tasks} /> }
                    </div>
                    <div className="p-2">
                        <H6>Mẫu công việc</H6>
                            { this.state.templates && <ItemSelect onItemSelect={this.templateOnSelect} items={this.state.templates} /> }
                    </div>
                    <div className="p-2">
                        <H6>Nhóm</H6>
                        <ItemSelect onItemSelect={this.groupOnSelect} items={this.state.groups} />
                    </div>

                </div>
                {/* <div className="d-flex flex-row bd-highlight mb-3">

                    <div className="p-2">
                        <H6>Công việc đã chọn</H6>
                        <TTree />
                    </div>
                </div> */}
                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>Tên công việc</H6>
                        <InputGroup value={this.state.request.name} onChange={this.nameOnChange} fill />
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
                        {this.state.users && <ItemMultiSelect items={this.state.users} onChange={this.approversOnChange} />}
                    </div>
                </div>

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>Người quan sát</H6>
                        {this.state.users && <ItemMultiSelect items={this.state.users} onChange={this.observersOnChange} />}
                    </div>
                </div>

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>KPI mục tiêu</H6>
                        <ItemMultiSelect />
                    </div>
                </div>


                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="p-2">
                        <H6>Mức độ ưu tiên</H6>
                        <ItemSelect />
                    </div>


                </div>

                <Divider />
                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="p-2">

                        <Button intent="success" onClick={this.handleOnClick} large>Tạo công việc</Button>
                    </div>
                </div>
            </div>
        )
    }

}

export default NewTasksContent
