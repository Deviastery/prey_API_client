import { useState } from 'react';

import PropTypes from 'prop-types';
import styles from './RequestInput.module.css';

const RequestInput = ({ setRequest }) => {

    const [inputValue, setInputValue] = useState("")

    function handleKeyDown (event) {
        if (event.key === 'Enter') {
            setRequest(inputValue);
        }
      };

    return (
        <>
            <input 
                type="text" 
                value={inputValue}
                onKeyDown={(e) => handleKeyDown(e)} 
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                onClick={() => setRequest(inputValue)}
            >
                Request
            </button>
        </>
    )
}

RequestInput.propTypes = {
    setRequest: PropTypes.func
}

export default RequestInput;