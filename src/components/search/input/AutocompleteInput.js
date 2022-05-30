import {useState} from "react";
import {SearchInput} from "./SearchInput";
import Suggestions from "./suggestions/Suggestions";


const AutocompleteInput = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isToShowSuggestions, setIsToShowSuggestions] = useState(true);

    return (
        <div className="autocomplete">
            <SearchInput
                value={searchTerm}
                onChange={searchTerm => setSearchTerm(searchTerm)}
                onFocus={() => setIsToShowSuggestions(true)}
                onBlur={() => setIsToShowSuggestions(false)}
            />
            <Suggestions searchTerm={searchTerm} isToShowSuggestions={isToShowSuggestions} />
        </div>
    );
}

export default AutocompleteInput;