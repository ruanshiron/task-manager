import React from 'react';

import { Button, MenuItem} from "@blueprintjs/core"

import {
    areFilmsEqual,
    createFilm,
    filmSelectProps,
    maybeAddCreatedFilmToArrays,
    maybeDeleteCreatedFilmFromArrays,
    renderCreateFilmOption,
    TOP_100_FILMS,
} from '../common/film'

import { Select } from '@blueprintjs/select';

export class ItemSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allowCreate: false,
            createdItems: [],
            disableItems: false,
            disabled: false,
            film: {id: 0, title: "(No Selection)"},
            filterable: true,
            hasInitialContent: false,
            items: this.props.items? [...this.props.items, {id: 0, title: "(No Selection)"}]: filmSelectProps.items,
            minimal: true,
            resetOnClose: false,
            resetOnQuery: true,
            resetOnSelect: false,
        }
        this.onItemSelect = this.onItemSelect.bind(this)
    }

    onItemSelect(item) {
        this.setState({ selected: item })
        this.props.onItemSelect(item)
    }

    render() {
        const { allowCreate, disabled, disableItems, film, minimal, ...flags } = this.state;

        const initialContent = this.state.hasInitialContent ? (
            <MenuItem disabled={true} text={`${TOP_100_FILMS.length} items loaded.`} />
        ) : (
            undefined
        );
        const maybeCreateNewItemFromQuery = allowCreate ? createFilm : undefined;
        const maybeCreateNewItemRenderer = allowCreate ? renderCreateFilmOption : null;

        return (
            <Select
                {...filmSelectProps}
                {...flags}
                createNewItemFromQuery={maybeCreateNewItemFromQuery}
                createNewItemRenderer={maybeCreateNewItemRenderer}
                disabled={disabled}
                itemDisabled={this.isItemDisabled}
                itemsEqual={areFilmsEqual}
                // we may customize the default filmSelectProps.items by
                // adding newly created items to the list, so pass our own
                items={this.state.items}
                initialContent={initialContent}
                noResults={<MenuItem disabled={true} text="No results." />}
                onItemSelect={this.handleValueChange}
                popoverProps={{ minimal }}
            >
                <Button
                    rightIcon="caret-down"
                    text={film ? `${film.title}` : "(No selection)"}
                    disabled={disabled}
                />
            </Select>
        )
    }


    handleValueChange = (film) => {
        // Delete the old film from the list if it was newly created.
        const { createdItems, items } = maybeDeleteCreatedFilmFromArrays(
            this.state.items,
            this.state.createdItems,
            this.state.film,
        );
        // Add the new film to the list if it is newly created.
        const { createdItems: nextCreatedItems, items: nextItems } = maybeAddCreatedFilmToArrays(
            items,
            createdItems,
            film,
        );
        this.setState({ createdItems: nextCreatedItems, film, items: nextItems }, () => {
            if (this.props.onChange) this.props.onChange(this.state.film)
        });
    };

    handleSwitchChange(prop) {
        return (event) => {
            const checked = event.currentTarget.checked;
            this.setState(state => ({ ...state, [prop]: checked }));
        };
    }

    isItemDisabled = (film) => this.state.disableItems && film.year < 2000;
}
