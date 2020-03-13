import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="row header">
            <div className='col-md-5'>
                <a href="#"><h4 className = 'logo'>Get Connected</h4></a>
            </div>
            <div className='col-md-7 text-right'>
                <nav>
                    <ul>
                        <a href="/about">About</a>
                        <a href="/friends">Friends</a>
                        <a href="/profile">Profile</a>
                        <a href="/contact">contact</a>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;