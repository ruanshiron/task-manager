import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { Button, Menu, MenuItem, MenuDivider } from '@blueprintjs/core';

import '@blueprintjs/core/lib/css/blueprint.css';
import { FocusStyleManager } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();

function App() {
    function handleOnClick(e) {
        e.preventDefault();
        axios.get('/api/user')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    return (
        <div className="container" >
            <div className="navigation">
                <div className="sidebar">
                    <div className="nav-header">
                        <Button style={{ margin: "4px" }} icon="home" minimal large active></Button>
                        <Button style={{ margin: "4px" }} icon="projects" minimal large ></Button>
                        <Button style={{ margin: "4px" }} icon="chart" minimal large ></Button>
                        <Button style={{ margin: "4px" }} icon="people" minimal large ></Button>
                        <Button style={{ margin: "4px" }} icon="diagram-tree" minimal large ></Button>
                    </div>
                    <Button style={{ margin: "4px" }} icon="person" minimal large></Button>
                </div>
                <div className="sub-sidebar">
                    <div className="sub-menu">
                        <Menu>
                            <MenuDivider title="Edit" />
                            <MenuItem icon="cut" text="Cut" label="⌘X" />
                            <MenuItem icon="duplicate" text="Copy" label="⌘C" />
                            <MenuItem icon="clipboard" text="Paste" label="⌘V" disabled={true} />
                            <MenuDivider title="Text" />
                            <MenuItem disabled={true} icon="align-left" text="Alignment">
                                <MenuItem icon="align-left" text="Left" />
                                <MenuItem icon="align-center" text="Center" />
                                <MenuItem icon="align-right" text="Right" />
                                <MenuItem icon="align-justify" text="Justify" />
                            </MenuItem>
                            <MenuItem icon="style" text="Style">
                                <MenuItem icon="bold" text="Bold" />
                                <MenuItem icon="italic" text="Italic" />
                                <MenuItem icon="underline" text="Underline" />
                            </MenuItem>
                            <MenuItem icon="asterisk" text="Miscellaneous">
                                <MenuItem icon="badge" text="Badge" />
                                <MenuItem icon="book" text="Long items will truncate when they reach max-width" />
                                <MenuItem icon="more" text="Look in here for even more items">
                                    <MenuItem icon="briefcase" text="Briefcase" />
                                    <MenuItem icon="calculator" text="Calculator" />
                                    <MenuItem icon="dollar" text="Dollar" />
                                    <MenuItem icon="dot" text="Shapes">
                                        <MenuItem icon="full-circle" text="Full circle" />
                                        <MenuItem icon="heart" text="Heart" />
                                        <MenuItem icon="ring" text="Ring" />
                                        <MenuItem icon="square" text="Square" />
                                    </MenuItem>
                                </MenuItem>
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
            
            <div className="row justify-content-center" >
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">App Component</div>

                        <div className="card-body">I'm an App component!</div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('task-manager')) {
    ReactDOM.render(<App />, document.getElementById('task-manager'));
}
