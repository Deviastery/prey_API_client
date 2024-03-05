import { useState } from 'react';

import ResponseTextarea from '../../components/HomePage/ResponseTextarea';
import RequestInput from '../../components/HomePage/RequestInput';

import PropTypes from 'prop-types';
import styles from './HomePage.module.css';

const HomePage = () => {

    const [request, setRequest] = useState('')

    return (
        <>
            <RequestInput 
                setRequest={setRequest}
            />
            <ResponseTextarea 
                request={request}
            />
        </>
    )
}

HomePage.propTypes = {
    text: PropTypes.string
}

export default HomePage;