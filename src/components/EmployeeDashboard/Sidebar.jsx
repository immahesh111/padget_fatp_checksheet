import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBuilding, FaCogs, FaTachometerAlt, FaUsers } from 'react-icons/fa';
import { useAuth } from '../../context/authContext';
import logo from '../../assets/Padget.png';

const Sidebar = ({ isOpen }) => {
  const { user } = useAuth();

  return (
    <div className={`bg-custom-purple text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <div className='bg-white h-12 flex items-center justify-center'>
        <img src={logo} alt="CheckSheets Logo" className='h-10' />
      </div>
      <div className='px-4'>
        <NavLink
          to="/employee-dashboard"
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
          end
        >
          {({ isActive }) => (
            <>
              <FaTachometerAlt className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>Dashboard</span>
            </>
          )}
        </NavLink>

        <NavLink
          to={`/employee-dashboard/profile/${user._id}`}
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaUsers className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>My Profile</span>
            </>
          )}
        </NavLink>

        <NavLink
          to={`/employee-dashboard/leaves/${user._id}`}
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaBuilding className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>LDA Audio Tester</span>
            </>
          )}
        </NavLink>

        <NavLink
          to={`/employee-dashboard/leaves1/${user._id}`}
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaBuilding className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>Camera Tester</span>
            </>
          )}
        </NavLink>

        <NavLink
          to={`/employee-dashboard/leaves2/${user._id}`}
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaBuilding className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>CQR Tester</span>
            </>
          )}
        </NavLink>

        <NavLink
          to={`/employee-dashboard/leaves3/${user._id}`}
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaBuilding className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>PDL Tester</span>
            </>
          )}
        </NavLink>

        <NavLink
          to={`/employee-dashboard/leaves4/${user._id}`}
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaBuilding className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>FCT Tester</span>
            </>
          )}
        </NavLink>

        <NavLink
          to={`/employee-dashboard/leaves5/${user._id}`}
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaBuilding className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>Key Write Tester</span>
            </>
          )}
        </NavLink>

        <NavLink
          to={`/employee-dashboard/leaves6/${user._id}`}
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""}
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaBuilding className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>FAMMI Tester</span>
            </>
          )}
        </NavLink>

        <NavLink
          to={`/employee-dashboard/leaves7/${user._id}`}
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""}
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaBuilding className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>LST Tester</span>
            </>
          )}
        </NavLink>

        <NavLink
          to={`/employee-dashboard/leaves8/${user._id}`}
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""}
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaBuilding className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>FMT Tester</span>
            </>
          )}
        </NavLink>

        <NavLink
          to={`/employee-dashboard/leaves9/${user._id}`}
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""}
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaBuilding className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>Current Tester</span>
            </>
          )}
        </NavLink>

        <NavLink
          to={`/employee-dashboard/leaves10/${user._id}`}
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""}
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaBuilding className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>RF Tester</span>
            </>
          )}
        </NavLink>

        <NavLink
          to={`/employee-dashboard/leaves11/${user._id}`}
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""}
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaBuilding className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>Auto Screwing Machine</span>
            </>
          )}
        </NavLink>

        <NavLink
          to={`/employee-dashboard/leaves12/${user._id}`}
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""}
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaBuilding className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>Plasma Machine</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/employee-dashboard/setting"
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaCogs className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>Settings</span>
            </>
          )}
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;