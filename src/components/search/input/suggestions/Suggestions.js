import PropTypes from 'prop-types';
import Suggestion from "./suggestion/Suggestion";
import {getSuggestions} from "../../../../db/api/getSuggestions";
import {useMemo} from "react";

const MAX_NUM_OF_SUGGESTIONS = 10;

const Suggestions = ({searchTerm, isToShowSuggestions}) => {
    // Memoize suggestion calculation to prevent
    // re-calculation (DB/Server call) if input gains focus again.
    // Memoization depends on the search term - if it doesn't change, no need to re-calculate the suggestions
    const suggestions = useMemo(() => {
        console.log('Suggestions are being recalculated!'); // TODO: delete
        const dbSuggestions = getSuggestions(searchTerm, MAX_NUM_OF_SUGGESTIONS);

        return dbSuggestions.map((suggestion) => <Suggestion key={suggestion.id} title={suggestion.title}/>);
    }, [searchTerm]);

    if (suggestions.length === 0 || !isToShowSuggestions)
        return null;

    return (
        <div className="suggestions">
            {suggestions}
        </div>
    )
}

Suggestions.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    isToShowSuggestions: PropTypes.bool.isRequired,
};

export default Suggestions;