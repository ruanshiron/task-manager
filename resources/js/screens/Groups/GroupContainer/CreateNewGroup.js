import React from 'react';
import axios from 'axios';
import { H1, InputGroup, Button, Icon, Card, EditableText, TextArea } from '@blueprintjs/core';
import { ItemSelect, ItemMultiSelect } from '../../../components';

class CreateNewGroup extends React.Component {
    state = {
        users: null,
        request: {
            name: "",
            description: "",
            captain_id: []
        }
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

    constructor(props) {
        super(props)

        this.nameOnChange = this.nameOnChange.bind(this)

        this.descriptionOnChange = this.descriptionOnChange.bind(this)
    }

    nameOnChange(e) {
        this.setState({
            request: {
                ...this.state.request,
                name: e.target.value
            }
        })
        console.log(name)
    }

    descriptionOnChange(e) {
        this.setState({
            request: {
                ...this.state.request,
                description: e.target.value
            }
        })
        console.log(name)
    }

    getSelectedItem = (data) => {
        console.log(data)
    }

    render() {
        return (
            <div style={{ paddingBottom: '28px', paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">
                <form id="form-group" onSubmit={this.handleSubmit}>
                    <div className="unit-name">
                        <label ><strong><font size="3" >Tên nhóm</font></strong></label>
                        <span><strong className="text-danger"> *</strong></span>
                        <InputGroup name="as" leftIcon="layers"
                            placeholder="Tên nhóm..."
                            large
                            className=".modifier w-50"
                            value={this.state.request.name} onChange={this.nameOnChange}
                        />
                    </div>

                    <div className="unit-name mt-4">
                        <label ><strong><font size="3" >Mô tả</font></strong></label>
                        <TextArea className="form-control" rows="5" id="describe-unit" name="description" value={this.state.request.description} onChange={this.descriptionOnChange} />
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
                            <a href="/groups/" style={{ color: "white" }}>Tạo nhóm</a>         </Button>
                    </div>

                </form>
            </div>
        )
    }
}

export default CreateNewGroup