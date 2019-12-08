import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { H1, H6} from "@blueprintjs/core"
import { Menu, MenuItem, MenuDivider, Button,EditableText, Classes, Icon, IconName } from '@blueprintjs/core';
import { ItemSelect, ItemMultiSelect } from '../../../components';
class UnitsKpiContent extends React.Component {

    render() {
        return (
            <div>
           <div style={{ paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">
                
                    
                        <div className="d-flex flex-row bd-highlight mb-3">
                            <div className="p-2">
                                <H6>Chọn đơn vị</H6>
                                <ItemSelect/>
                            </div>
                        </div>
                        
                        <div className="d-flex flex-row bd-highlight mb-3">
                            <div className="p-2">
                            <H6>Tên mục tiêu:</H6>
                            <input className="bp3-input .modifier"  type="text" placeholder="Mục tiêu 1" dir="auto" />
                            </div>
                        </div>
                        
                        <div className="d-flex flex-row bd-highlight mb-3">
                            <div className="p-2">
                                <H6>Thuộc mục tiêu</H6>
                                <ItemSelect/>
                            </div>
                        </div>
                        <div className="d-flex flex-row bd-highlight mb-3">
                            <div className="p-2">
                            <H6>Tiêu chí đánh giá:</H6>
                            <input className="bp3-input .modifier"  type="text" placeholder="Nhập tiêu chí đánh giá" dir="auto" />
                            <button className="bp3-button bp3-icon-save" id="save" type="submit">Save</button>
                            </div>
                        </div>
                        <br></br>
                        <div>
                            <table className="bp3-html-table .modifier">
                                <thead>
                                    <tr>
                                    <th>STT</th>
                                    <th>Tên mục tiêu</th>
                                    <th>Tiêu chí đánh giá</th>
                                    <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Doanh thu</td>
                                        <td>Doanh thu 300 tỉ</td>
                                        <td><Button icon="edit" iconsize={50} /><Button icon="delete" intent="danger"/></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Khách hàng</td>
                                        <td>Kết nối 300k khách hàng</td>
                                        <td><Button icon="edit" iconsize={50} /><Button icon="delete" intent="danger"/></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>KPI 3</td>
                                        <td></td>
                                        <td><Button icon="edit" iconsize={50} /><Button icon="delete" intent="danger"/></td>
                                    </tr>
                                </tbody>
                                </table>
                        </div>
                    </div>
                
            
            </div>
        )
    }
}

export default UnitsKpiContent