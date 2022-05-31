import {useContext} from "react";
import { FaSearch } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import {SuggestionContext} from "./Suggestion";

const SuggestionIcon = () => {
    const {isExistsInSearchHistory} = useContext(SuggestionContext);
    const icon = isExistsInSearchHistory ? <FaRegClock /> : <FaSearch />;

    return <span className="suggestion-icon">{icon}</span>;
}

export default SuggestionIcon;