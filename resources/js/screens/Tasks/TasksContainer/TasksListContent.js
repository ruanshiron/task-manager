import React from 'react';

import { Label, Checkbox, Alignment, H3 } from "@blueprintjs/core"
import { Redirect } from "react-router-dom"

import { ItemSelect } from '../../../components/ItemSelect';
import { ItemMultiSelect } from '../../../components/ItemMultiSelect';
import axios from 'axios';

class TasksListContent extends React.Component {
    state = {
        table: {
            labels: [
                "Tên công việc",
                "Hành động",
                "Trạng thái",
                "Tiến độ",
                "Người thực hiện",
                "Ưu tiên",
                "Bắt đầu",
                "Kết thúc",
                "Thời gian"
            ],
            data: [

            ],
            shows: [

            ]
        }
    };

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/tasks',
        })
            .then(response => {
                try {
                    this.setState({
                        table: {
                            ...this.state.table,
                            data: response.data
                        }
                    }, () => {
                        console.log(this.state.table.data);

                    })
                } catch (error) {
                    console.log(error);
                }
            })
    }

    render() {
        return (
            <div style={{ paddingTop: '28px' }} className="container-fluid">

                <div className="pb-4">
                    <H3>Vai trò của bạn</H3>
                    <Checkbox {...styles.checkbox} label="Người thực hiện" />
                    <Checkbox {...styles.checkbox} label="Người đánh giá" />
                    <Checkbox {...styles.checkbox} label="Người tạo" />
                </div>

                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            {
                                this.state.table.labels.map((u ,i ) =>
                                    <th scope="col" key={i}>{u}</th>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.table.data.map((u,i) =>
                                <tr key={i}>
                                    <th scope="row">{u.name}</th>
                                    <td></td>
                                    <td>Đang thực hiện</td>
                                    <td>20%</td>
                                    <td></td>
                                    {
                                        u.priority ?
                                            <td>{u.priority.title}</td>  :
                                            <td></td>
                                    }
                                    <td>{u.start_at}</td>
                                    <td>{u.end_at}</td>
                                    <td>{u.time}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TasksListContent

const styles = {
    checkbox: {
        alignIndicator: Alignment.LEFT,
        disabled: false,
        inline: true,
        large: false,
    }
}
