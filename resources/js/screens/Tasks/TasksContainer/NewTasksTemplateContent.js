import React from 'react';

import { H1, EditableText, H5, H3, H6, Button, Intent, MenuItem, Divider, InputGroup, Classes, Card } from "@blueprintjs/core"
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

        this.actionsOnChange = this.actionsOnChange.bind(this)
        this.informationsOnChange = this.informationsOnChange.bind(this)
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

    actionsOnChange(value) {
        this.setState({
            action_input: value
        })
    }

    informationsOnChange(value) {
        this.setState({
            information_input: value
        })
    }

    render() {

        return (
            <div style={{ paddingBottom: '50vh',paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">
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

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <Card elevation={0}>
                            <div className="mb-2">
                                <NameDescriptionEditable
                                    placeholder="Tên hành động ..."
                                    onChange={this.actionsOnChange}
                                />
                            </div>
                            <Button text="Thêm" intent="primary" className={Classes.BUTTON} />
                            <div className="mt-4">
                                <table className="table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <Card elevation={0}>
                            <div className="mb-2">
                                <NameDescriptionEditable
                                    placeholder="Tên thông tin ..."
                                    onChange={this.informationsOnChange}
                                />
                            </div>
                            <ItemSelect/> <br/> <br/>
                            <Button text="Thêm" intent="primary" className={Classes.BUTTON} />
                            <div className="mt-4">
                                <table className="table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </div>
                </div>


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
    handleDetailChange = (detail) => this.setState({ detail });


}

export default NewTasksTemplateContent
