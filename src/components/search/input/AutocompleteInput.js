import {useState} from "react";
import {SearchInput} from "./SearchInput";
import Suggestions from "./suggestions/Suggestions";


const AutocompleteInput = () => {
    const [searchTerm, setSearchTerm] = useState('');   // TODO: move into SearchInput?
    const [isToShowSuggestions, setIsToShowSuggestions] = useState(true);
    console.log('AutocompleteInput renders..');


    const onInputChange = (searchTerm) => {
        setSearchTerm(searchTerm);
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
                value={searchTerm}
                onChange={onInputChange}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
            />
            <Suggestions searchTerm={searchTerm} isToShowSuggestions={isToShowSuggestions} />
        </div>
    );
}

export default AutocompleteInput;