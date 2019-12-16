import React, { useEffect, useState } from 'react';

import { H1, InputGroup, Button, Icon, Card, H6, H3, Classes, EditableText, TextArea, Divider } from '@blueprintjs/core';
import { ItemSelect, ItemMultiSelect, NameDescriptionEditable, ItemSuggest } from '../../components';
import { useParams } from 'react-router-dom';

export default function UnitsContent() {

    const [state, setState] = useState({})

    const params = useParams({unit: {
        id: null,
        name: null,
        description: null,
        captain: null,
        deputies: [],
        members: []
    }})

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/units/' + params.unitId,
        })
            .then(response => {

            });

    }, [])

    return (
        <div style={{ paddingBottom: '50vh', paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">
            <div className="p-2">
                <H3>Đơn vị</H3>
            </div>
            <Divider />
            <div className="p-2">
                <InputGroup large className='mb-2' />
                <TextArea large fill />
            </div>
            <Divider />
            <div className="p-2">
                <H6>Trưởng đơn vị</H6>
                <ItemSuggest fill />
            </div>
            <div className="flex-fill bd-highlight">
                <div className="p-2">
                    <H6>Phó đơn vị</H6>
                    <Card elevation={0}>
                        <div className="">
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td><Button intent="warning" minimal>sửa</Button>
                                            <Button intent="danger" minimal>xoá</Button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td><Button intent="warning" minimal>sửa</Button>
                                            <Button intent="danger" minimal>xoá</Button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td><InputGroup /></td>
                                        <td><InputGroup /></td>
                                        <td>
                                            <Button intent="success" minimal fill>thêm</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>


            <div className="flex-fill bd-highlight">
                <div className="p-2">
                    <H6>Nhân viên</H6>
                    <Card elevation={0}>
                        <div className="">
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td><Button intent="warning" minimal>sửa</Button>
                                            <Button intent="danger" minimal>xoá</Button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td><Button intent="warning" minimal>sửa</Button>
                                            <Button intent="danger" minimal>xoá</Button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td><InputGroup /></td>
                                        <td><InputGroup /></td>
                                        <td>
                                            <Button intent="success" minimal fill>thêm</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>


        </div>
    )
}


