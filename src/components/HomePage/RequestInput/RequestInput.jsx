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
        <div className={styles.input_elem}>
            <div className={styles.root}>
            http://localhost:3001/api/
            </div>
            <input 
                className={styles.url_input}
                type="text" 
                placeholder='/hostiles'
                value={inputValue}
                onKeyDown={(e) => handleKeyDown(e)} 
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                className={styles.request_button}
                onClick={() => setRequest(inputValue)}
            >
                request
            </button>
        </div>
    )
}

RequestInput.propTypes = {
    setRequest: PropTypes.func
}

export default RequestInput;