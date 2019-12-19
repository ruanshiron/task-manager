import React, { useState, useEffect } from 'react'
import { Divider, H3, InputGroup, TextArea, H6, Button } from '@blueprintjs/core'
import { ItemSuggest } from '../../../components'
import ShowDeputies from './ShowDeputies'
import ShowMembers from './ShowMembers'
import { useHistory } from 'react-router-dom'


export default function CreateNewGroup(props) {

    const [users, setUsers] = useState()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [captain, setCaptain] = useState()
    const [deputies, setDeputies] = useState([])
    const [members, setMembers] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/users/',
        })
            .then(response => {
                setUsers(response.data.map(u => { return { ...u, title: u.name } }))
            });
    }, [])

    const history = useHistory()

    const onSubmit = e => {
        let request = {
            name,
            description,
            captain_id: captain? captain.id: null,
            deputies: deputies.map(u => ({user_id: u.id, mission: u.mission})),
            members: members.map(u => ({user_id: u.id, mission: u.mission}))
        }

        console.log(request)

        axios({
            method: 'post',
            url: 'http://localhost:8000/api/groups',
            data: request
        })
            .then(response => {
                console.log(response);
                history.push('/groups')
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div style={{ paddingBottom: '50vh', paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">
            <div className="p-2">
                <H3>Tạo nhóm mới</H3>
            </div>
            <Divider />

            <div className="p-2">

                <InputGroup
                    large
                    className='mb-2'
                    placeholder="Tên nhóm"
                    value={name}
                    onChange={v => setName(v.target.value)}
                />

                <TextArea
                    rows="3"
                    fill
                    placeholder="Mô tả"
                    value={description}
                    onChange={v => setDescription(v.target.value)}
                />
            </div>
            <Divider />

            <div className="p-2">
                <H6>Trưởng nhóm</H6>
                {users && <ItemSuggest items={users} selected={captain} onChange={v => setCaptain(v)} fill />}
            </div>

            {users && <ShowDeputies
                deputies={deputies}
                users={users}
                onChange={setDeputies}
            />}

            {users && <ShowMembers
                members={members}
                users={users}
                onChange={setMembers}
            />}
            <Divider />

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
