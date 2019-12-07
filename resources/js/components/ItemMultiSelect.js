import React from 'react';

import { Button, MenuItem, Intent } from "@blueprintjs/core"

import {
    areFilmsEqual,
    arrayContainsFilm,
    createFilm,
    filmSelectProps,
    IFilm,
    maybeAddCreatedFilmToArrays,
    maybeDeleteCreatedFilmFromArrays,
    renderCreateFilmOption,
    TOP_100_FILMS,
} from '../common/film'

import { Select, MultiSelect } from '@blueprintjs/select';


const INTENTS = [Intent.NONE, Intent.PRIMARY, Intent.SUCCESS, Intent.DANGER, Intent.WARNING];

export class ItemMultiSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allowCreate: false,
            createdItems: [],
            fill: true,
            films: [],
            hasInitialContent: false,
            intent: false,
            items: this.props.items? this.props.items: filmSelectProps.items,
            openOnKeyDown: false,
            popoverMinimal: true,
            resetOnSelect: true,
            tagMinimal: false,
        }
    }

    render() {
        const { allowCreate, films, hasInitialContent, tagMinimal, popoverMinimal, ...flags } = this.state;
        const getTagProps = (_value, index) => ({
            intent: this.state.intent ? INTENTS[index % INTENTS.length] : Intent.NONE,
            minimal: tagMinimal,
        });

        const initialContent = this.state.hasInitialContent ? (
            <MenuItem disabled={true} text={`${TOP_100_FILMS.length} items loaded.`} />
        ) : (
                // explicit undefined (not null) for default behavior (show full list)
                undefined
            );
        const maybeCreateNewItemFromQuery = allowCreate ? createFilm : undefined;
        const maybeCreateNewItemRenderer = allowCreate ? renderCreateFilmOption : null;

        const clearButton =
            films.length > 0 ? <Button icon="cross" minimal={true} onClick={this.handleClear} /> : undefined;

        return (
            <MultiSelect
                {...filmSelectProps}
                {...flags}
                createNewItemFromQuery={maybeCreateNewItemFromQuery}
                createNewItemRenderer={maybeCreateNewItemRenderer}
                initialContent={initialContent}
                itemRenderer={this.renderFilm}
                itemsEqual={areFilmsEqual}
                // we may customize the default filmSelectProps.items by
                // adding newly created items to the list, so pass our own
                items={this.state.items}
                noResults={<MenuItem disabled={true} text="No results." />}
                onItemSelect={this.handleFilmSelect}
                onItemsPaste={this.handleFilmsPaste}
                popoverProps={{ minimal: popoverMinimal }}
                tagRenderer={this.renderTag}
                tagInputProps={{ tagProps: getTagProps, onRemove: this.handleTagRemove, rightElement: clearButton }}
                selectedItems={this.state.films}
            />
        );
    }

    renderTag = (film) => film.title;

    // NOTE: not using Films.itemRenderer here so we can set icons.
    renderFilm = (film, { modifiers, handleClick }) => {
        if (!modifiers.matchesPredicate) {
            return null;
        }
        return (
            <MenuItem
                active={modifiers.active}
                icon={this.isFilmSelected(film) ? "tick" : "blank"}
                key={film.rank}
                label={film.year.toString()}
                onClick={handleClick}
                text={`${film.rank}. ${film.title}`}
                shouldDismissPopover={false}
            />
        );
    };

    handleTagRemove = (_tag, index) => {
        this.deselectFilm(index);
    };

    getSelectedFilmIndex(film) {
        return this.state.films.indexOf(film);
    }

    isFilmSelected(film) {
        return this.getSelectedFilmIndex(film) !== -1;
    }

    selectFilm(film) {
        this.selectFilms([film]);
    }

    selectFilms(filmsToSelect) {
        const { createdItems, films, items } = this.state;

        let nextCreatedItems = createdItems.slice();
        let nextFilms = films.slice();
        let nextItems = items.slice();

        filmsToSelect.forEach(film => {
            const results = maybeAddCreatedFilmToArrays(nextItems, nextCreatedItems, film);
            nextItems = results.items;
            nextCreatedItems = results.createdItems;
            // Avoid re-creating an item that is already selected (the "Create
            // Item" option will be shown even if it matches an already selected
            // item).
            nextFilms = !arrayContainsFilm(nextFilms, film) ? [...nextFilms, film] : nextFilms;
        });

        this.setState({
            createdItems: nextCreatedItems,
            films: nextFilms,
            items: nextItems,
        }, () => {
            if (this.props.onChange) this.props.onChange(this.state.films)
        });

    }

    deselectFilm(index) {
        const { films } = this.state;

        const film = films[index];
        const { createdItems: nextCreatedItems, items: nextItems } = maybeDeleteCreatedFilmFromArrays(
            this.state.items,
            this.state.createdItems,
            film,
        );

        // Delete the item if the user manually created it.
        this.setState({
            createdItems: nextCreatedItems,
            films: films.filter((_film, i) => i !== index),
            items: nextItems,
        }, () => {
            if (this.props.onChange) this.props.onChange(this.state.films)
        });

    
    }

    handleFilmSelect = (film) => {
        if (!this.isFilmSelected(film)) {
            this.selectFilm(film);
        } else {
            this.deselectFilm(this.getSelectedFilmIndex(film));
        }

    };

    handleFilmsPaste = (films) => {
        // On paste, don't bother with deselecting already selected values, just
        // add the new ones.
        this.selectFilms(films);

    };

    handleSwitchChange(prop) {
        return (event) => {
            const checked = event.currentTarget.checked;
            this.setState(state => ({ ...state, [prop]: checked }));
        };
    }

    handleClear = () => this.setState({ films: [] });

}
