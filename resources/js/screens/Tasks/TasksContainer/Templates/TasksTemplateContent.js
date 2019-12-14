import React from 'react';

import { Label, Checkbox, Alignment, H3, Button } from "@blueprintjs/core"

import { ItemSelect } from '../../../../components/ItemSelect';
import { ItemMultiSelect } from '../../../../components/ItemMultiSelect';

class TasksTemplateContent extends React.Component {
    state = {
        templates: []
    };

    componentDidMount() {
        axios('http://localhost:8000/api/templates')
            .then(response => {
                this.setState({
                    ...this.state,
                    templates: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {

        return (
            <div style={{ paddingTop: '28px' }} className="container-fluid">

                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Tên công việc</th>
                            <th scope="col">Mô tả</th>
                            <th></th>
                            <th></th>
                            <th scope="col">Số công việc theo mẫu</th>
                            <th scope="col">Người tạo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.templates.map((u, i) => (
                                <tr key={i}>
                                    <th scope="row">{u.name}</th>
                                    <td>{u.description}</td>
                                    <td>
                                        <Button
                                            minimal
                                            intent='warning'
                                            icon='edit'
                                        />
                                    </td>
                                    <td>
                                        <Button
                                            minimal
                                            intent='danger'
                                            icon='delete'
                                        />
                                    </td>
                                    <td>{u.tasks.length}</td>
                                    <td>{u.author.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TasksTemplateContent
