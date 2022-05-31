import PropTypes from 'prop-types';
import Suggestion from "./suggestion/Suggestion";
import {getSuggestions} from "../../../../db/api/getSuggestions";
import {useMemo} from "react";

const MAX_NUM_OF_SUGGESTIONS = 10;

const Suggestions = ({searchTerm, isToHideSuggestions}) => {
    // Memoize suggestion calculation to prevent
    // re-calculation (DB/Server call) if input gains focus again.
    // Memoization depends on the search term - if it doesn't change, no need to re-calculate the suggestions
    const suggestions = useMemo(() => {
        const dbSuggestions = getSuggestions(searchTerm, MAX_NUM_OF_SUGGESTIONS);

        return dbSuggestions.map((suggestion) => <Suggestion key={suggestion.id} title={suggestion.title}/>);
    }, [searchTerm]);

    if (suggestions.length === 0 || isToHideSuggestions)
        return null;

    return (
        <div className="suggestions" data-testid="suggestions">
            {suggestions}
        </div>
    )
}

Suggestions.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    isToHideSuggestions: PropTypes.bool.isRequired,
};

export default Suggestions;