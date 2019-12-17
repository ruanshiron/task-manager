import React, { Component } from 'react'
import axios from 'axios';
import { ItemSelect, ItemMultiSelect } from '../../../components';
import { H1, InputGroup, Button, Icon, Card, EditableText, TextArea   } from '@blueprintjs/core';

class AddMember extends Component {
    state = {
        users: null,
    }

    componentDidMount() {
        // Fetch users
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/users',
        })
            .then(response => {
                try {
                    this.setState({
                        users: response.data.map(u => ({ ...u, title: u.name }))
                    })
                } catch (error) {
                    console.log(error);
                }
            });

        // Fetch groups
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/groups',
        })
            .then(response => {
                try {
                    this.setState({
                        groups: response.data.map(u => ({ ...u, title: u.name }))
                    })
                } catch (error) {
                    console.log(error);
                }
            })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let target = e.target
        let formData = new FormData(document.querySelector('#form-member'))
        let name = formData.get('name')
        let mission = formData.get('mission')

        axios.post('/api/members', {
            name: name,
            mission: mission
        })
            .then(response => {
                if (response.data.success) {
                    this.props.onSubmit({ name: name, mission: mission })
                }
                target.reset();
            })
            .catch(error => {
                console.log(error);
            });
    }


    render() {
        return (
            <div>
                <form id="form-member" onSubmit={this.handleSubmit}>
                <div className="row" >
                        <span style={{ margin: "15px" }} className="col-3"><strong>Chọn thành viên</strong></span>
                        <span style={{ marginTop: "10px", width: "300px" }}>
                        {this.state.users && <ItemMultiSelect items={this.state.users} onChange={this.getSelectedItem} />}
                        </span>
                    </div>
                    <br></br>
                    <div className="row">
                        <span style={{ margin: '15px' }} className="col-3">
                            <strong>Nhiệm vụ</strong>
                        </span>
                        <span>
                            <TextArea 
                                style={{ 
                                    minWidth: "300px", 
                                    padding: "15px", 
                                    paddingTop: "10px" 
                                }}
                                className="form-control" rows="5" id="misson" name="mission" 
                                />
                        </span>
                        <span style={{ margin: '50px 20px' }}>
                            <Button type="submit" style={{ width: '80px' }} intent="primary">Thêm</Button>
                        </span>
                    </div>
                </form>
            </div>
        )
    }
}


export default AddMember
