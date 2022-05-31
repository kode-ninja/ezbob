import PropTypes from 'prop-types';
import Suggestion from "./suggestion/Suggestion";
import {getSuggestions} from "../../../../db/api/getSuggestions";
import {useEffect, useState} from "react";

const MAX_NUM_OF_SUGGESTIONS = 10;

const Suggestions = ({searchTerm, isToHideSuggestions}) => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchSuggestions = () => {
            getSuggestions(searchTerm, MAX_NUM_OF_SUGGESTIONS)
            .then((fetchedSuggestions) => {
                setSuggestions(fetchedSuggestions);
            })
            .catch(e => {
                // requirements?
                console.error('Failed to fetch suggestions', e);
            });
        }

        fetchSuggestions();
    }, [searchTerm]);

    if (suggestions.length === 0 || isToHideSuggestions)
        return null;

    return (
        <div className="suggestions" data-testid="suggestions">
            {suggestions.map((suggestion) => <Suggestion key={suggestion.id} title={suggestion.title}/>)}
        </div>
    )
}

Suggestions.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    isToHideSuggestions: PropTypes.bool.isRequired,
};

export default Suggestions;