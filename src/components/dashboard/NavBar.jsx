import React from 'react';
import { useAuth } from '../../context/authContext';
import { FaBars } from 'react-icons/fa';

const NavBar = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();

  return (
    <div className='flex items-center text-white justify-between h-12 bg-white-400 px-5'>
      {/* Hamburger icon for mobile */}
      <button onClick={toggleSidebar} className='md:hidden bg-custom-purple'>
        <FaBars />
      </button>
      <p className='text-custom-purple'> Welcome {user.name}</p>
      <button className='px-4 py-1 bg-custom-purple hover:bg-red-800 rounded-md' onClick={logout}> Logout </button>
    </div>
  );
}

export default NavBar;