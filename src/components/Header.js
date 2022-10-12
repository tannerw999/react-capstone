import React from 'react';
import './Header.css';

export default function Header () {
    return (
        <header>
            <nav className="nav">
                <h1>TOO HANGRY TO DECIDE?</h1>
                <h5>Simply add a few restaurants that sound good to the list and let it randomly select one!</h5>
                {/* <img src='https://familydoctor.org/wp-content/uploads/2009/10/shutterstock_378935893-703x540.jpg' className="nav-logo"/> */}
            </nav>
        </header>
    )
};