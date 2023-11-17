import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(){
    const beauty = 'beauty';
    const beauty = 'beauty';
    const beauty = 'beauty';
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
    <nav>
        <h1>Bazaar</h1>
		<ul className='main-nav'>
            <li>
			    <Link to="/">Home</Link>
            </li>
            <li>
                <div className="dropdown">
                <span onClick={toggleDropdown}>Categories</span>
                {isOpen && (
                    <ul className="dropdown-menu">
                        <li>
                            <Link to="/category">Beauty</Link>
                        </li>
                        <li>
                            <Link to="/category">Vehicle</Link>
                        </li>
                        <li>
                            <Link to="/category">Home Decor</Link>
                        </li>
                    </ul>
                )}
                </div>
            </li>
        </ul>
    </nav>
);
};

export default NavBar;