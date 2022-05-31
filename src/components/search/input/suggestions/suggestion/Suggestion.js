import PropTypes from 'prop-types';
import React, {useContext} from "react";
import SuggestionIcon from "./SuggestionIcon";
import SuggestionTitle from "./SuggestionTitle";
import SuggestionRemoveFromHistory from "./SuggestionRemoveFromHistory";
import {SearchHistoryContext, SearchPageContext} from "../../../SearchPage";

export const SuggestionContext = React.createContext(null);

const Suggestion = ({title}) => {
    const searchHistory = useContext(SearchHistoryContext);
    const {submitSearch} = useContext(SearchPageContext);

    const contextValue = {
        title: title,
        isExistsInSearchHistory: searchHistory.exists(title)
    }

    return (
        <div className="suggestion">
            <SuggestionContext.Provider value={contextValue}>
                <span onClick={() => submitSearch(title)}>
                    <SuggestionIcon /><SuggestionTitle />
                </span>
                <SuggestionRemoveFromHistory />
            </SuggestionContext.Provider>
        </div>
    );
}

Suggestion.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Suggestion;