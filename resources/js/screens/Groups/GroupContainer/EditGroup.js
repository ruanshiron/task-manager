import React, { useEffect, useState } from 'react';

import { H1, InputGroup, Button, Icon, Card, H6, H3, Classes, EditableText, TextArea, Divider, ProgressBar } from '@blueprintjs/core';
import { ItemSelect, ItemMultiSelect, NameDescriptionEditable, ItemSuggest } from '../../../components';
import { useParams, useHistory } from 'react-router-dom';
import DeputiesTable from './ShowDeputies'
import MembersTable from './ShowMembers'

export default function EditGroup() {

    const params = useParams()

    const [state, setState] = useState({
        unit: {
            id: params.groupId,
            name: '',
            description: '',
            captain: '',
            deputies: [],
            members: []
        }
    })

    const [users, setUsers] = useState()

    const history = useHistory()

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/groups/' + params.groupId,
        })
            .then(response => {
                console.log(response.data);

                response.data.captain.title = response.data.captain.name
                response.data.deputies = response.data.deputies.map(u => { return { ...u, mission: u.pivot.mission ,title: u.name }})

                response.data.members = response.data.members.map(u => { return { ...u, mission: u.pivot.mission ,title: u.name }})

                setState({
                    ...state,
                    unit: response.data
                })
            });

        axios({
            method: 'get',
            url: 'http://localhost:8000/api/users/',
        })
            .then(response => {
                setUsers(response.data.map(u => { return { ...u, title: u.name } }))
            });

    }, [params])

    function deputiesOnChange(v) {
        setState({
            unit: {
                ...state.unit,
                deputies: v
            }
        })
    }

    function membersOnChange(v) {
        setState({
            unit: {
                ...state.unit,
                members: v
            }
        })
    }

    function onSubmit() {

        let request = {
            ...state.unit,
            deputies: state.unit.deputies.map(u=> ({user_id: u.id, mission: u.mission})),
            members: state.unit.members.map(u=> ({user_id: u.id, mission: u.mission})),
            captain_id: state.unit.captain.id
        }

        console.log(state.unit)


        axios({
            method: 'put',
            url: 'http://localhost:8000/api/groups/' + params.groupId,
            data: request
        })
            .then(response => {
                console.log(response.data);
                history.push('/groups')

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div style={{ paddingBottom: '50vh', paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">
            <div className="p-2">
                <H3>Nhóm</H3>
            </div>
            <Divider />
            <div className="p-2">
                <InputGroup large className='mb-2'
                    value={state.unit.name}
                    onChange={(e) => {
                        setState({
                            ...state,
                            unit: {
                                ...state.unit,
                                name: e.target.value
                            }
                        })
                    }}
                />
                <TextArea rows="3" growVertically large fill
                    value={state.unit.description ? state.unit.description : ''}
                    onChange={(e) => {
                        setState({
                            ...state,
                            unit: {
                                ...state.unit,
                                description: e.target.value
                            }
                        })
                    }}
                />
            </div>
            <Divider />
            <div className="p-2">
                <H6>Trưởng đơn vị</H6>
                {users && <ItemSuggest items={users} selected={state.unit.captain} fill />}
            </div>

            {users && <DeputiesTable
                users={users}
                onChange={deputiesOnChange}
                deputies={state.unit.deputies}
            />}

            {users && <MembersTable
                users={users}
                onChange={membersOnChange}
                members={state.unit.members}
            />}

            <Divider/>

            <Button
                intent='success'
                className="m-2"
                text="Lưu"
                large
                onClick={onSubmit}
            />
        </div>
    )
}


