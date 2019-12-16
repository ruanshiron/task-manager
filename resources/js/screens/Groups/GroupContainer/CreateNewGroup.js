import React from 'react';
import axios from 'axios';
import { H1, InputGroup, Button, Icon, Card, EditableText, TextArea } from '@blueprintjs/core';
import { ItemSelect, ItemMultiSelect } from '../../../components';

class CreateNewGroup extends React.Component {
    // state = {
    //     users: null,
    //     request: {
    //         name: "",
    //         description: "",
    //         captain_id: []
    //     }
    // }
    // constructor() {
    //     super();
    //     this.state = {
    //         groupList: []
    //     }
    // }

    // componentDidMount() {
    //     //Get nhom
    //     axios.get('/api/groups')
    //         .then(reponse => {
    //             this.setState({ groupList: reponse.data });
    //         })
    // }

    // handleSubmitGroup = data => {
    //     this.setState({
    //         groupList: [...this.state.groupList, data]
    //     })
    // }
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
        this.captainOnChange = this.captainOnChange.bind(this)
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

    captainOnChange(value) {
        this.setState({
            request: {
                ...this.state.request,
                captain_id: value
            }
        })
    }

    render() {
        return (
            <div style={{ paddingBottom: '28px', paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">
                {/* <AddGroup/> */}
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
                            {this.state.users && <ItemMultiSelect items={this.state.users} onChange={this.captainOnChange} />}
                        </div>
                    </div>
                    <div className="d-flex flex-row bd-highlight mb-3 mt-4">
                        <Button intent="success" large onClick={this.handleOnClick}>
                            {/* <a href="/groups/" style={{ color: "white" }}>Tạo nhóm</a> */}
                            aaa
                        </Button>
                    </div>

                </form>
            </div>
        )
    }
}

export default CreateNewGroup