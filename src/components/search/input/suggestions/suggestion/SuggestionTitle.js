import React, {useContext} from "react";
import {SuggestionContext} from "./Suggestion";

const SuggestionTitle = () => {
    const suggestion = useContext(SuggestionContext);
    const style = suggestion.isExistsInSearchHistory ? {'color': 'purple'} : {};   // TODO: convert to class

    return (
        <span style={style}>
            {suggestion.title}
        </span>
    );
}

export default SuggestionTitle;