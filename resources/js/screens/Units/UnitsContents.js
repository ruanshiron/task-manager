import React from 'react';

import { H1, InputGroup, Button, Icon  } from '@blueprintjs/core';
import { ItemSelect, ItemMultiSelect } from '../../components';

class UnitsContent extends React.PureComponent {

    render() {
        return (
            <div>
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
                    <div className="bp3-button-group .modifier">
                        <a className="bp3-button " role="button">Bold</a>
                        <a className="bp3-button " role="button">Italic</a>
                        <a className="bp3-button " role="button">Underline</a>
                    </div>
                    <textarea className="form-control" rows="5" id="describe-unit" >
                    </textarea>
                </div>
                <br></br>
                <div className="unit-leader">
                    <label ><strong><font size="3" >Trưởng đơn vị</font></strong></label><br></br>
                    <div style={{width:"500px"}}><ItemMultiSelect/></div>
                </div>
                <br></br>
                <label ><strong><font size="3" >Phó đơn vị</font></strong></label><br></br>
                <div className="unit-deputy" style={{ backgroundColor: "#cbd1d6", marginTop:"5px", borderRadius:"25px" }}>
                    <br></br>
                    <div className="row" >
                        <span style={{margin: "15px"}} className="col-2"><strong>Phó đơn vị</strong></span>
                        <span style={{marginTop: "10px", width:"300px"}}><ItemMultiSelect/></span>
                    </div>
                    <br></br>
                    <div className="row">
                        <span style={{margin:'15px'}} className="col-2"><strong>Nhiệm vụ</strong></span>
                        <span><textarea style={{ minWidth: "500px", padding: "15px", paddingTop: "10px" }} className="form-control" rows="5" id="misson">
                        </textarea></span>
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
                </div>
                <br></br>
                <label ><strong><font size="3" >Nhân viên</font></strong></label><br></br>
                <div className="unit-deputy" style={{ backgroundColor: "#cbd1d6", marginTop:"5px", borderRadius:"25px" }}>
                    <br></br>
                    <div className="row" >
                        <span style={{margin: "15px"}} className="col-2"><strong>Chọn nhân viên</strong></span>
                        <span style={{marginTop: "10px", width:"300px"}}><ItemMultiSelect/></span>
                    </div>
                    <br></br>
                    <div className="row">
                        <span style={{margin:'15px'}} className="col-2"><strong>Nhiệm vụ</strong></span>
                        <span><textarea style={{ minWidth: "500px", padding: "15px", paddingTop: "10px" }} className="form-control" rows="5" id="misson">
                        </textarea></span>
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
                </div>
                <br></br>
            </div>
        )
    }
}


export default UnitsContent
