import React from 'react';
import { Link } from 'react-router-dom';



const Nav = () => {
    return ( 
        <div>
            <nav className='nav'>
                <a href='Logo' className='navbar-brand'>
                    Logo
                </a>
                <ul>
                    <li>
                       <a href='/blog'>Blog</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Nav;