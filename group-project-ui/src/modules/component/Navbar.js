import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <li> <Link to='/'> Home </Link></li>
        </header>
    )
}

export default Header;