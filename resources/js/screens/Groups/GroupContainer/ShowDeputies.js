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
            <div style={{ width: "100%" }}>
                <AddDeputy onSubmit={this.handleSubmitDeputy} />
                <table className="table" style={{ width: '100%' }} >
                    <thead className="thead-light" >
                        <tr>
                            <th scope="col">Họ và tên</th>
                            <th scope="col">Nhiệm vụ</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tran Van Hoang</td>
                            <td>Doi truong doi mua hoang gia Viet Nhat</td>
                            <td style={{ textAlign: 'center' }}><a href="" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Chỉnh sửa</a></td>
                            <td style={{ textAlign: 'center' }}><a href="#" className="text-danger">Xóa</a></td>
                        </tr>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Chỉnh sửa</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="form-group">
                                                <label for="recipient-name" class="col-form-label"><strong>Phó nhóm</strong></label>
                                                <input type="text" class="form-control" id="recipient-name" value="Tran Van Hoang"/>
                                            </div>
                                                <div class="form-group">
                                                    <label for="message-text" class="col-form-label"><strong>Nhiệm vụ</strong></label>
                                                    <textarea class="form-control" id="message-text"></textarea>
                                                </div>
                                        </form>
                                    </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                            <button type="button" class="btn btn-primary">Lưu</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* {
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
                        } */}
                    </tbody>
                </table>
            </div>
                )
            }
        }
        
        export default ShowDeputies
