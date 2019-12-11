import React from 'react';

import { H1, EditableText, H5, H3, H6, Button, Intent, MenuItem, Divider, InputGroup, Classes, Card } from "@blueprintjs/core"
import { Suggest, Select, MultiSelect } from "@blueprintjs/select"

import UnitsTree from '../../Units/UnitsTree'
import { ItemSelect, ItemMultiSelect } from '../../../components';

const INTENTS = [Intent.NONE, Intent.PRIMARY, Intent.SUCCESS, Intent.DANGER, Intent.WARNING];

class NewTasksTemplateContent extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {

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
                        <InputGroup fill large />
                    </div>
                </div>

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>Mô tả</H6>
                        <InputGroup fill />
                    </div>
                </div>


                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>Người có quyền xem mẫu này</H6>
                        <ItemMultiSelect />
                    </div>
                </div>

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>Người thực hiện</H6>
                        <ItemMultiSelect />
                    </div>
                </div>

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>Người phê guyệt</H6>
                        <ItemMultiSelect />
                    </div>
                </div>

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>Người quan sát</H6>
                        <ItemMultiSelect />
                    </div>
                </div>

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <Card elevation={0}>
                            <H5>
                                <a>Hoạt động</a>
                            </H5>
                            <div className="mb-2">
                                <H1>
                                    <EditableText
                                        alwaysRenderInput
                                        placeholder="Tên hoạt động..."
                                        selectAllOnFocus
                                        fill
                                        confirmOnEnterKey
                                    />
                                </H1>
                                <EditableText
                                    alwaysRenderInput
                                    maxLength={255}
                                    maxLines={12}
                                    minLines={3}
                                    multiline={true}
                                    placeholder="Mô tả"
                                    selectAllOnFocus
                                    confirmOnEnterKey
                                    value={this.state.detail}
                                    onChange={this.handleDetailChange}
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
                            <H5>
                                <a>Hoạt động</a>
                            </H5>
                            <div className="mb-2">
                                <H1>
                                    <EditableText
                                        alwaysRenderInput
                                        placeholder="Tên trường thông tin..."
                                        selectAllOnFocus
                                        fill
                                        confirmOnEnterKey
                                    />
                                </H1>
                                <EditableText
                                    alwaysRenderInput
                                    maxLength={255}
                                    maxLines={12}
                                    minLines={3}
                                    multiline={true}
                                    placeholder="Mô tả..."
                                    selectAllOnFocus
                                    confirmOnEnterKey
                                    value={this.state.detail}
                                    onChange={this.handleDetailChange}
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
