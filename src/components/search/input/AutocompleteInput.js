import React, {useState} from "react";
import {SearchInput} from "./SearchInput";
import Suggestions from "./suggestions/Suggestions";
import useSearchHistory from "../../../history/useSearchHistory";

export const SearchHistoryContext = React.createContext(null);

const AutocompleteInput = () => {
    const [inputSearchTerm, setInputSearchTerm] = useState('');
    const [isToShowSuggestions, setIsToShowSuggestions] = useState(true);
    const searchHistory = useSearchHistory();

    const onSearch = (e) => {
        e.preventDefault();
        searchHistory.push(inputSearchTerm);
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
            <SearchHistoryContext.Provider value={searchHistory}>
                <form onSubmit={onSearch}>
                    <SearchInput
                        value={inputSearchTerm}
                        onChange={searchTerm => setInputSearchTerm(searchTerm)}
                    />
                </form>
                <Suggestions searchTerm={inputSearchTerm} isToShowSuggestions={isToShowSuggestions} />
            </SearchHistoryContext.Provider>
        </div>
    );
}

export default AutocompleteInput;