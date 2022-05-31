import PropTypes from 'prop-types';
import React from "react";
import SearchResultTitle from "./SearchResultTitle";
import SearchResultDescription from "./SearchResultDescription";

const SearchResult = ({title, url, description}) => {
    return (
        <div className="result">
            <SearchResultTitle title={title} url={url} />
            <SearchResultDescription description={description} />
        </div>
    );
}

SearchResult.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default SearchResult;