import React, {useState} from "react";
import AutocompleteInput from "./input/AutocompleteInput";
import useSearchHistory from "../../history/useSearchHistory";

export const SearchPageContext = React.createContext(null);
export const SearchHistoryContext = React.createContext(null);

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const searchHistory = useSearchHistory();

    const submitSearch = (searchTerm) => {
        searchHistory.push(searchTerm);
        setSearchTerm(searchTerm);
        // TODO: Close suggestions
    }

    const contextValue = {
        searchTerm,
        submitSearch
    };

    return (
        <SearchPageContext.Provider value={contextValue}>
            <SearchHistoryContext.Provider value={searchHistory}>
                <AutocompleteInput />
            </SearchHistoryContext.Provider>
        </SearchPageContext.Provider>
    );
}

export default SearchPage;