import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to="/register">Register</Link>
            <Link to="login">Log In</Link>
        </div>
    );
};

export default NavBar;