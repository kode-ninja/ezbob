import {useState} from "react";
import {SearchInput} from "./SearchInput";
import Suggestions from "./suggestions/Suggestions";
import useSearchEntriesDB from "../../../db/useSearchEntriesDB";

const MAX_NUM_OF_SUGGESTIONS = 10;

const AutocompleteInput = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [isToShowSuggestions, setIsToShowSuggestions] = useState(true);
    const {getTitlesByPrefix} = useSearchEntriesDB();

    const updateSuggestions = (searchTerm) => {
        console.log('AutocompleteInput.updateSuggestions()');//TODO: delete/debug
        const suggestedTitles = getTitlesByPrefix(searchTerm, MAX_NUM_OF_SUGGESTIONS);
        setSuggestions(suggestedTitles.map(suggestedTitle => (
            {
                title: suggestedTitle
            }
        )));
    }

    const onInputChange = (searchTerm) => {
        updateSuggestions(searchTerm);
    }

    const onInputFocus = () => {
        setIsToShowSuggestions(true);
    }

    const onInputBlur = () => {
        setIsToShowSuggestions(false);
    }

    return (
        <div className="autocomplete">
            <SearchInput
                onChange={onInputChange}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
            />
            {isToShowSuggestions && <Suggestions
                suggestions={suggestions}
            />}
        </div>
    );
}

export default AutocompleteInput;