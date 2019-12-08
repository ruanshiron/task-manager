import React from 'react';

import { H1, H6} from "@blueprintjs/core"
import { Menu, MenuItem, MenuDivider, Button,EditableText, Classes, Icon, IconName, InputGroup, NumericInput, Collapse } from '@blueprintjs/core';
import { DateTimePicker, TimePrecision } from "@blueprintjs/datetime";
import { ItemSelect, ItemMultiSelect } from '../../../components';

import '@blueprintjs/core/lib/css/blueprint.css';
import { FocusStyleManager } from "@blueprintjs/core";
class DashboardKpiContent extends React.Component {

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
                        </div>
                        <div className="flex-fill bd-highlight">
                            <div>
                                <p>
                                    Mục tiêu 1: Thực hiện bởi 10 nhân viên, 60 KPI, 400 việc, điểm KPI trung bình: 71<br/>
                                    +Mục tiêu 1.1: Thực hiện bởi 10 nhân viên, 60 KPI, 400 việc, điểm KPI trung bình: 71<br/>
                                    +Mục tiêu 1.2: Thực hiện bởi 10 nhân viên, 60 KPI, 400 việc, điểm KPI trung bình: 71<br/>
                                    +Mục tiêu 1.1: Thực hiện bởi 10 nhân viên, 60 KPI, 400 việc, điểm KPI trung bình: 71<br/>
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default DashboardKpiContent