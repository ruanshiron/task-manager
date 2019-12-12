import React, { Component } from 'react'
import axios from 'axios';
import { H1, InputGroup, Button, Icon, Card, EditableText, TextArea } from '@blueprintjs/core';
import { ItemSelect, ItemMultiSelect } from '../../../components';


class AddGroup extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        let target = e.target
        let formData = new FormData(document.querySelector('#form-group'))
        let name = formData.get('name')
        let description = formData.get('description')
        let captain = formData.get('captain')

        axios.post('/api/groups', {
            name: name,
            captain: captain,
            description: description
        })
            .then(response => {
                if (response.data.success) {
                    this.props.onSubmit({ name: name, captain: captain, description: description })
                }
                target.reset();
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        //Get nhom
        axios.get('/api/groups')
            .then(reponse => {
                this.setState({ groupList: reponse.data });
            })
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
    }


    render() {
        return (
            <div>
                {/* <form id="form-group" onSubmit={this.handleSubmit}>
                    <div className="unit-name">
                        <label ><strong><font size="3" >Tên nhóm</font></strong></label><br></br>
                        <InputGroup name="name" leftIcon="layers"
                            placeholder="Tên nhóm..."
                            large
                            className=".modifier w-50"
                        />
                    </div>
                    <br></br>
                    <div className="Desciption">
                        <label ><strong><font size="3" >Mô tả</font></strong></label><br></br>
                        <TextArea className="form-control" rows="5" id="describe-unit" name="description" />
                    </div>
                    <br></br>
                    <div className="unit-leader">
                        <label ><strong><font size="3" >Trưởng nhóm</font></strong></label><br></br>
                        <div style={{ width: "500px" }}><ItemMultiSelect name="captain"/></div>
                    </div>
                    <button className="mt-5">Submit</button>
                </form> */}
                <form id="form-group" onSubmit={this.handleSubmit}>
                    <div className="unit-name">
                        <label ><strong><font size="3" >Tên nhóm</font></strong></label>
                        <span><strong className="text-danger"> *</strong></span>
                        <InputGroup name="name" leftIcon="layers"
                            placeholder="Tên nhóm..."
                            large
                            className=".modifier w-50"
                        
                        />
                    </div>
              
                    <div className="Desciption mt-4">
                        <label ><strong><font size="3" >Mô tả</font></strong></label>
                        <TextArea className="form-control" rows="5" id="describe-unit" name="description"  />
                    </div>
                    
                    <div className="unit-leader mt-4">
                        <label ><strong><font size="3" >Trưởng nhóm</font></strong></label>
                        <span><strong className="text-danger"> *</strong></span>
                        <div style={{ width: "500px" }}>
                            {this.state.users && <ItemMultiSelect items={this.state.users} onChange={this.getSelectedItem} />}
                        </div>
                    </div>
                    <div className="d-flex flex-row bd-highlight mb-3 mt-4">
                        <Button intent="success" onClick={this.handleOnClick} large>
                            <a href="/groups/" style={{ color: "white" }}>Tạo nhóm</a>
                            
                        </Button>
                    </div>

                </form>
            </div>
        )
    }
}


export default AddGroup
