import getResponse from '../../../utils/getResponse';
import deleteTechnicalProperties from '../../../utils/deleteTechnicalProperties';

import PropTypes from 'prop-types';
import styles from './ResponseTextarea.module.css';
import { useState, useEffect } from 'react';

const ResponseTextarea = ({ request }) => {
    const [text, setText] = useState('')
    
    useEffect(() => {

        (async () => {
            const prevRes = await getResponse(request);
            if (prevRes) {
                if (!(Array.isArray(prevRes))) {
                    let res = [];
                    res.push(prevRes);
                    setText(res);
                    return;
                }
                setText(prevRes);
                return;
            }
            setText('Not Found');
        })()
    }, [request]);

    function formatText(text) {
        if (!text) return '';
        if (text === 'Not Found') return 'Not Found';
        return (text.map((item) => {
            deleteTechnicalProperties(item);
            return JSON.stringify(item, null, 4);
        }).join(',\n'))
    }

    return (
        <div className={styles.wrapper}>
        <textarea name="response" id="" cols="70" rows="30"
            className={styles.response_textarea}
            value={
                formatText(text)
            }
            readOnly
        >
        </textarea>
        </div>
    )
}

ResponseTextarea.propTypes = {
    request: PropTypes.string
}

export default ResponseTextarea;