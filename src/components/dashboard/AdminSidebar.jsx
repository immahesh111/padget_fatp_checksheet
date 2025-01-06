import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBuilding, FaCalendarAlt, FaCogs, FaMoneyBillWave, FaTachometerAlt, FaUsers } from 'react-icons/fa';
import logo from '../../assets/Padget.png';

const AdminSidebar = ({ isOpen }) => {
  return (
    <div className={`bg-custom-purple text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-68 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <div className='bg-white h-12 flex items-center justify-center'>
        <img src={logo} alt="CheckSheets Logo" className='h-10' />
      </div>
      <div className='px-4'>
        <NavLink
          to="/admin-dashboard"
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
          to="/admin-dashboard/employees"
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaUsers className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>CheckSheets</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/admin-dashboard/departments"
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaBuilding className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>Departments</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/admin-dashboard/leaves"
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaCalendarAlt className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>Audio Tester Approval</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/admin-dashboard/leaves1"
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaCalendarAlt className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>Camera Tester Approval</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/admin-dashboard/leaves2"
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaCalendarAlt className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>CQR Tester Approval</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/admin-dashboard/leaves3"
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaCalendarAlt className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>PDL Tester Approval</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/admin-dashboard/leaves4"
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaCalendarAlt className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>FCT Tester Approval</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/admin-dashboard/leaves5"
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaCalendarAlt className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>KeyWrite Tester Approval</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/admin-dashboard/leaves6"
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaCalendarAlt className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>FAMMI Tester Approval</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/admin-dashboard/leaves7"
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaCalendarAlt className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>LST Tester Approval</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/admin-dashboard/leaves8"
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaCalendarAlt className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>FMT Tester Approval</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/admin-dashboard/leaves8"
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaCalendarAlt className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>Current Tester Approval</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/admin-dashboard/report"
          className={({ isActive }) => `
    ${isActive ? "bg-white" : ""} 
    flex items-center space-x-4 block py-2.5 px-4 rounded
  `}
        >
          {({ isActive }) => (
            <>
              <FaMoneyBillWave className={`${isActive ? 'text-custom-purple' : 'text-white'}`} />
              <span className={`${isActive ? 'text-custom-purple' : 'text-white'}`}>Report</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/admin-dashboard/settings"
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

export default AdminSidebar;