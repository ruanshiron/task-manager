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

    render() {
        return (
            <div style={{width: "100%"}}>
                <AddMember onSubmit={this.handleSubmitMember} />
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
                            <td style={{ textAlign: 'center' }}><a href="" data-toggle="modal" data-target="#exampleModal1" data-whatever="@mdo">Chỉnh sửa</a></td>
                            <td style={{ textAlign: 'center' }}><a href="#" className="text-danger">Xóa</a></td>
                        </tr>
                        <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                <label for="recipient-name" class="col-form-label"><strong>Thành viên</strong></label>
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
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ShowMembers
