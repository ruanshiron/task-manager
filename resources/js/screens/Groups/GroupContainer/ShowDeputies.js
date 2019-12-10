import React from 'react';
import axios from 'axios';
import { H3, H6, Button, Intent, MenuItem, Divider, InputGroup, Classes } from "@blueprintjs/core"
import AddDeputy from './AddDeputy';

class ShowDeputies extends React.Component {
    constructor() {
        super();
        this.state = {
            deputyList: []
        }
    }

    componentDidMount() {
        // Get pho nhom
        axios.get('/api/deputies')
            .then(reponse => {
                this.setState({ deputyList: reponse.data });
            })
    }

    handleSubmitDeputy = data => {
        this.setState({
            deputyList: [...this.state.deputyList, data]
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
            <div>
                <AddDeputy onSubmit={this.handleSubmitDeputy} />
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
                            this.state.deputyList.map((record, index) => {
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

export default ShowDeputies
