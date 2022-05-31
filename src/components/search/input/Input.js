import PropTypes from 'prop-types';
import {useEffect, useRef} from "react";


export const Input = ({value, onChange}) => {
    const inputRef = useRef();

    useEffect(() => {
        // may use autofocus attribute,
        // but supported only for 80% of current browsers
        inputRef.current.focus();
    }, []);

    return (
        <input
            role="searchbox"
            ref={inputRef}
            className="search"
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    );
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};