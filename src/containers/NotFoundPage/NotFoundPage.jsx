import NotFoundImg from '../../static/not_found.jpg';

import PropTypes from 'prop-types';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <>
            <p>Not Found</p>
            <img src={NotFoundImg} alt="psychoscope" />
        </>
    )
}

NotFoundPage.propTypes = {
    text: PropTypes.string
}

export default NotFoundPage;