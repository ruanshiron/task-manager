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

    onDelete(template_id) {
        axios.delete('/api/templates/delete/' + template_id)
            .then(reponse => {
                var templates = this.state.templates;

                for (var i = 0; i < templates.length; i++) {
                    if (templates[i].id == template_id) {
                        templates.splice(i, 1);
                        this.setState({ templates: templates });
                    }
                }
            })
    }

    render() {

        return (
            <div style={{ paddingTop: '28px' }} className="container-fluid">

                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" style={{ width: '25%' }}>Tên công việc</th>
                            <th scope="col" style={{ width: '30%' }}>Mô tả</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Số công việc theo mẫu</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Người tạo</th>
                            <th style={{ textAlign: 'center' }}>Chỉnh sửa</th>
                            <th style={{ textAlign: 'center' }}>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.templates.map((u, i) => (
                                <tr key={i}>
                                    <th scope="row">{u.name}</th>
                                    <td>{u.description}</td>
                                    <td style={{ textAlign: 'center' }}>{u.tasks.length}</td>
                                    <td style={{ textAlign: 'center' }}>{u.author.name}</td>
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
                                            onClick={this.onDelete.bind(this, u.id)}
                                        />
                                    </td>
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
