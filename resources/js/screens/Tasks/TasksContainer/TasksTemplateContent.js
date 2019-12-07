import React from 'react';

import { Label, Checkbox, Alignment, H3 } from "@blueprintjs/core"

import { ItemSelect } from '../../../components/ItemSelect';
import { ItemMultiSelect } from '../../../components/ItemMultiSelect';

class TasksTemplateContent extends React.Component {
    state = {
        alignIndicator: Alignment.LEFT,
        disabled: false,
        inline: true,
        large: false,
    };

    render() {

        return (
            <div style={{ paddingTop: '28px' }} className="container-fluid">

                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">Tên công việc</th>
                            <th scope="col">Mô tả</th>
                            <th scope="col">Hành động</th>
                            <th scope="col">Số công việc theo mẫu</th>
                            <th scope="col">Người tạo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Mẫu Công việc 1</th>
                            <td>Mẫu Công việc 1</td>
                            <td></td>
                            <td>20</td>
                            <td>Vinh</td>
                        </tr>
                        <tr>
                            <th scope="row">Mẫu Công việc 1</th>
                            <td>Mẫu Công việc 1</td>
                            <td></td>
                            <td>20</td>
                            <td>Vinh</td>
                        </tr>
                        <tr>
                            <th scope="row">Mẫu Công việc 1</th>
                            <td>Mẫu Công việc 1</td>
                            <td></td>
                            <td>20</td>
                            <td>Vinh</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TasksTemplateContent