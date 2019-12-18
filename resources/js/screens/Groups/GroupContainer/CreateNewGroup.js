import React from 'react'
import { Divider, H3, InputGroup, TextArea, H6, Button } from '@blueprintjs/core'
import { ItemSuggest } from '../../../components'
import ShowDeputies from './ShowDeputies'
import ShowMembers from './ShowMembers'


export default function CreateNewGroup(props) {
    return (
        <div style={{ paddingBottom: '50vh', paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">
            <div className="p-2">
                <H3>Tạo nhóm mới</H3>
            </div>
            <Divider/>

            <div className="p-2">
                <InputGroup placeholder="Tên nhóm" large className='mb-2' />
                <TextArea placeholder="Mô tả" fill />
            </div>
            <Divider/>

            <div className="p-2">
                <H6>Trưởng đơn vị</H6>
                <ItemSuggest fill />
            </div>

            <ShowDeputies />
            <ShowMembers />
            <Divider />

            <Button
                intent='success'
                className="m-2"
                text="Lưu"
                large
            />
        </div>
    )
}
