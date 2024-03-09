import NotFoundImg from '../../static/not_found.jpg';

import PropTypes from 'prop-types';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <div>
            <p className={styles.title}>Not Found</p>
            <img src={NotFoundImg} alt="psychoscope" className={styles.image_not_found}/>
        </div>
    )
}

NotFoundPage.propTypes = {
    text: PropTypes.string
}

export default NotFoundPage;