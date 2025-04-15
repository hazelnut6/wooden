import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiMenu, mdiClose } from '@mdi/js';
import '../styles/hamburger.css'


export default function Hamburger() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className='menuContainer'>
            {!menuOpen && ( //Menu close
                <button className="menuBtn" onClick={toggleMenu}>
                    <Icon path={mdiMenu} size={1.2} title='Icon for menu button'/>
                </button>
            )}

            {menuOpen && ( //Menu open
                <div className="menuAppear">
                    <button className="closeBtn" onClick={toggleMenu}>
                        <Icon path={mdiClose} size={1.3} title='Icon for close button' />
                    </button>
                    <div className="burgerLinks">
                        <ul>
                            <li><NavLink to='/' className='burgerNavlink'>Home</NavLink></li>
                            <li><NavLink to='/categories' className='burgerNavlink'>Products</NavLink></li>
                            <li><NavLink to='/cart' className='burgerNavlink'>Cart</NavLink></li>
                            <li><NavLink to='/about' className='burgerNavlink'>About Us</NavLink></li>
                            <li><NavLink to='/contact' className='burgerNavlink'>Contact</NavLink></li>
                        </ul>
                    </div>
                </div>                
            )}
        </div>
    )
}
