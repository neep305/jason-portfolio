import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='bg-blue-600 text-white'>
            <nav className='container mx-auto px-4 py-4'>
                <ul className='flex space-x-4'>
                    <li><Link to="/" className='hover:underline'>Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;