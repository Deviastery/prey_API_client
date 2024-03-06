import { NavLink } from 'react-router-dom';

import headerImg from '../../static/header.jpeg';

import styles from './Header.module.css';

const Header = () => {
    return (
        <div>
            <div>PreyAPI</div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/documentation">Documentation</NavLink></li>
            </ul>
            <img src={headerImg} alt="prey" />
        </div>
    )
}

export default Header;