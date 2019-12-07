import React from 'react';

import { Label, Checkbox, Alignment, H3 } from "@blueprintjs/core"

import { ItemSelect } from '../../../components/ItemSelect';
import { ItemMultiSelect } from '../../../components/ItemMultiSelect';

class TasksListContent extends React.Component {
    state = {
        alignIndicator: Alignment.LEFT,
        disabled: false,
        inline: true,
        large: false,
    };

    render() {

        return (
            <div style={{ paddingTop: '28px' }} className="container-fluid">

                <div className="pb-4">
                    <H3>Vai trò của bạn</H3>
                    <Checkbox {...this.state} label="Người thực hiện" />
                    <Checkbox {...this.state} label="Người đánh giá" />
                    <Checkbox {...this.state} label="Người tạo" />
                </div>

                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">Tên công việc</th>
                            <th scope="col">Hành động</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Tiến độ</th>
                            <th scope="col">Người thực hiện</th>
                            <th scope="col">Ưu tiên</th>
                            <th scope="col">Bắt đầu</th>
                            <th scope="col">Kết thúc</th>
                            <th scope="col">Thời gian</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Công việc 1</th>
                            <td></td>
                            <td>Đang thực hiện</td>
                            <td>20%</td>
                            <td></td>
                            <td>Thấp</td>
                            <td>1/5/2019</td>
                            <td>31/5/2020</td>
                            <td>2 năm</td>
                        </tr>
                        <tr>
                            <th scope="row">_ Công việc 1</th>
                            <td></td>
                            <td>Đang thực hiện</td>
                            <td>20%</td>
                            <td></td>
                            <td>Thấp</td>
                            <td>1/5/2019</td>
                            <td>31/5/2020</td>
                            <td>2 năm</td>
                        </tr>
                        <tr>
                            <th scope="row">_ _ Công việc 1</th>
                            <td></td>
                            <td>Đang thực hiện</td>
                            <td>20%</td>
                            <td></td>
                            <td>Thấp</td>
                            <td>1/5/2019</td>
                            <td>31/5/2020</td>
                            <td>2 năm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TasksListContent