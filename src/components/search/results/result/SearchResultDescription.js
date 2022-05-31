import PropTypes from 'prop-types';
import React from "react";

const SearchResultDescription = ({description}) => {
    return (
        <div className="description">
            {description}
        </div>
    );
}

SearchResultDescription.propTypes = {
    description: PropTypes.string.isRequired
};

export default SearchResultDescription;