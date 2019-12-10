import React from 'react';

import { H1, InputGroup, Button, Icon, Card, EditableText, TextArea } from '@blueprintjs/core';
import { ItemSelect, ItemMultiSelect } from '../../../components';
import ShowDeputies from './ShowDeputies';
import ShowMembers from './ShowMembers';
import AddGroup from './AddGroup';

class CreateNewGroup extends React.Component {
    constructor() {
        super();
        this.state = {
            groupList: []
        }
    }

    componentDidMount() {
        //Get nhom
        axios.get('/api/groups')
            .then(reponse => {
                this.setState({ groupList: reponse.data });
            })
    }

    handleSubmitGroup = data => {
        this.setState({
            groupList: [...this.state.groupList, data]
        })
    }

    render() {
        return (
            <div style={{ paddingBottom: '28px', paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">
                <AddGroup onSubmit={this.handleSubmitGroup}/>
                <br></br>
            </div>            
        )
    }
}

export default CreateNewGroup