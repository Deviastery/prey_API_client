import PropTypes from 'prop-types';
import styles from './Navigation.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Navigation = ({ scrollToSection }) => {

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 300) {
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <nav
            style={{ position: isFixed ? 'fixed' : 'absolute', 
            left: isFixed ? '0' : 'auto', top: isFixed ? '20px' : 'auto'}}
        >
                <ul>
                    <li><button
                        onClick={() => scrollToSection('root')}>
                            Root
                        </button>
                    </li>
                    <li><button
                        onClick={() => scrollToSection('hostiles')}>
                            Hostiles
                        </button>
                    </li>
                    <li><button 
                        onClick={() => scrollToSection('abilities')}>
                            Abilities
                        </button>
                    </li>
                    <li><button 
                        onClick={() => scrollToSection('chipsets')}>
                            Chipsets
                        </button>
                    </li>
                    <li><button
                        onClick={() => scrollToSection('locations')}>
                            Locations
                        </button>
                    </li>
                    <li><button
                        onClick={() => scrollToSection('weapons')}>
                            Weapons
                        </button>
                    </li>
                </ul>
        </nav>
    )
}

Navigation.propTypes = {
    scrollToSection: PropTypes.func
}

export default Navigation;