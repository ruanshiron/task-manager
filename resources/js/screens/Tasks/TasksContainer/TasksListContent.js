import React from 'react';

import { Label, Checkbox, Alignment, H3, Button } from "@blueprintjs/core"
import { Redirect } from "react-router-dom"

import { ItemSelect } from '../../../components/ItemSelect';
import { ItemMultiSelect } from '../../../components/ItemMultiSelect';
import axios from 'axios';

function renderTasksAndChildren({tasks, gen}) {

    return (

        tasks.map((u, i) =>
            <React.Fragment>
                <tr key={i}>
                    <th scope="row">{'* '.repeat(gen) + u.name}</th>
                    <td>Đang thực hiện</td>
                    <td style={{ textAlign: 'center' }}>20%</td>
                    <td style={{ textAlign: 'center' }}>5</td>
                    {
                        u.priority ?
                            <td>{u.priority.title}</td> :
                            <td></td>
                    }
                    <td style={{ textAlign: 'center' }}>{u.start_at}</td>
                    <td style={{ textAlign: 'center' }}>{u.end_at}</td>
                    <td style={{ textAlign: 'center' }}>
                        <Button
                            minimal
                            intent='warning'
                            icon='edit'
                        />
                    </td>
                    <td style={{ textAlign: 'center' }}>
                        <Button
                            minimal
                            intent='danger'
                            icon='delete'
                            // onClick={this.onDelete.bind(this, u.id)}
                        />
                    </td>
                </tr>
                {
                    renderTasksAndChildren({tasks: u.children, gen: gen + 1})
                }
            </React.Fragment>
        )
    )
}

class TasksListContent extends React.Component {
    state = {
        tasks: []
    };

    componentDidMount() {
        axios('http://localhost:8000/api/tasks')
            .then(response => {
                console.log(response.data);

                this.setState({
                    ...this.state,
                    tasks: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    onDelete(task_id) {
        axios.delete('/api/tasks/delete/' + task_id)
            .then(reponse => {
                var tasks = this.state.tasks;

                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i].id == task_id) {
                        tasks.splice(i, 1);
                        this.setState({ tasks: tasks });
                    }
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
                            <th scope="col" style={{ width: '25%' }}>Tên công việc</th>
                            <th scope="col" style={{ width: '10%' }}>Trạng thái</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Tiến độ</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Số người thực hiện</th>
                            <th style={{ textAlign: 'center' }}>Ưu tiên</th>
                            <th style={{ textAlign: 'center' }}>Bắt đầu</th>
                            <th style={{ textAlign: 'center' }}>Kết thúc</th>
                            <th style={{ textAlign: 'center' }}>Chỉnh sửa</th>
                            <th style={{ textAlign: 'center' }}>Kết thúc</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           this.state.tasks && renderTasksAndChildren({tasks: this.state.tasks, gen: 0})
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
