import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside id="sidebar" className="w-64 bg-[#001738] text-white flex-col justify-between hidden md:w-64 z-20 sm:block">
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-6">
          <img src="assets/img/logomain.png" alt="Logo" className="h-8"/>
          <span className="text-xl font-bold text-orange-600">KMC</span>
        </div>
        <nav className="flex flex-col space-y-2">
          <a className="text-white hover:text-orange-600" onClick={() => navigate('/profile')}>Dashboard</a>
          <a className="text-white hover:text-orange-600" onClick={() => navigate('/queuing')}>Queuing</a>
          <a className="text-white hover:text-orange-600" onClick={() => navigate('/calendar')}>Calendar</a>
          <a className="text-white hover:text-orange-600" onClick={() => navigate('/reviews')}>Reviews</a>
          <a href='/' className="text-white hover:text-orange-600" >Logout</a>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
