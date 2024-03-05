import getResponse from '../../../utils/getResponse';
import deleteTechnicalProperties from '../../../utils/deleteTechnicalProperties';

import PropTypes from 'prop-types';
import styles from './ResponseTextarea.module.css';
import { useState, useEffect } from 'react';

const ResponseTextarea = ({ request }) => {
    const [text, setText] = useState('')
    
    useEffect(() => {
        
        if (request) {

            (async () => {
                const prevRes = await getResponse(request);
                console.log(prevRes);
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
        }
    }, [request]);

    function formatText(text) {
        if (!text) return '';
        if (text === 'Not Found') return 'Not Found';
        return (text.map((item) => {
            deleteTechnicalProperties(item);
            return JSON.stringify(item, null, 4);
        }).join(',\n'))
    }

    console.log(text);

    return (
        <>
            <textarea name="response" id="" cols="70" rows="30"
                value={
                    formatText(text)
                }
                readOnly
            >
            </textarea>
        </>
    )
}

ResponseTextarea.propTypes = {
    request: PropTypes.string
}

export default ResponseTextarea;