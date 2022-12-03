import React from 'react'
import { Navbar } from 'bootstrap';
let Header = () => {
    return (
        <nav class="navbar bg-warning">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="../../../../burgerLogo.png" alt="Bootstrap" width="30" height="24" style={{ float: 'left' }} className='mt-1' />
                    &nbsp;Burger Xpress
                </a>


            </div>
        </nav>
    );
}
export default Header;