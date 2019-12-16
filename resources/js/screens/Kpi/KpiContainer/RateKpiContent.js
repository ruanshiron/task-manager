import React from 'react';


import { H1, H6, H5, TagInput, Tag } from "@blueprintjs/core"
import { Card, MenuItem, MenuDivider, Button, EditableText, Classes, Icon, IconName, InputGroup, NumericInput, Collapse } from '@blueprintjs/core';
import { DateTimePicker, TimePrecision } from "@blueprintjs/datetime";
import { ItemSelect, ItemMultiSelect, DatetimeInput, ItemSuggest } from '../../../components';

class RateKpiContent extends React.Component {

    render() {
        return (
            <div>
                <div style={{ paddingBottom: '50vh', paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">
                    <div className="flex-fill bd-highlight p-2 mb-3">
                        <Card elevation={0}>
                            <div className="row">
                                <div className="col">
                                    <H6>Chọn đơn vị</H6>
                                    <ItemSuggest fill />
                                </div>
                                <div className="col">
                                    <H6>Tháng</H6>
                                    <DatetimeInput />
                                </div>
                                <div className="col">
                                    <H6>Người duyệt</H6>
                                    <ItemSuggest />
                                </div>
                                <div className="col">
                                    <H6>Trạng thái</H6>
                                    <ItemSuggest fill />
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="flex-fill bd-highlight">
                        <div className="pl-2">
                            <H6>Đánh giá KPI</H6>
                        </div>
                    </div>
                    <div className="flex-fill bd-highlight p-2">
                        <Card {...this.state}>
                            <H5>
                                <Tag>Mục tiêu 1</Tag> <Tag>Trọng số 30</Tag> <Tag intent='success'>Hoàn thành 70% đơn hàng</Tag>
                            </H5>
                            <p>
                                User interfaces that enable people to interact smoothly with data, ask better questions, and
                                make better decisions.
                            </p>
                            <Button text="Explore products" className={Classes.BUTTON} />
                        </Card>
                    </div>
                    <div className="flex-fill bd-highlight p-2">
                        <Card {...this.state}>
                            <H5>
                                <Tag>Mục tiêu 1</Tag> <Tag>Trọng số 30</Tag> <Tag intent='success'>Hoàn thành 70% đơn hàng</Tag>
                            </H5>
                            <p>
                                <Tag intent='warning'>30</Tag> Tự đánh giá
                            </p>
                            <p>
                                <Tag>20</Tag> Quản lý đánh giá
                            </p>
                            <H6>
                                Danh sách công việc:
                            </H6>
                            <ul>
                                <li><p><Tag>Công việc 1</Tag> điểm số 70, Vai trò <Tag>Người thực hiện</Tag> 3/7 - 25/8 <Tag intent='success'>Đúng hạn</Tag></p></li>
                                <li><p><Tag>Công việc 1</Tag> điểm số 70, Vai trò <Tag>Người thực hiện</Tag> 3/7 - 25/8 <Tag intent='success'>Đúng hạn</Tag></p></li>
                            </ul>
                            <Button text="Explore products" className={Classes.BUTTON} />
                        </Card>
                    </div>
                </div>



            </div>
        )
    }

}


export default RateKpiContent
