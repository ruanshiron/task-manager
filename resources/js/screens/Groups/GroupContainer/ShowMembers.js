import React from 'react';
import axios from 'axios';
import { H3, H6, Button, Intent, MenuItem, Divider, InputGroup, Classes } from "@blueprintjs/core"
import AddMember from './AddMember';

class ShowMembers extends React.Component {
    constructor() {
        super();
        this.state = {
            memberList: []
        }
    }

    componentDidMount() {
        // Get nhan vien
        axios.get('/api/members')
            .then(reponse => {
                this.setState({ memberList: reponse.data });
            })
    }

    handleSubmitMember = data => {
        this.setState({
            memberList: [...this.state.memberList, data]
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

    render() {
        return (
            <div style={{width: "100%"}}>
                <AddMember onSubmit={this.handleSubmitMember} />
                <table className="table" >
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Họ và tên</th>
                            <th scope="col">Nhiệm vụ</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.memberList.map((record, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{record.name}</td>
                                        <td>{record.mission}</td>
                                        <td><Button icon="edit" intent="primary"></Button></td>
                                        <td><Button icon="trash" intent="danger"></Button></td>
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

export default ShowMembers
