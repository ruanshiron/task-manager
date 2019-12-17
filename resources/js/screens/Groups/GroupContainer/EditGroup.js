import React from 'react';

import { H1, InputGroup, Button, Icon, Card, EditableText, TextArea } from '@blueprintjs/core';
import { ItemSelect, ItemMultiSelect } from '../../../components';
import ShowDeputies from './ShowDeputies';
import ShowMembers from './ShowMembers';

class EditGroup extends React.Component {
    constructor() {
        super();
        this.state = {
            groupList: [],
            deputyList: [],
            memberList: []
        }
    }

    componentDidMount() {
        // Get nhom
        axios.get('/api/groups')
            .then(reponse => {
                this.setState({ groupList: reponse.data });
                console.log(reponse.data);

            })
        axios.get('/api/deputies')
            .then(reponse => {
                this.setState({ groupList: reponse.data });
                console.log(reponse.data);

            })
        axios.get('/api/groups')
            .then(reponse => {
                this.setState({ groupList: reponse.data });
                console.log(reponse.data);

            })
    }

    onDelete(group_id) {
        axios.delete('/api/groups/delete/' + group_id)
            .then(reponse => {
                var groupList = this.state.groupList;

                for (var i = 0; i < groupList.length; i++) {
                    if (groupList[i].id == group_id) {
                        groupList.splice(i, 1);
                        this.setState({ groupList: groupList });
                    }
                }
            })
    }

    render() {
        return (
            <div style={{ paddingBottom: '28px', paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">
                <div className="unit-name">
                    <label ><strong><font size="3" >Tên nhóm</font></strong></label><br></br>
                    <InputGroup name="name" leftIcon="layers" value="" />
                </div>
                <br></br>
                <div className="Desciption">
                    <label ><strong><font size="3" >Mô tả</font></strong></label><br></br>
                    <TextArea className="form-control" rows="5" id="describe-unit" name="description" value="aa" />
                </div>
                <br></br>
                <div className="unit-leader">
                    <label ><strong><font size="3" >Trưởng nhóm</font></strong></label><br></br>
                    <div style={{ width: "500px" }}><InputGroup name="captain" /></div>
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
            </div>
        )
    }
}

export default EditGroup