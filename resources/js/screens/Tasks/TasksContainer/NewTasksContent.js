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
        users: [
            {id: 1, title: "gogo"},
            {id: 2, title: "gog"}
        ],
        tasks: [
            "Task 1",
            "Task 2"
        ],
        templates: [
            "Template 1",
            "Template 2"
        ],
        groups: [
            "Group 1",
            "Group 2"
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
        this.nameOnChange = this.nameOnChange.bind(this)
        this.implementersOnChange = this.implementersOnChange.bind(this)
        this.approversOnChange = this.approversOnChange.bind(this)
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        console.log(this.state);
    }

    handleOnClick(e) {

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
        console.log(value);
    }

    approversOnChange(value) {
        console.log(value);
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
                        <ItemSelect onItemSelect={this.handleOnClick} items={this.tasks} />
                    </div>
                    <div className="p-2">
                        <H6>Mẫu công việc</H6>
                        <ItemSelect onItemSelect={this.handleOnClick} items={this.templates} />
                    </div>
                    <div className="p-2">
                        <H6>Nhóm</H6>
                        <ItemSelect onItemSelect={this.handleOnClick} items={this.groups} />
                    </div>

                </div>
                <div className="d-flex flex-row bd-highlight mb-3">

                    <div className="p-2">
                        <H6>Công việc đã chọn</H6>
                        <TTree />
                    </div>
                </div>
                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>Tên công việc</H6>
                        <InputGroup value={this.state.request.name} onChange={this.nameOnChange} fill />
                    </div>
                </div>

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>Người thực hiện</H6>
                        <ItemMultiSelect items={this.state.users} onChange={this.implementersOnChange} />
                    </div>
                </div>

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>Người phê guyệt</H6>
                        <ItemMultiSelect items={this.state.users} onChange={this.approversOnChange} />
                    </div>
                </div>

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>Người quan sát</H6>
                        <ItemMultiSelect  />
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
