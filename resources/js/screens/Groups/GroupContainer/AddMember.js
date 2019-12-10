import React, { Component } from 'react'
import axios from 'axios';
import { ItemSelect, ItemMultiSelect } from '../../../components';
import { H1, InputGroup, Button, Icon, Card, EditableText, TextArea   } from '@blueprintjs/core';

class AddMember extends Component {

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
                        <span style={{ margin: "15px" }} className="col-2"><strong>Chọn thành viên</strong></span>
                        <span style={{ marginTop: "10px", width: "300px" }}>
                            <InputGroup name="name"/>
                        </span>
                    </div>
                    <br></br>
                    <div className="row">
                        <span style={{ margin: '15px' }} className="col-2">
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
                            <Button type="submit" style={{ width: '80px' }} intent="primary">Lưu</Button>
                        </span>
                    </div>
                </form>
            </div>
        )
    }
}


export default AddMember
