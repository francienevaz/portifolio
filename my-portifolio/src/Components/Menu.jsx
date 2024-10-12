import React from 'react'
import '../Styles/Menu.css'

const Menu = () => {
    return(

        <>
            <nav className='menu'>
                <div class="wrapper">
                    <div class="checkbox-wrapper">
                        <input type="checkbox" name="toggle" id="toggle"/>
                        <label for="toggle" class="checkbox">
                            <div class="trace"></div>
                            <div class="trace"></div>
                            <div class="trace"></div>
                        </label>
                    </div>
                </div>
                <ul className='menu-list'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>My Projects</li>
                    <li>Contact me</li>
                </ul>
            </nav>                
        </>
    )
}

export default Menu;