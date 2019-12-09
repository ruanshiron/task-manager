import React from 'react';

import { Label, Checkbox, Alignment, H3, Button} from "@blueprintjs/core"
import { Redirect } from "react-router-dom"

import { ItemSelect } from '../../../components/ItemSelect';
import { ItemMultiSelect } from '../../../components/ItemMultiSelect';

class ListGroup extends React.Component {

    state = {
        alignIndicator: Alignment.LEFT,
        disabled: false,
        inline: true,
        large: false,
    };

    componentDidUpdate() {
        console.log(this.props);
    }

    render() {
        return (
            <div style={{ paddingTop: '28px' }} className="container-fluid">

                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Tên nhóm</th>
                            <th scope="col">Mô tả</th>
                            <th scope="col">Hành động</th>
                            <th scope="col">Số con người thực hiện</th>
                            <th scope="col">Trưởng nhóm</th>
                            <th scope="col">Số thành viên</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Phòng hành chính</th>
                            <td>Nhóm 1</td>
                            <td>
                                <Button icon="edit" intent="primary"></Button>
                                <Button icon="trash" intent="danger"></Button>
                            </td>
                            <td>20</td>
                            <td>Nguyễn Thế Vinh</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <th scope="row">Phòng hành chính</th>
                            <td>Nhóm 1</td>
                            <td>
                                <Button icon="edit" intent="primary"></Button>
                                <Button icon="trash" intent="danger"></Button>
                            </td>
                            <td>20</td>
                            <td>Nguyễn Thế Vinh</td>
                            <td>4</td>
                        </tr><tr>
                            <th scope="row">Phòng hành chính</th>
                            <td>Nhóm 1</td>
                            <td>
                                <Button icon="edit" intent="primary"></Button>
                                <Button icon="trash" intent="danger"></Button>
                            </td>
                            <td>20</td>
                            <td>Nguyễn Thế Vinh</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListGroup