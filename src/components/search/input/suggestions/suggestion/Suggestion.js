import PropTypes from 'prop-types';
import React, {useContext} from "react";
import SuggestionIcon from "./SuggestionIcon";
import SuggestionTitle from "./SuggestionTitle";
import SuggestionRemoveFromHistory from "./SuggestionRemoveFromHistory";
import {SearchHistoryContext} from "../../../SearchPage";

export const SuggestionContext = React.createContext(null);

const Suggestion = ({title}) => {
    const searchHistory = useContext(SearchHistoryContext);
    const contextValue = {
        title: title,
        isExistsInSearchHistory: searchHistory.exists(title)
    }

    return (
        <div className="suggestion">
            <SuggestionContext.Provider value={contextValue}>
                <SuggestionIcon /><SuggestionTitle /><SuggestionRemoveFromHistory />
            </SuggestionContext.Provider>
        </div>
    );
}

Suggestion.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Suggestion;