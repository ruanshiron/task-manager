import React from 'react'

import { H1, EditableText, H5, H3, H6, Button, Intent, MenuItem, Divider, InputGroup, Classes, Card } from "@blueprintjs/core"


export class NameDescriptionEditable extends React.Component {
    constructor(props) {
        super(props)

        this.nameOnChange = this.nameOnChange.bind(this)
        this.descriptionOnChange = this.descriptionOnChange.bind(this)
    }

    state = {
        name: "",
        description: "",
    }

    nameOnChange(e) {
        this.setState({
            name: e
        }, () => {
            this.props.onChange(this.state)
        })
    }

    descriptionOnChange(e) {
        this.setState({
            description: e
        }, () => {
            this.props.onChange(this.state)
        })
    }

    render() {

        return (
            <div>
                <H1>
                    <EditableText
                        alwaysRenderInput
                        placeholder={this.props.placeholder ? this.props.placeholder : "Tên"}
                        selectAllOnFocus
                        fill
                        confirmOnEnterKey
                        value={this.state.name}
                        onChange={this.nameOnChange}
                    />
                </H1>
                <EditableText
                    alwaysRenderInput
                    maxLength={255}
                    maxLines={12}
                    minLines={3}
                    multiline={true}
                    placeholder="Mô tả..."
                    selectAllOnFocus
                    confirmOnEnterKey
                    value={this.state.description}
                    onChange={this.descriptionOnChange}
                />
            </div>
        )
    }
}
