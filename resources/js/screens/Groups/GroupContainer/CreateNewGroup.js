import React from 'react';
import axios from 'axios';
import { H1, InputGroup, Button, Icon, Card, EditableText, TextArea } from '@blueprintjs/core';
import { ItemSelect, ItemMultiSelect, ItemSuggest } from '../../../components';
import ShowDeputies from './ShowDeputies';
import ShowMembers from './ShowMembers';

class CreateNewGroup extends React.Component {
    state = {
        users: null,
        groups: null,
        request: {
            name: "",
            description: "",
            captain_id: []
        }
    }

    constructor(props) {
        super(props)

        this.handleOnClick = this.handleOnClick.bind(this)

        this.nameOnChange = this.nameOnChange.bind(this)
        this.descriptionOnChange = this.descriptionOnChange.bind(this)
        this.captainOnSelect = this.captainOnSelect.bind(this)
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

    componentDidUpdate() {
    }

    handleOnClick(e) {
        axios({
            method: 'post',
            url: 'http://localhost:8000/api/groups',
            data: this.state.request
        })
            .then(response => {
                this.props.history.push(`/groups/${response.data.id}`)
            })
            .catch(error => {
                console.log(error);
            })
    }

    nameOnChange(e) {
        this.setState({
            request: {
                ...this.state.request,
                name: e.target.value
            }
        })
    }

    descriptionOnChange(e) {
        this.setState({
            request: {
                ...this.state.request,
                description: e.target.value
            }
        })
    }

    captainOnSelect(value) {
        this.setState({
            request: {
                ...this.state.request,
                captain_id: value.id
            }
        })
    }

    render() {
        return (
            <div style={{ paddingBottom: '28px', paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">
                <form id="form-group" onSubmit={this.handleSubmit}>
                    <div className="unit-name">
                        <label ><strong><font size="3" >Tên nhóm</font></strong></label>
                        <span><strong className="text-danger"> *</strong></span>
                        <InputGroup leftIcon="layers" placeholder="Tên nhóm..." large className=".modifier w-50" value={this.state.request.name} onChange={this.nameOnChange} fill />
                    </div>

                    <div className="Desciption mt-4">
                        <label ><strong><font size="3" >Mô tả</font></strong></label>
                        <TextArea name="description" className="form-control" rows="5" id="describe-unit" value={this.state.request.description} onChange={this.descriptionOnChange} fill />
                    </div>

                    <div className="unit-leader mt-4">
                        <label ><strong><font size="3" >Trưởng nhóm</font></strong></label>
                        <span><strong className="text-danger"> *</strong></span>
                        <div style={{ width: "500px" }}>
                            {this.state.users && <ItemSuggest items={this.state.users} onChange={this.captainOnSelect} />}
                        </div>
                    </div>
                    <br></br>

                    <label ><strong><font size="3" >Phó nhóm</font></strong></label><br></br>

                    <div className="flex-fill bd-highlight">
                        <div>
                            <Card elevation={0} style={{ width: "100%" }}>
                                <br></br>
                                <div className="row " style={{ margin: '15px' }}>
                                    <ShowDeputies />
                                </div>
                            </Card>
                        </div>
                    </div>

                    <br></br>
                    <label ><strong><font size="3" >Thành viên</font></strong></label><br></br>

                    <div className="flex-fill bd-highlight">
                        <div>
                            <Card elevation={0}>
                                <br></br>
                                <div className="row " style={{ margin: '15px' }}>
                                    <ShowMembers />
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="d-flex flex-row bd-highlight mb-3 mt-4">
                        <a href="/groups/" style={{ color: "white" }}>
                            <Button intent="success" large onClick={this.handleOnClick}>Tạo nhóm </Button>
                        </a>
                    </div>

                </form>
            </div>
        )
    }
}

export default CreateNewGroup