import React from 'react';

import { H1, InputGroup, Button, Icon, Card, H5, H3, Classes, EditableText, TextArea  } from '@blueprintjs/core';
import { ItemSelect, ItemMultiSelect } from '../../components';

class UnitsContent extends React.PureComponent {

    render() {
        return (
            <div style={{ paddingBottom: '50vh',paddingTop: '28px', paddingLeft: '40px', maxWidth: '700px' }} className="container-fluid ">
                <div className="unit-name">
                    <label ><strong><font size="3" >Tên đơn vị</font></strong></label><br></br>
                    <InputGroup  leftIcon="layers"   
                        placeholder="Tên đơn vị..."
                        large
                        className=".modifier w-50"
                    />
                </div>
                <br></br>
                <div className="Desciption">
                    <label ><strong><font size="3" >Mô tả</font></strong></label><br></br>
                    <TextArea className="form-control" rows="5" id="describe-unit" />
                </div>
                <br></br>
                <div className="unit-leader">
                    <label ><strong><font size="3" >Trưởng đơn vị</font></strong></label><br></br>
                    <div style={{width:"500px"}}><ItemMultiSelect/></div>
                </div>
                <br></br>

                <label ><strong><font size="3" >Phó đơn vị</font></strong></label><br></br>

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <Card elevation={0}>
                            <div className="row" >
                                <span style={{margin: "15px"}} className="col-2"><strong>Phó đơn vị</strong></span>
                                <span style={{marginTop: "10px", width:"300px"}}><ItemMultiSelect/></span>
                            </div>
                            <br></br>
                            <div className="row">
                                <span style={{margin:'15px'}} className="col-2">
                                    <strong>Nhiệm vụ</strong>
                                </span>
                                <span>
                                    <TextArea style={{ minWidth: "300px", padding: "15px", paddingTop: "10px" }} 
                                    className="form-control" rows="5" id="misson"/>
                                    
                                </span>
                                <span style={{margin:'50px 20px'}}>
                                    <Button style={{width: '80px'}} intent="primary">Lưu</Button>
                                </span>
                            </div>
                            <br></br>
                            <div className="row " style={{margin:'15px'}}>
                                <table className="table" >
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Họ và tên</th>
                                            <th scope="col">Nhiệm vụ</th>
                                            <th scope="col">Hành động</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Nguyễn Thế Vinh</td>
                                            <td>Phòng phụ trách KPI</td>
                                            <td>
                                                <Button icon="edit" intent="primary"></Button>
                                                <Button icon="trash" intent="danger"></Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Nguyễn Thế Vinh</td>
                                            <td>Phòng phụ trách KPI</td>
                                            <td>
                                                <Button icon="edit" intent="primary"></Button>
                                                <Button icon="trash" intent="danger"></Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Nguyễn Thế Vinh</td>
                                            <td>Phòng phụ trách KPI</td>
                                            <td>
                                                <Button icon="edit" intent="primary"></Button>
                                                <Button icon="trash" intent="danger"></Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </div>   
                </div>    

                <br></br>
                <label ><strong><font size="3" >Nhân viên</font></strong></label><br></br>

                <div className="flex-fill bd-highlight">
                    <div className="p-2">
                        <Card elevation={0}>
                            <div className="row" >
                                <span style={{margin: "15px"}} className="col-2"><strong>Chọn nhân viên</strong></span>
                                <span style={{marginTop: "10px", width:"300px"}}><ItemMultiSelect/></span>
                            </div>
                            <br></br>
                            <div className="row">
                                <span style={{margin:'15px'}} className="col-2">
                                    <strong>Nhiệm vụ</strong>
                                </span>
                                <span>
                                    <TextArea style={{ minWidth: "300px", padding: "15px", paddingTop: "10px" }} 
                                    className="form-control" rows="5" id="misson"/>
                                </span>
                                <span style={{margin:'50px 20px'}}>
                                    <Button style={{width: '80px'}} intent="primary">Lưu</Button>
                                </span>
                            </div>
                            <br></br>
                            <div className="row " style={{margin:'15px'}}>
                                <table className="table" >
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Họ và tên</th>
                                            <th scope="col">Nhiệm vụ</th>
                                            <th scope="col">Hành động</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Nguyễn Thế Vinh</td>
                                            <td>Phòng phụ trách KPI</td>
                                            <td>
                                                <Button icon="edit" intent="primary"></Button>
                                                <Button icon="trash" intent="danger"></Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Nguyễn Thế Vinh</td>
                                            <td>Phòng phụ trách KPI</td>
                                            <td>
                                                <Button icon="edit" intent="primary"></Button>
                                                <Button icon="trash" intent="danger"></Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Nguyễn Thế Vinh</td>
                                            <td>Phòng phụ trách KPI</td>
                                            <td>
                                                <Button icon="edit" intent="primary"></Button>
                                                <Button icon="trash" intent="danger"></Button>
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
}


export default UnitsContent
