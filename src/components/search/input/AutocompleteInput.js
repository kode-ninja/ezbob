import React, {useContext, useEffect, useReducer} from "react";
import {Input} from "./Input";
import Suggestions from "./suggestions/Suggestions";
import {SearchPageContext} from "../SearchPage";

const ACTION_ON_FOCUS = 'onFocus';
const ACTION_ON_BLUR = 'onBlur';
const ACTION_INPUT_SEARCH_TERM_CHANGED = 'inputSearchTermChanged';
const ACTION_SEARCH_TERM_CHANGED = 'searchTermChanged';

const reducer = (state, {type, payload}) => {
    switch (type) {
        case ACTION_INPUT_SEARCH_TERM_CHANGED:
            return {...state, isToHideSuggestions: false, inputSearchTerm: payload.searchTerm};
        case ACTION_ON_FOCUS:
            return {...state, isToHideSuggestions: false};
        case ACTION_ON_BLUR:
            return {...state, isToHideSuggestions: true};
        case ACTION_SEARCH_TERM_CHANGED:
            return {...state, isToHideSuggestions: true, inputSearchTerm: payload.searchTerm};
        default:
            throw new Error(`Invalid action type ${type}`);
    }
}

const createReducerAction = (actionType, actionPayload) => {
    let action = {type: actionType};

    if (actionPayload)
        action.payload = actionPayload;

    return action;
}

const AutocompleteInput = () => {
    const {searchTerm, submitSearch} = useContext(SearchPageContext);

    const initialState = {
        inputSearchTerm: searchTerm,
        isToHideSuggestions: true
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const onSubmit = (e) => {
        e.preventDefault();
        submitSearch(state.inputSearchTerm);
    }

    useEffect(() => {
        dispatch(createReducerAction(ACTION_SEARCH_TERM_CHANGED, {searchTerm: searchTerm}))
    }, [searchTerm]);

    return (
        <div
            className="autocomplete"
            /**
            * tabindex makes the div focusable
            * which is required to manage onFocus and onBlur
            * tabindex="0" means that the element should be focusable in sequential keyboard navigation
            */
            tabIndex={0}
            onFocus={() => dispatch(createReducerAction(ACTION_ON_FOCUS))}
            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                    // Dispatch only when parent component is blurred
                    // Not triggered when swapping focus between children
                    dispatch(createReducerAction(ACTION_ON_BLUR));
                }
            }}
        >
            <form onSubmit={onSubmit} role="search">
                <Input
                    value={state.inputSearchTerm}
                    onChange={searchTerm => dispatch(createReducerAction(ACTION_INPUT_SEARCH_TERM_CHANGED, {searchTerm: searchTerm}))}
                />
            </form>
            <Suggestions searchTerm={state.inputSearchTerm} isToHideSuggestions={state.isToHideSuggestions} />
        </div>
    );
}

export default AutocompleteInput;