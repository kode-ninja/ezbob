import {useState} from "react";
import {SearchInput} from "./SearchInput";
import Suggestions from "./suggestions/Suggestions";
import useSearchEntriesDB from "../../../db/useSearchEntriesDB";

const MAX_NUM_OF_SUGGESTIONS = 10;

const AutocompleteInput = () => {
    const [inputValue, setInputValue] = useState('');   // TODO: move into SearchInput?
    const [suggestions, setSuggestions] = useState([]);
    const {getTitlesByPrefix} = useSearchEntriesDB();

    const updateSuggestions = (searchTerm) => {
        const suggestedTitles = getTitlesByPrefix(searchTerm, MAX_NUM_OF_SUGGESTIONS);
        setSuggestions(suggestedTitles.map(suggestedTitle => (
            {
                title: suggestedTitle
            }
        )));
    }

    const onInputChange = (e) => {
        const searchTerm = e.target.value;
        setInputValue(searchTerm);
        updateSuggestions(searchTerm);
    }

    return (
        <div className="autocomplete">
            <SearchInput value={inputValue} onChange={onInputChange} />
            <Suggestions suggestions={suggestions} />
        </div>
    );
}

export default AutocompleteInput;