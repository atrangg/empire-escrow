import logo from '../logos/White-logo-no-bg.png'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ title }) {
    const[navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

  return (
    <nav className={navbar ? 'navbar fixed mb-12 shadow-lg w-full bg-logo-yellow duration-500' : 'navbar fixed mb-12  w-full bg-transparent duration-500'}>
        <div className='container mx-auto'>
            <div className="flex-none px-2 mx-2">
                <Link to='/' className='text-lg font-bold align-middle'>
                    <img src={logo} width={100} className='inline'/>
                </Link>
            </div>

            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-end">
                    {/* style={{color: '#C8B568'}} */}
                    <Link to='/' className='text-white btn btn-ghost btn-sm' >
                        Home
                    </Link>
                    <Link to='/' className='text-white btn btn-ghost btn-sm' >
                        About
                    </Link>
                    <Link to='/' className='text-white btn btn-ghost btn-sm'>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'Empire Escrow',
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar