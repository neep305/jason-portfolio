import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
            </div>
            <div className="text-xl font-semibold text-white-700 ml-2">Jason Nam Portfolio</div>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className={`rounded-md px-3 py-2 text-sm font-medium ${
              location.pathname === '/' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`} aria-current="page">소개</Link>
            <Link to="/skills" className={`rounded-md px-3 py-2 text-sm font-medium ${
              location.pathname === '/skills' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}>기술 스택</Link>
            <Link to="/projects" className={`rounded-md px-3 py-2 text-sm font-medium ${
              location.pathname === '/projects' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}>프로젝트</Link>
            <Link to="/admin" className={`rounded-md px-3 py-2 text-sm font-medium ${
              location.pathname === '/admin' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}>Admin</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;