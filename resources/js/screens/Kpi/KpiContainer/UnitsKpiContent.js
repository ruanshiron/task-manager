import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { H1, H6, TextArea } from "@blueprintjs/core"
import { Card, Menu, MenuItem, MenuDivider, Button, EditableText, Classes, Icon, IconName, InputGroup } from '@blueprintjs/core';
import { ItemSelect, ItemMultiSelect, DatetimeInput, ItemSuggest } from '../../../components';
class UnitsKpiContent extends React.Component {

    render() {
        return (
            <div style={{ paddingBottom: '50vh', paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">
                <div className="flex-fill bd-highlight p-2">
                    <Card elevation={0}>
                        <div class="row mb-3">
                            <div class="col-6">
                                <H6>
                                    Tên
                                </H6>
                                <InputGroup fill />
                            </div>
                            <div class="col">
                                <H6>
                                    Chọn đơn vị
                                </H6>
                                <ItemSuggest fill />
                            </div>
                            <div class="col">
                                <H6>
                                    Thuộc mục tiêu
                                </H6>
                                <ItemSuggest fill />
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
            </div >

        )
    }
}

export default UnitsKpiContent
