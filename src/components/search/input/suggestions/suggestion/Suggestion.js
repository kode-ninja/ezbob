import PropTypes from 'prop-types';
import SuggestionMagnifyingIcon from "./icons/SuggestionMagnifyingIcon";
import SuggestionTitle from "./SuggestionTitle";

const Suggestion = ({title}) => {
    return (
        <div className="suggestion">
            <SuggestionMagnifyingIcon /><SuggestionTitle title={title} />
        </div>
    );
}

Suggestion.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Suggestion;