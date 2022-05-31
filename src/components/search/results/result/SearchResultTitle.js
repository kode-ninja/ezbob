import PropTypes from 'prop-types';
import React from "react";

const SearchResultTitle = ({title, url}) => {
    return (
        <div className="title">
            <a href={url}>{title}</a>
        </div>
    );
}

SearchResultTitle.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default SearchResultTitle;