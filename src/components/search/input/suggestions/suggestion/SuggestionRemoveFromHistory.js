import React, {useContext} from "react";
import {SearchHistoryContext} from "../../AutocompleteInput";
import {SuggestionContext} from "./Suggestion";

const SuggestionRemoveFromHistory = () => {
    const {title} = useContext(SuggestionContext);
    const searchHistory = useContext(SearchHistoryContext);

const onClick = (e) => {
    e.preventDefault();
    console.log('ONCLICK');
    searchHistory.remove(title);
}

    return (
        <div
            title="Remove from history"
            className="remove"
            onClick={e => onClick(e)}
        >
            Remove
        </div>
    );
}

export default SuggestionRemoveFromHistory;