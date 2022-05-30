import PropTypes from 'prop-types';
import React, {useContext} from "react";
import {SearchHistoryContext} from "../../AutocompleteInput";

const SuggestionTitle = ({title}) => {
    const searchHistory = useContext(SearchHistoryContext);
    const style = searchHistory.exists(title) ? {'color': 'purple'} : {};   // TODO: convert to class

    return (
        <span style={style}>
            {title}
        </span>
    );
}

SuggestionTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SuggestionTitle;