import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Documentation</li>
            </ul>
        </div>
    )
}

export default Header;