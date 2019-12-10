import React from 'react';
import axios from 'axios';
import { H3, H6, Button, Intent, MenuItem, Divider, InputGroup, Classes } from "@blueprintjs/core"

import { ItemSelect, ItemMultiSelect } from '../../components';
import TableList from './GroupContainer/ShowDeputies';
import AddDeputy from './GroupContainer/AddDeputy';
import AddMember from './AddMember';
import AddGroup from './AddGroup';

const INTENTS = [Intent.NONE, Intent.PRIMARY, Intent.SUCCESS, Intent.DANGER, Intent.WARNING];

class GroupsContent extends React.Component {

    constructor() {
        super();
        this.state = {
            deputyList: [],
            memberList: [],
            groupList: []
        }
    }

    componentDidMount() {
        // Get pho nhom
        axios.get('/api/deputies')
            .then(reponse => {
                this.setState({ deputyList: reponse.data });
            })

        // Get thanh vien
        axios.get('/api/members')
            .then(reponse => {
                this.setState({ memberList: reponse.data });
            })

        //Get nhom
        axios.get('/api/groups')
            .then(reponse => {
                this.setState({ groupList: reponse.data });
            })
    }

    handleSubmitDeputy = data => {
        this.setState({
            deputyList: [...this.state.deputyList, data]
        })
    }

    handleSubmitMember = data => {
        this.setState({
            memberList: [...this.state.memberList, data]
        })
    }

    handleSubmitGroup = data => {
        this.setState({
            groupList: [...this.state.groupList, data]
        })
    }

    render() {
        return (
            <div className="form">
                <div className="container">
                    <AddGroup onSubmit={this.handleSubmitGroup} />
                    <div className="contentGroup">
                        <label><strong>Phó nhóm</strong></label>
                        <div className="member">
                            <AddDeputy onSubmit={this.handleSubmitDeputy} />
                            <TableList data={this.state.deputyList} />
                        </div>
                    </div>

                    <div className="contentGroup">
                        <label><strong>Thành viên nhóm</strong></label>
                        <div className="member">
                            <AddMember onSubmit={this.handleSubmitMember} />
                            <TableList data={this.state.memberList} />
                        </div>
                    </div>
                </div>
                <button className="wrap-button">Save</button>
            </div>
        )
    }
}

export default GroupsContent