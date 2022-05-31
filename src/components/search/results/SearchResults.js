import PropTypes from 'prop-types';
import {getSearchResults} from "../../../db/api/getSearchResults";
import SearchResult from "./result/SearchResult";
import SearchResultsMetaData from "./SearchResultsMetaData";
import {useEffect, useRef, useState} from "react";

const SearchResults = ({searchTerm}) => {
    const [searchResults, setSearchResults] = useState([]);
    const executionTimeMS = useRef(0);

    useEffect(() => {
        const fetchSearchResults = () => {
            const start = performance.now();
            getSearchResults(searchTerm)
                .then(fetchedSearchResults => {
                    setSearchResults(fetchedSearchResults);
                })
                .catch(e => {
                   // requirements?
                   console.error('Failed to fetch search results', e);
                })
                .finally(() => {
                    executionTimeMS.current = performance.now() - start;
                });
        }
        fetchSearchResults();
    }, [searchTerm]);


    if (searchResults.length === 0)
        return null;

    return (
        <div className="results">
            <SearchResultsMetaData executionTimeMS={executionTimeMS.current} numOfResults={searchResults.length} />

            {searchResults.map(searchResult =>
                <SearchResult
                    key={searchResult.id}
                    description={searchResult.description}
                    title={searchResult.title}
                    url={searchResult.url}
                />
            )}
        </div>
    );
}

SearchResults.propTypes = {
    searchTerm: PropTypes.string.isRequired
};

export default SearchResults;