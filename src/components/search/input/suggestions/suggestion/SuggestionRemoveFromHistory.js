import React, {useContext} from "react";
import {SearchHistoryContext} from "../../AutocompleteInput";
import {SuggestionContext} from "./Suggestion";

const SuggestionRemoveFromHistory = () => {
    const {title} = useContext(SuggestionContext);
    const searchHistory = useContext(SearchHistoryContext);

    return (
        <div
            title="Remove from history"
            className="remove"
            onClick={() => searchHistory.remove(title)}
        >
            Remove
        </div>
    );
}

export default SuggestionRemoveFromHistory;