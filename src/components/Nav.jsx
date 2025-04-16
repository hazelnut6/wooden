import { useContext } from 'react';
import { CartContext } from './context/CartContext';
import { NavLink } from 'react-router-dom'
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import Hamburger from './Hamburger'
import '../styles/nav.css'

export default function Nav() {
  const { clicked } = useContext(CartContext);
  const itemCount = clicked.reduce((total, item) => total + item.quantity, 0);


  return (
    <div className='navDiv'>
      <div className="logo">
        <img src="/images/web-logo.svg" alt="Website logo" className='webLogo'/>
        <h1>Wooden</h1>
      </div>
      <div className="links">
        <ul>
          <li>
            <NavLink to='/' className='navlink'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/categories' className='navlink'>Products</NavLink>
          </li>
          <li>
            <NavLink to='/about' className='navlink'>About Us</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='navlink'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/cart' className='cartLink'>
              <Icon path={mdiCartOutline} size={1} color='black' className='cartIcon' title='Go to cart' />
              {itemCount > 0 && (
                <span className='cartLinkSpan'>{itemCount}</span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
      <Hamburger />
    </div>
  )
}