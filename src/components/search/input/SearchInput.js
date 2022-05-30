import PropTypes from 'prop-types';
import {useEffect, useRef, useState} from "react";


export const SearchInput = ({onChange, onFocus, onBlur}) => {
    const [value, setValue] = useState('');   // TODO: move into SearchInput?
    const inputRef = useRef();

    const focus = () => {
        inputRef.current.focus();
    }

    const onValueChanged = (searchTerm) => {
        setValue(searchTerm);
        onChange(searchTerm);
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
            onChange={e => onValueChanged(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}

SearchInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
};