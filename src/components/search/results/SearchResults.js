import PropTypes from 'prop-types';
import {getSearchResults} from "../../../db/api/getSearchResults";
import SearchResult from "./result/SearchResult";
import SearchResultsMetaData from "./SearchResultsMetaData";

const SearchResults = ({searchTerm}) => {
    const start = performance.now();
    const dbSearchResults = getSearchResults(searchTerm);
    const executionTimeMS = performance.now() - start;


    return (
        <div className="results">
            <SearchResultsMetaData executionTimeMS={executionTimeMS} numOfResults={dbSearchResults.length} />

            {dbSearchResults.map(dbSearchResult =>
                <SearchResult
                    key={dbSearchResult.id}
                    description={dbSearchResult.description}
                    title={dbSearchResult.title}
                    url={dbSearchResult.url}
                />
            )}
        </div>
    );
}

SearchResults.propTypes = {
    searchTerm: PropTypes.string.isRequired
};

export default SearchResults;