import React, {useState} from "react";
import {SearchInput} from "./SearchInput";
import Suggestions from "./suggestions/Suggestions";
import useSearchHistory from "../../../history/useSearchHistory";

export const SearchHistoryContext = React.createContext(null);

const AutocompleteInput = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isToShowSuggestions, setIsToShowSuggestions] = useState(true);
    const searchHistory = useSearchHistory();

    const onSearchSubmit = (e) => {
        e.preventDefault();
        searchHistory.push(searchTerm);
    }

    return (
        <div className="autocomplete">
            <SearchHistoryContext.Provider value={searchHistory}>
                <form onSubmit={onSearchSubmit}>
                    <SearchInput
                        value={searchTerm}
                        onChange={searchTerm => setSearchTerm(searchTerm)}
                        onFocus={() => setIsToShowSuggestions(true)}
                        onBlur={() => setIsToShowSuggestions(false)}
                    />
                </form>
                <Suggestions searchTerm={searchTerm} isToShowSuggestions={isToShowSuggestions} />
            </SearchHistoryContext.Provider>
        </div>
    );
}

export default AutocompleteInput;