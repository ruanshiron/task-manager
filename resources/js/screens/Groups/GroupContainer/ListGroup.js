import React from 'react';

import { Label, Checkbox, Alignment, H3, Button } from "@blueprintjs/core"

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

        // axios.get('/api/users')
        //     .then(reponse => {
        //         this.setState({ userList: reponse.data });
        //     })
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

                <table className="table1" >
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Tên nhóm</th>
                            <th scope="col" style={{ width: '40%' }}>Mô tả</th>
                            <th scope="col">Trưởng nhóm</th>
                            <th scope="col" style={{ width: '8%' }}>Số thành viên</th>
                            <th scope="col" style={{ width: '8%' }}>Số công việc thực hiện</th>
                            <th scope="col" style={{ width: '8%' }}>Chỉnh sửa</th>
                            <th scope="col" style={{ width: '8%' }}>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.groupList.map((record, id) => {
                                return (
                                    <tr key={id}>
                                        <td>{record.name}</td>
                                        <td>{record.description}</td>
                                        <td>{record.captain.name}</td>
                                        <td style={{ textAlign: 'center' }}>4</td>
                                        <td style={{ textAlign: 'center' }}>20</td>
                                        <td style={{ textAlign: 'center' }}><a href="edit">Chỉnh sửa</a></td>
                                        <td style={{ textAlign: 'center' }}><a href="#" className="text-danger">Xóa</a></td>
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
