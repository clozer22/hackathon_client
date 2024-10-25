import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/kmc-logo.png";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside id="sidebar" className="w-64 bg-[#001738] text-white flex-col justify-between hidden md:w-64 z-20 sm:block">
      <div className="">
        <div className="flex items-center space-x-3 m-6 ">
          <img src={Logo} alt="Logo" className="w-9"/>
          <span className="text-2xl font-bold text-yellow-200">KMC</span>
        </div>
        <nav className="flex flex-col space-y-2">
          <a className="text-white hover:px-7 duration-300 p-3 hover:bg-blue-900 cursor-pointer" onClick={() => navigate('/profile')}>Dashboard</a>
          <a className="text-white hover:px-7 duration-300 p-3 hover:bg-blue-900 cursor-pointer" onClick={() => navigate('/calendar')}>Calendar</a>
          <a className="text-white hover:px-7 duration-300 p-3 hover:bg-blue-900 cursor-pointer" onClick={() => navigate('/reviews')}>Reviews</a>
          <a href='/' className="text-white hover:px-7 duration-300 p-3 hover:bg-blue-900" >Logout</a>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
