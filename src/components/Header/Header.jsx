import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/documentation">Documentation</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;