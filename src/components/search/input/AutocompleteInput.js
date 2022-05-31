import React, {useContext, useState} from "react";
import {SearchInput} from "./SearchInput";
import Suggestions from "./suggestions/Suggestions";
import {SearchPageContext} from "../SearchPage";


const AutocompleteInput = () => {
    const {searchTerm, submitSearch} = useContext(SearchPageContext);
    const [inputSearchTerm, setInputSearchTerm] = useState(searchTerm);
    const [isToShowSuggestions, setIsToShowSuggestions] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        submitSearch(inputSearchTerm);
    }

    return (
        <div
            className="autocomplete"
            /**
            * tabindex makes the div focusable
            * which is required to manage onFocus and onBlur
            * tabindex="0" means that the element should be focusable in sequential keyboard navigation
            */
            tabIndex={0}
            onFocus={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                    // Not triggered when swapping focus between children
                    setIsToShowSuggestions(true);
                }
            }}
            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                    // Not triggered when swapping focus between children
                    setIsToShowSuggestions(false);
                }
            }}
        >
            <form onSubmit={onSubmit}>
                <SearchInput
                    value={inputSearchTerm}
                    onChange={searchTerm => setInputSearchTerm(searchTerm)}
                />
            </form>
            <Suggestions searchTerm={inputSearchTerm} isToShowSuggestions={isToShowSuggestions} />
        </div>
    );
}

export default AutocompleteInput;