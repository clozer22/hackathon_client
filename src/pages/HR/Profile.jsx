import React, { useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

import Sidebar from '../../commons/Sidebar';

const Profile = () => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState();

  const handleFilter = async (e) => {
    e.preventDefault();
    console.log({userEmail, password})
    try {
      const response = await axiosInstance.post('/filter',{
        filter: filter,
      });
      if (response.data.message === 'Filtered Successfully') {
      }
    } catch (error) {
      console.log("Error boy");
    }
  }

  return (
    <div className='bg-gray-100 flex h-screen'>
      <Sidebar />

      <div className="flex flex-col w-full">
        <main className="flex-grow flex flex-col items-center justify-center p-4">
          <h1 className="block text-center font-bold mb-5 text-orange-600 text-[24px] md:text-[40px]">What are you looking for?</h1>
          <div className='w-full flex gap-2 flex-row justify-center'>
            <input type="text"
              placeholder="Search..."
              className="w-3/4 md:w-1/2 lg:w-1/3 px-4 py-2 border rounded-lg shadow"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <button type='submit' onClick={handleFilter} className='border p-2 px-4 bg-orange-600 text-white font-semibold rounded-lg'>Filter</button>
          </div>
        </main>
        <div className='flex flex-col gap-1 w-full justify-center items-center'>
          {/* pinaka card container natin */}
          <div className="flex items-center gap-2 p-4 bg-white w-[800px] rounded-lg shadow-md m-2" onClick={navigate('/')}>
            <div className='w-[40px] h-[40px] rounded-[50%] bg-slate-500'></div><p>Brenda Mage</p>
          </div>
          <div className="flex items-center gap-2 p-4 bg-white w-[800px] rounded-lg shadow-md m-2">
            <div className='w-[40px] h-[40px] rounded-[50%] bg-slate-500'></div><p>Diane Kalula</p>
          </div>
          <div className="flex items-center gap-2 p-4 bg-white w-[800px] rounded-lg shadow-md m-2">
            <div className='w-[40px] h-[40px] rounded-[50%] bg-slate-500'></div><p>Kerlin Wawa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
