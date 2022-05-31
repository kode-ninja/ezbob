import React, {useContext} from "react";
import {SuggestionContext} from "./Suggestion";
import classNames from "classnames";

const SuggestionTitle = () => {
    const suggestion = useContext(SuggestionContext);

    return (
        <span className={classNames('title', {'in-history': suggestion.isExistsInSearchHistory})}>
            {suggestion.title}
        </span>
    );
}

export default SuggestionTitle;