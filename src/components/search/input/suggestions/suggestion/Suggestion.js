import PropTypes from 'prop-types';
import SuggestionMagnifyingIcon from "./icons/SuggestionMagnifyingIcon";

const Suggestion = ({title}) => {
    return (
        <div className="suggestion">
            <SuggestionMagnifyingIcon /> {title}
        </div>
    );
}

Suggestion.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Suggestion;