import { NavLink } from 'react-router-dom';

import headerImg from '../../static/header.jpeg';

import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            
            <div className={styles.subcontainer}>                
                <div className={styles.title}>PreyAPI</div>

                <ul className={styles.list__container}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li>|</li>
                    <li><NavLink to="/documentation">Documentation</NavLink></li>
                </ul>
            </div>

            <img className={styles.img} src={headerImg} alt="prey" />

        </div>
    )
}

export default Header;