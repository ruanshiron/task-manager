

import { H1 } from '@blueprintjs/core';


import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { Menu, MenuItem, MenuDivider, Button,EditableText, Classes, Icon } from '@blueprintjs/core';



import '@blueprintjs/core/lib/css/blueprint.css';
import { FocusStyleManager } from "@blueprintjs/core";


FocusStyleManager.onlyShowFocusOnTabs();



export function Kpi (props) {
    
    return (
        <div>
        <H1>Kpi</H1>
        <div className="row justify-content-center" >
                <div className="col-md-8">
                    <div className="card">
                        <div className="bp3-select .modifier" >
                            <p>Chọn đơn vị:</p>
                            <select className="bp3-select .modifier">
                                <option>Chọn đơn vị</option>
                                <option value="phongKinhDoanh">Phòng Kinh Doanh</option>
                                <option value="phongMarketing">Phòng Marketing</option>
                                <option value="boPhanNhanSu">Bộ Phận Nhân Sự</option> 
                            </select>     
                        </div>
                        <br></br>
                        <div className="goal-name">
                            <p>Tên mục tiêu:</p>
                            <input className="bp3-input .modifier"  type="text" placeholder="Mục tiêu 1" dir="auto" />
                        </div>
                        
                        <div className="bp3-select .modifier" >
                            <p>Thuộc mục tiêu:</p>
                            <select className="bp3-select .modifier">
                                <option>Doanh thu 300 tỏi</option>
                                <option value="phongKinhDoanh">Doanh thu 200 tỏi</option>
                                <option value="phongMarketing">Doanh thu 1 tỏi</option>
                                 
                            </select>     
                        </div>
                        <div className="goal-name">
                            <p>Tiêu chí đánh giá:</p>
                            <input className="bp3-input .modifier"  type="text" placeholder="Nhập tiêu chí đánh giá" dir="auto" />
                            <button className="bp3-button bp3-icon-save" id="save" type="submit">Save</button>
                        </div>

                        <div>
                            <table className="bp3-html-table .modifier">
                                <thead>
                                    <tr>
                                    <th>Project</th>
                                    <th>Description</th>
                                    <th>Technologies</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>STT</td>
                                    <td>Tên mục tiêu</td>
                                    <td>Sass, TypeScript, React</td>
                                    </tr>
                                    <tr>
                                    <td>TSLint</td>
                                    <td>Static analysis linter for TypeScript</td>
                                    <td>TypeScript</td>
                                    </tr>
                                    <tr>
                                    <td>Plottable</td>
                                    <td>Composable charting library built on top of D3</td>
                                    <td>SVG, TypeScript, D3</td>
                                    </tr>
                                </tbody>
                                </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}