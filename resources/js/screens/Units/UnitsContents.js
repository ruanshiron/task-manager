import React, { useEffect, useState } from 'react';

import { H1, InputGroup, Button, Icon, Card, H6, H3, Classes, EditableText, TextArea, Divider, ProgressBar } from '@blueprintjs/core';
import { ItemSelect, ItemMultiSelect, NameDescriptionEditable, ItemSuggest } from '../../components';
import { useParams } from 'react-router-dom';
import { DeputiesTable } from './components/DeputiesTable';
import { MembersTable } from './components';

export default function UnitsContent() {

    const params = useParams()

    const [state, setState] = useState({
        unit: {
            id: params.unitId,
            name: '',
            description: '',
            captain: '',
            deputies: [],
            members: []
        }
    })

    const [users, setUsers] = useState()

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/units/' + params.unitId,
        })
            .then(response => {
                response.data.captain.title = response.data.captain.name

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
        state.unit.deputies = v.map(u => ({ user_id: u.user.id, mission: u.mission }))
    }

    function membersOnChange(v) {
        state.unit.members = v.map(u => ({ user_id: u.user.id, mission: u.mission }))
    }

    function onSubmit() {

        axios({
            method: 'put',
            url: 'http://localhost:8000/api/units/' + params.unitId,
            data: {
                ...state.unit,
                captain_id: state.unit.captain.id
            }
        })
            .then(response => {
                console.log(response.data);

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div style={{ paddingBottom: '50vh', paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">
            <div className="p-2">
                <H3>Đơn vị</H3>
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
                <TextArea growVertically large fill
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
                deputies={state.deputies}
            />}

            {users && <MembersTable
                users={users}
                onChange={membersOnChange}
                members={state.members}
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


