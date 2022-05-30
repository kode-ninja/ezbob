import PropTypes from 'prop-types';
import Suggestion from "./suggestion/Suggestion";

const Suggestions = ({suggestions}) => {
    if (suggestions.length === 0)
        return null;

    return (
        <div className="suggestions">
            {
                suggestions.map((suggestionObj, idx) => {    // TODO: provide meaningful "key" or is it better to teardown and recreate the tree on render?
                    return <Suggestion key={idx} title={suggestionObj.title} />;
                })
            }
        </div>
    )
}

Suggestions.propTypes = {
    suggestions: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired
    }))
};

export default Suggestions;