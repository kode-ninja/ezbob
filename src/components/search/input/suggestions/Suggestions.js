import PropTypes from 'prop-types';
import Suggestion from "./suggestion/Suggestion";
import {getTitlesByPrefix} from "../../../../db/api/getTitlesByPrefix";
import {useMemo} from "react";

const MAX_NUM_OF_SUGGESTIONS = 10;

const Suggestions = ({searchTerm, isToShowSuggestions}) => {
    // Memoize suggestion calculation to prevent re-calculation (or a call to the DB)
    // if input gains focus again.
    // Memoization depends on the search term - if it doesn't change, no need to re-calculate the suggestions
    const suggestions = useMemo(() => {
        const suggestedTitles = getTitlesByPrefix(searchTerm, MAX_NUM_OF_SUGGESTIONS);
        return suggestedTitles.map((suggestedTitle, idx) => <Suggestion key={idx} title={suggestedTitle}/>);    // TODO: provide meaningful "key" or is it better, performance wise, to teardown and recreate the tree on render?
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