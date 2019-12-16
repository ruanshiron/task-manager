import React, { useState, useEffect } from 'react';

import { useParams, useHistory } from 'react-router-dom'

import { ITreeNode, Tree, Tooltip, Position, Icon, Intent, Classes, Button } from '@blueprintjs/core';


export default function UnitsTree() {
    const [state, setState] = useState({ nodes: INITIAL_STATE });

    const history = useHistory()

    const handleNodeClick = (nodeData, _nodePath, e) => {
        const originallySelected = nodeData.isSelected;
        if (!e.shiftKey) {
            forEachNode(state.nodes, n => (n.isSelected = false));
        }
        nodeData.isSelected = originallySelected == null ? true : !originallySelected;
        setState({
            nodes: state.nodes
        });
        history.push(nodeData.path)

    };

    const handleNodeCollapse = (nodeData) => {
        nodeData.isExpanded = false;
        setState({
            ...state,
            nodes: state.nodes
        });
    };

    const handleNodeExpand = (nodeData) => {
        nodeData.isExpanded = true;
        setState({
            ...state,
            nodes: state.nodes
        });
    };

    const forEachNode = (nodes, callback) => {
        if (nodes == null) {
            return;
        }

        for (const node of nodes) {
            callback(node);
            if (node.childNodes != null) forEachNode(node.childNodes, callback);
        }
    }

    let params = useParams()

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/units/',
        })
            .then(response => {
                setState({
                    nodes: unitsParser(response.data)
                })
            });

    }, [])




    const unitsParser = (units) => {
        return units.map(u => {
            return {
                ...u,
                childNodes: unitsParser(u.children),
                path: '/units/' + u.id,
                isSelected: u.id == params.unitId? true: false,
                hasCaret: u.children.length == 0 ? false: true,
                isExpanded: true,
                icon: "layers",
                label: (
                    <Tooltip content={u.name} position={Position.RIGHT}>
                        {u.name}
                    </Tooltip>
                ),
            }
        })
    }

    return (
        <div className="container-fluid">
            <Tree
                contents={state.nodes}
                onNodeClick={handleNodeClick}
                onNodeCollapse={handleNodeCollapse}
                onNodeExpand={handleNodeExpand}
                onNodeDoubleClick={() => {}}
            />
        </div>
    )

}


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
                childNodes: [
                    {
                        id: 3,
                        hasCaret: true,
                        icon: "layers",
                        label: "Unit 3",
                        childNodes: [

                        ],
                    },
                ],
            },
        ],
    },
];
