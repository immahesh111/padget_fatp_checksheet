import React from 'react';
import { FaBars } from 'react-icons/fa';

const NavBar = ({ toggleSidebar }) => {
  return (
    <div className='flex items-center text-white justify-between h-12 bg-white px-5'>
      <button onClick={toggleSidebar} className='md:hidden text-custom-purple'>
        <FaBars />
      </button>
      <p className='text-custom-purple'>Employee Dashboard</p>
      <div></div> {/* Empty div to maintain flex spacing */}
    </div>
  );
}

export default NavBar;
