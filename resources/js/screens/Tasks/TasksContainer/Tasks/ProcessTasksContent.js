import React, { useState, useEffect } from 'react'

import { useHistory, useRouteMatch, useParams } from 'react-router-dom'
import { H1, H5, H3, H6, EditableText, Tag, Divider, ProgressBar, Card, Tabs, Tab, Button, TextArea } from '@blueprintjs/core'
import { ItemSelect, DatetimeInput } from '../../../../components'

export default function ProcessTasksContent(prop) {

    let params = useParams()

    const [name, setName] = useState()

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/tasks/' + params.taskId,
        })
            .then(response => {
                console.log(response);
                setName(response.data.name)
            });
    }, [])

    return (
        <div style={{ paddingBottom: '50vh', paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">

            <div className="p-2">
                <H3>
                    <EditableText multiline value={name} />
                </H3>
                <br /><br />
                <p>Thực hiện bởi <Tag>Tôi</Tag> phê duyệt bởi <Tag>Công việc 1</Tag></p>
            </div>
            <Divider />

            <div className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2">
                    <H6>Mức độ ưu tiên</H6>
                    <ItemSelect />
                </div>
                <div className="p-2">
                    <H6>Trạng thái</H6>
                    <ItemSelect />
                </div>
                <div className="p-2">
                    <H6>Ngày bắt đầu</H6>
                    <DatetimeInput disabled />
                </div>
                <div className="p-2">
                    <H6>Ngày kết thúc</H6>
                    <DatetimeInput disabled />
                </div>
            </div>


            <div className="d-flex flex-row bd-highlight mb-3 p-2">
                <ProgressBar value={0.8} intent='success' animate={false} />
            </div>

            <div className="flex-fill bd-highlight mb-3">
                <div className="p-2">
                    <H6>Thông tin</H6>
                    <Card elevation={0}>
                        <div className="table-responsive">
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Tên</th>
                                        <th scope="col">Mô Tả</th>
                                        <th style={{ minWidth: '88px' }} scope="col">Bắt buộc</th>
                                        <th style={{ minWidth: '120px' }} scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="flex-fill bd-highlight">
                <div className="p-2">
                    <Card elevation={0}>
                        <Tabs
                            large
                        >
                            <Tab id="hd" title="Hành động" panel={<ActionsPanel />} />
                            <Tab id="td" title="Trao đổi" panel={<ChatPanel />} />
                            <Tab id="tl" title="Tài liệu" panel={<FilesPanel />} />

                            <Tabs.Expander />
                        </Tabs>
                    </Card>
                </div>
            </div>
        </div>

    )
}


function ActionsPanel(props) {

    return (
        <div>
            {
                [1, 2, 3].map((u, i) => (
                    <Card
                        key={i}
                        style={{ marginBottom: '1em' }}
                        elevation={0}
                    >
                        <H5>
                            <Tag>{i + 1}</Tag> <Tag>Nguyễn Thế Vinh</Tag> <Tag>26/12/2019</Tag>
                        </H5>
                        <p>
                            User interfaces that enable people to interact smoothly with data, ask better questions, and
                            make better decisions.
                        </p>
                        <Button className='mr-1' intent='success' text="Hoàn thành" />
                        <Button className='mr-1' intent='success' text="Đạt" />
                        <Button className='mr-1' intent='warning' text="Chưa đạt" />
                    </Card>
                ))
            }

            <Card
                style={{ marginBottom: '1em' }}
                elevation={0}
            >
                <H5>
                    <Tag>4</Tag> <Tag>Nguyễn Thế Vinh</Tag>
                </H5>
                <TextArea
                    style={{ marginBottom: '1em' }}
                    fill
                />
                <Button className='mr-1' text="Thêm" />
                <Button className='mr-1' text="Thêm" />
            </Card>
        </div>
    )
}


function ChatPanel(props) {
    return (
        <div>
            {
                [1, 2, 3].map((u, i) => (
                    <Card
                        key={i}
                        style={{ marginBottom: '1em' }}
                        elevation={0}
                    >
                        <H5>
                            <Tag>Nguyễn Thế Vinh</Tag> <Tag>26/12/2019</Tag> <Tag interactive intent='warning'>sửa</Tag>
                        </H5>
                        <p>
                            User interfaces that enable people to interact smoothly with data, ask better questions, and
                            make better decisions.
                        </p>
                    </Card>
                ))
            }

            <Card
                style={{ marginBottom: '1em' }}
                elevation={0}
            >
                <H5>
                    <Tag>4</Tag> <Tag>Nguyễn Thế Vinh</Tag>
                </H5>
                <TextArea
                    style={{ marginBottom: '1em' }}
                    fill
                />
                <Button className='mr-1' text="Thêm" />
            </Card>
        </div>
    )
}

function FilesPanel(props) {

    return (
        <div className="table-responsive">
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tài liệu</th>
                        <th scope="col">Mô Tả</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <H5>
                                <a href="#">Bài tập về nhà</a>
                            </H5>
                        </td>
                        <td>
                        User interfaces that enable people to interact smoothly with data, ask better questions, and
                            make better decisions.
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
