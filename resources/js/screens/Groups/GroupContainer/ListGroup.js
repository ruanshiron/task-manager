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
            })
    }

    // onDelete(deputy_id) {
    //     axios.delete('/api/deputies/'+deputy_id)
    //     .then(
    //         reponse=>{
    //             for (var i = 0; i < deputyList.length; i++) {
    //                 if (deputyList[i].id == deputy_id) {
    //                     deputyList.splice(i, 1);
    //                     this.setState({deputyList: deputyList});
    //                 }
    //             }
    //         }
    //     )
    // }

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
                            <th scope="col">Mô tả</th>
                            <th scope="col">Trưởng nhóm</th>
                            <th scope="col">Số thành viên</th>
                            <th scope="col">Số công việc thực hiện</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.groupList.map((record, id) => {
                                return (
                                    <tr key={id}>
                                        <td>{record.name}</td>
                                        <td>{record.description}</td>
                                        <td>{record.captain}</td>
                                        <td>4</td>
                                        <td>20</td>
                                        <td><a href="edit"> <Button icon="edit" intent="primary"></Button></a></td>
                                        <td><a href="#"><Button icon="trash" intent="danger" type="submit"></Button></a></td>
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