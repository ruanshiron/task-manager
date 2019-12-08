import React from 'react';


import { H1,H6} from "@blueprintjs/core"
import { Menu, MenuItem, MenuDivider, Button,EditableText, Classes, Icon, IconName, InputGroup, NumericInput, Collapse } from '@blueprintjs/core';
import { DateTimePicker, TimePrecision } from "@blueprintjs/datetime";
import { ItemSelect, ItemMultiSelect, DatetimeInput } from '../../../components';

class RateKpiContent extends React.Component {

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
                            <H6>Tháng</H6>
                            <DatetimeInput/>
                        </div>
                        <div className="p-2">
                            <H6>Người duyệt</H6>
                            <ItemSelect/>
                        </div>
                        <div className="p-2">
                            <H6>Trạng thái</H6>
                            <ItemSelect/>
                        </div>
                    </div>
                    
                    <div className="flex-fill bd-highlight">
                        <div className="p-2">
                            <H6>Đánh giá KPI</H6>
                        </div>
                    </div>
                    <div className="flex-fill bd-highlight">
                    <div className="card">
                        <div className="flex-fill bd-highlight">
                            <div className="p-2">
                                <p>Mục tiêu 1 - Trọng số 30 - Hoàn thành 70% đơn hàng</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row bd-highlight mb-3">    
                            <div className="p-2">
                                <label >Tự đánh giá:</label>
                                <NumericInput fill />
                            </div>
                            <div className="p-2">
                                <label >Quản lí đánh giá:</label>
                                <NumericInput fill />
                            </div>  
                        </div>
                        <div className="flex-fill bd-highlight">
                            <button className="bp3-button" data-toggle="collapse" data-target="#demo">Danh sách công việc(10 việc: 3 hoàn thành, 2 hủy, 3 dừng, 2 đang thực hiện</button>
                                <div id="demo" className="collapse">
                                    
                                    <p>+Công việc 1, điểm số 70. Vai trò: người thực hiện. 3/5-2/6. Hoàn thành đúng hạn</p>
                                    <p>+Công việc 2, điểm số 70. Vai trò: người thực hiện. 3/5-2/6. Hoàn thành đúng hạn</p>
                                    
                                </div>
                        </div>


                    </div>
                    </div>

                </div>
            
                    

            
        </div>
        )
    }
    
}


export default RateKpiContent