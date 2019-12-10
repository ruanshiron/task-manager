import React, { Component } from 'react'
import axios from 'axios';
import { H1, InputGroup, Button, Icon, Card, EditableText, TextArea } from '@blueprintjs/core';


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

    


    render() {
        return (
            <div>
                <form id="form-group" onSubmit={this.handleSubmit}>
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
                        <div style={{ width: "500px" }}><InputGroup name="captain"/></div>
                    </div>
                    <button className="mt-5">Submit</button>
                </form>
            </div>
        )
    }
}


export default AddGroup
