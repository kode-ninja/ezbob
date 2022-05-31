import React, {useContext} from "react";
import {SuggestionContext} from "./Suggestion";
import {SearchHistoryContext} from "../../../SearchPage";

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