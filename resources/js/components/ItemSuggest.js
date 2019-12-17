import React from 'react';

import { Button, MenuItem, Classes } from "@blueprintjs/core"

import {
    areFilmsEqual,
    createFilm,
    filmSelectProps,
    maybeAddCreatedFilmToArrays,
    maybeDeleteCreatedFilmFromArrays,
    renderCreateFilmOption,
    TOP_100_FILMS,
} from '../common/film'

import { Select, Suggest } from '@blueprintjs/select';

export class ItemSuggest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allowCreate: false,
            createdItems: [],
            disableItems: false,
            disabled: false,
            film: this.props.selected ? this.props.selected : { id: 0, title: "" },
            filterable: true,
            hasInitialContent: false,
            items: this.props.items ? [...this.props.items, { id: 0, title: "null" }] : filmSelectProps.items,
            minimal: true,
            resetOnClose: false,
            resetOnQuery: true,
            resetOnSelect: false,
        }
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
            <Suggest
                {...filmSelectProps}
                {...flags}
                {...this.props}
                createNewItemFromQuery={maybeCreateNewItemFromQuery}
                createNewItemRenderer={maybeCreateNewItemRenderer}
                inputValueRenderer={this.renderInputValue}
                itemsEqual={areFilmsEqual}
                // we may customize the default filmSelectProps.items by
                // adding newly created items to the list, so pass our own.
                items={this.state.items}
                noResults={<MenuItem disabled={true} text="No results." />}
                onItemSelect={this.handleValueChange}
                popoverProps={{ minimal }}
                selectedItem={this.state.film}
            />
        )
    }

    renderInputValue = (film) => film.title


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
