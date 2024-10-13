import React, { useState } from 'react';
import '../Styles/Menu.css';

const Menu = () => {
    const [isVisibleMenu, setIsVisibleMenu] = useState(false);

    const toggleMenu = () => {
        console.log("Just clicked!");
        setIsVisibleMenu(!isVisibleMenu);
    }

    return (
        <nav className='menu'>
            <div className="wrapper">
                <div className="checkbox-wrapper">
                    <input type="checkbox" name="toggle" id="toggle"/>
                    <label htmlFor="toggle" className="checkbox" onClick={toggleMenu}>
                        <div className="trace"></div>
                        <div className="trace"></div>
                        <div className="trace"></div>
                    </label>
                </div>
            </div>

            {isVisibleMenu && (
                <ul className='menu-list'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>My Projects</li>
                    <li>Contact me</li>
                </ul>
            )}
        </nav>
    );
}

export default Menu;
