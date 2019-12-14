import React, { useState, useEffect } from 'react'

import { useHistory, useRouteMatch, useParams } from 'react-router-dom'
import { H1, H3, H6, EditableText, Tag, Divider, ProgressBar, Card, Tabs, Tab } from '@blueprintjs/core'
import { ItemSelect, DatetimeInput } from '../../../../components'

export default function ProcessTasksContent(prop) {

    let params = useParams()

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/tasks/' + params.taskId,
        })
            .then(response => {
                console.log(response);
            });
    }, [])

    return (
        <div style={{ paddingBottom: '50vh', paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">

            <div className="p-2">
                <H3>
                    <EditableText value="Được của ló đấy" />
                </H3>

                <EditableText disabled value="Mô tả" />

                <br /><br />
                <p>Thự hiện bởi <Tag>Tôi</Tag> phê duyệt bởi <Tag>Công việc 1</Tag></p>
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

                        >
                            <Tab id="hd" title="Hành động" panel={<p>hello</p>} />
                            <Tab id="td" title="Trao đổi" panel={<p>gool</p>} />
                            <Tab id="tl" title="Tài liệu" panel={<p>hello</p>} />
                            <Tabs.Expander/>
                        </Tabs>
                    </Card>
                </div>
            </div>
        </div>

    )
}
