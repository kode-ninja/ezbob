import PropTypes from 'prop-types';
import React from "react";
import {millisToSeconds} from "../../../common/millisToSeconds";

const SearchResultsMetaData = ({executionTimeMS, numOfResults}) => {
    return (
        <div className="meta">
            {numOfResults} results ({millisToSeconds(executionTimeMS)} seconds)
        </div>
    );
}

SearchResultsMetaData.propTypes = {
    executionTimeMS: PropTypes.number.isRequired,
    numOfResults: PropTypes.number.isRequired
};

export default SearchResultsMetaData;