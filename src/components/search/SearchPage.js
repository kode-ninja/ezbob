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
    }

    const contextValue = {
        searchTerm,
        submitSearch
    };

    return (
        <SearchHistoryContext.Provider value={searchHistory}>
            <SearchPageContext.Provider value={contextValue}>
                <AutocompleteInput />
            </SearchPageContext.Provider>
        </SearchHistoryContext.Provider>
    );
}

export default SearchPage;