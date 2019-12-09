import React, { useState, useEffect } from 'react';

import { ITreeNode, Tree, Tooltip, Position, Icon, Intent, Classes, Button } from '@blueprintjs/core';

class UnitsTree extends React.Component {
    state = { nodes: INITIAL_STATE };

    handleNodeClick = (nodeData, _nodePath, e) => {
        const originallySelected = nodeData.isSelected;
        if (!e.shiftKey) {
            this.forEachNode(this.state.nodes, n => (n.isSelected = false));
        }
        nodeData.isSelected = originallySelected == null ? true : !originallySelected;
        this.setState(this.state);
    };

    handleNodeCollapse = (nodeData) => {
        nodeData.isExpanded = false;
        this.setState(this.state);
    };

    handleNodeExpand = (nodeData) => {
        nodeData.isExpanded = true;
        this.setState(this.state);
    };

    forEachNode(nodes, callback) {
        if (nodes == null) {
            return;
        }

        for (const node of nodes) {
            callback(node);
            if (node.childNodes!=null) this.forEachNode(node.childNodes, callback);
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <Tree
                    contents={this.state.nodes}
                    onNodeClick={this.handleNodeClick}
                    onNodeCollapse={this.handleNodeCollapse}
                    onNodeExpand={this.handleNodeExpand}
                />
            </div>
        )
    }
}


export default UnitsTree

const INITIAL_STATE = [
    {
        id: 0,
        hasCaret: true,
        icon: "layers",
        label: (
            <Tooltip content="foo" position={Position.RIGHT}>
                Unit 0
            </Tooltip>
        ),
        secondaryLabel: (
            <div>
                <Button minimal icon="plus" />
                <Button minimal icon="minus" />
            </div>
        ),
        childNodes: [
            {
                id: 4,
                hasCaret: true,
                icon: "layers",
                label: (
                    <Tooltip content="foo" position={Position.RIGHT}>
                        Unit 4
                    </Tooltip>
                ),
                secondaryLabel: (
                    <div>
                        <Button minimal icon="plus" />
                        <Button minimal icon="minus" />
                    </div>
                ),
                childNodes: [
                    {
                        id: 5,
                        hasCaret: true,
                        icon: "layers",
                        label: (
                            <Tooltip content="foo" position={Position.RIGHT}>
                                Unit 5
                            </Tooltip>
                        ),
                        secondaryLabel: (
                            <div>
                                <Button minimal icon="plus" />
                                <Button minimal icon="minus" />
                            </div>
                        ),
                        childNodes: [
                            {
                                id: 6,
                                hasCaret: true,
                                icon: "layers",
                                label: (
                                    <Tooltip content="foo" position={Position.RIGHT}>
                                        Unit 6
                                    </Tooltip>
                                ),
                                secondaryLabel: (
                                    <div>
                                        <Button minimal icon="plus" />
                                        <Button minimal icon="minus" />
                                    </div>
                                ),
                                childNodes: [
                                    
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 1,
        icon: "layers",
        isExpanded: true,
        label: (
            <Tooltip content="I'm a Unit <3" position={Position.RIGHT}>
                Unit 1
            </Tooltip>
        ),
        secondaryLabel: (
            <div>
                <Button minimal icon="plus" />
                <Button minimal icon="minus" />
            </div>
        ),
        childNodes: [
            {
                id: 2,
                hasCaret: true,
                icon: "layers",
                label: (
                    <Tooltip content="foo" position={Position.RIGHT}>
                        Unit 2
                    </Tooltip>
                ),
                secondaryLabel: (
                    <div>
                        <Button minimal icon="plus" />
                        <Button minimal icon="minus" />
                    </div>
                ),
                childNodes: [
                    {
                        id: 3,
                        hasCaret: true,
                        icon: "layers",
                        label: "Unit 3",
                        secondaryLabel: (
                            <div>
                                <Button minimal icon="plus" />
                                <Button minimal icon="minus" />
                            </div>
                        ),
                        childNodes: [
                            
                        ],
                    },
                ],
            },
        ],
    },
];