import React from 'react';

import { H3, H6, Button, Intent, MenuItem, Divider, InputGroup, Classes } from "@blueprintjs/core"
import { Suggest, Select, MultiSelect } from "@blueprintjs/select"

import UnitsTree from '../../Units/UnitsTree'
import { ItemSelect, ItemMultiSelect } from '../../../components';

const INTENTS = [Intent.NONE, Intent.PRIMARY, Intent.SUCCESS, Intent.DANGER, Intent.WARNING];

class NewTasksContent extends React.Component {

    constructor(props) {
        super(props)

        // this.handleOnClick = this.handleOnClick.bind(this)
    }

    componentDidMount() {
        console.log(this.props);
        
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
                        <ItemSelect />
                    </div>
                    <div className="p-2">
                        <H6>Mẫu công việc</H6>
                        <ItemSelect />
                    </div>
                    <div className="p-2">
                        <H6>Nhóm</H6>
                        <ItemSelect />
                    </div>

                </div>
                <div className="d-flex flex-row bd-highlight mb-3">

                    <div className="p-2">
                        <H6>Công việc đã chọn</H6>
                        <UnitsTree />
                    </div>
                </div>
                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <H6>Tên công việc</H6>
                        <InputGroup fill />
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

                        <Button intent="success" large>Tạo công việc</Button>
                    </div>
                </div>
            </div>
        )
    }

}

export default NewTasksContent
