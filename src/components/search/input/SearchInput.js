import PropTypes from 'prop-types';
import {useEffect, useRef} from "react";


export const SearchInput = ({value, onChange, onFocus, onBlur}) => {
    const inputRef = useRef();

    const focus = () => {
        inputRef.current.focus();
    }

    useEffect(() => {
        focus();
    }, []);

    return (
        <input
            ref={inputRef}
            className="search"
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}

SearchInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
};