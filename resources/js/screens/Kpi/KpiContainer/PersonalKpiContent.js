import React from 'react';

import { H1, H6 } from "@blueprintjs/core"
import { Menu, MenuItem, MenuDivider, Button, EditableText, Classes, Icon, IconName, InputGroup, Card, TextArea } from '@blueprintjs/core';
import { DateTimePicker, TimePrecision } from "@blueprintjs/datetime";
import { ItemSelect, ItemMultiSelect, DatetimeInput, ItemSuggest } from '../../../components';




class PersonalKpiContent extends React.Component {
    

    render() {
        return (
            <div>
                <div style={{ paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">
                    <div className="flex-fill bd-highlight p-2">
                        <Card elevation={0}>
                            <div class="row">
                                <div class="col">
                                    <H6>Chọn đơn vị</H6>
                                    <ItemSuggest fill />
                                </div>
                                <div class="col">
                                    <H6>Tháng</H6>
                                    <DatetimeInput />
                                </div>
                                <div class="col">
                                    <H6>Người duyệt</H6>
                                    <ItemSuggest />
                                </div>
                                <div class="col">
                                    <H6>Trạng thái</H6>
                                    <ItemSuggest fill />
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="flex-fill bd-highlight p-2">
                        <Card elevation={0}>
                            <div class="row mb-3">
                                <div class="col-6">
                                    <H6>Tên mục tiêu</H6>
                                    <InputGroup fill />
                                </div>
                                <div class="col">
                                    <H6>Thuộc mục tiêu</H6>
                                    <ItemSuggest />
                                </div>
                                <div class="col">
                                    <H6>Trọng số</H6>
                                    <InputGroup />
                                </div>
                            </div>
                            <div class="row mb-3">

                                <div class="col">
                                    <H6>
                                        Tiêu chí KPI
                            </H6>
                                    <TextArea fill />
                                </div>
                            </div>
                            <Button className="mt-2" text="Lưu" large intent='success' />
                        </Card>
                    </div>

                    <div className="flex-fill bd-highlight p-2">
                        <Card elevation={0}>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Tên</th>

                                            <th scope="col">Trọng số</th>
                                            <th scope="col">Tiêu chí đánh giá</th>
                                            <th scope="col">Mục tiêu đơn vị</th>
                                            <th style={{ minWidth: '120px' }} scope="col">Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

        );
    }
}

export default PersonalKpiContent
