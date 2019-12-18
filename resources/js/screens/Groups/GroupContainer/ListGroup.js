import React from 'react';
import { Label, Checkbox, Alignment, H3, Button } from "@blueprintjs/core"
import { Link } from 'react-router-dom'

class ListGroup extends React.Component {
    constructor() {
        super();
        this.state = {
            groupList: []
        }
    }

    componentDidMount() {
        // Get nhom
        axios.get('/api/groups')
            .then(reponse => {
                this.setState({ groupList: reponse.data });
                console.log(reponse.data);

            })
    }

    onDelete(group_id) {
        axios.delete('/api/groups/delete/' + group_id)
            .then(reponse => {
                var groupList = this.state.groupList;

                for (var i = 0; i < groupList.length; i++) {
                    if (groupList[i].id == group_id) {
                        groupList.splice(i, 1);
                        this.setState({ groupList: groupList });
                    }
                }
            })
    }

    state = {
        alignIndicator: Alignment.LEFT,
        disabled: false,
        inline: true,
        large: false,
    };

    render() {
        return (
            <div style={{ paddingTop: '28px' }} className="container-fluid">

                <table className="table" >
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Tên nhóm</th>
                            <th scope="col" style={{ width: '40%' }}>Mô tả</th>
                            <th scope="col">Trưởng nhóm</th>
                            <th scope="col" style={{ width: '8%' }}>Số thành viên</th>
                            <th scope="col" style={{ width: '8%' }}>Số công việc thực hiện</th>
                            <th scope="col" style={{ width: '8%' }}>Sửa</th>
                            <th scope="col" style={{ width: '8%' }}>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.groupList.map((record, id) => {
                                return (
                                    <tr key={id}>
                                        <td style={{ padding: '30px 0px' }}>{record.name}</td>
                                        <td>{record.description}</td>
                                        <td>{record.captain.name}</td>
                                        <td style={{ textAlign: 'center' }}>4</td>
                                        <td style={{ textAlign: 'center' }}>20</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <Link to={"/groups/" + record.id}><Button icon='edit' intent='warning' minimal/></Link>
                                        </td>
                                        <td style={{ textAlign: 'center' }}><Button icon='delete' intent='danger' minimal onClick={this.onDelete.bind(this, record.id)} /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListGroup
