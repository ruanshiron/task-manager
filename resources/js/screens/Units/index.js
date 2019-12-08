import React, { useState, useEffect } from 'react';

import { ITreeNode, Tree, Tooltip, Position, Icon, Intent, Classes } from '@blueprintjs/core';

import UnitsTree from './UnitsTree'

function UnitsTree2(props) {
    const [states, setStates] = useState({nodes: INITIAL_STATE})

    useEffect(() => {
        console.log(states);    
    });

    function handleNodeClick(nodeData, _nodePath, e) {
        const originallySelected = nodeData.isSelected
        
        if (!e.shiftKey) {
            forEachNode(states, n => (n.isSelected = false))
        }
        nodeData.isSelected = originallySelected == null ? true : !originallySelected
        
        setStates(states)
    }

    function handleNodeCollapse(nodeData) {
        nodeData.isExpanded = false
        setStates(states)
    }

    function forEachNode(nodes, callback) {
        if (nodes == null) {
            return
        }

        for (const node of nodes) {
            callback(node)
            if (node.childNodes != null) forEachNode(node.childNodes, callback)
        }
    }

    function handleNodeExpand(nodeData) {
        nodeData.isExpanded = true
        setStates(states)
        console.log(states);
        
    }

    return (
        <Tree
            contents={states.nodes}
            onNodeClick={handleNodeClick}
            onNodeCollapse={handleNodeCollapse}
            onNodeExpand={handleNodeExpand}
        />
    )
}

export class Units extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div style={{left: "64px"}} className="navigation">
                    <div style={{
                        backgroundColor: "#EBF1F5",
                        minWidth: "285px", 
                        maxWidth: "285px", 
                        padding:"15px", 
                        height: "100vh", 
                        paddingTop: "28px"
                    }}>
                        <UnitsTree />
                    </div>
                </div>
            </div>
        );
    }
    
}

const INITIAL_STATE = [
    {
        id: 0,
        hasCaret: true,
        icon: "folder-close",
        label: "Folder 0",
        isSelected: false
    },
    {
        id: 1,
        icon: "folder-close",
        isExpanded: true,
        label: (
            <Tooltip content="I'm a folder <3" position={Position.RIGHT}>
                Folder 1
            </Tooltip>
        ),
        childNodes: [
            {
                id: 2,
                icon: "document",
                label: "Item 0",
                secondaryLabel: (
                    <Tooltip content="An eye!">
                        <Icon icon="eye-open" />
                    </Tooltip>
                ),
            },
            {
                id: 3,
                icon: <Icon icon="tag" intent={Intent.PRIMARY} className={Classes.TREE_NODE_ICON} />,
                label: "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
            },
            {
                id: 4,
                hasCaret: true,
                icon: "folder-close",
                label: (
                    <Tooltip content="foo" position={Position.RIGHT}>
                        Folder 2
                    </Tooltip>
                ),
                childNodes: [
                    { id: 5, label: "No-Icon Item" },
                    { id: 6, icon: "tag", label: "Item 1" },
                    {
                        id: 7,
                        hasCaret: true,
                        icon: "folder-close",
                        label: "Folder 3",
                        childNodes: [
                            { id: 8, icon: "document", label: "Item 0" },
                            { id: 9, icon: "tag", label: "Item 1" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        hasCaret: true,
        icon: "folder-close",
        label: "Super secret files",
        disabled: true,
    },
];