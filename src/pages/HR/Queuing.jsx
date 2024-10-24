import React from 'react';
import axiosInstance from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

import Sidebar from '../../commons/Sidebar';

const Queuing = () => {
  return (
    <div className='bg-gray-100 flex h-screen'>
      <Sidebar />
      <div class="flex flex-col w-full">
        <ul class="space-y-4 p-5">
            <li class="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow">
                <div>
                    <h2 class="text-xl font-semibold">Jane Doe</h2>
                    <p class="text-gray-700">Software Engineer</p>
                    <p class="text-gray-500">Availability: Mon, Wed, Fri</p> 
                </div>
                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Schedule</button> 
            </li>
            <li class="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow">
                <div>
                    <h2 class="text-xl font-semibold">John Smith</h2>
                    <p class="text-gray-700">Project Manager</p>
                    <p class="text-gray-500">Availability: Tue, Thu, Sat</p>
                </div>
                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Schedule</button>
            </li>
            <li class="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow">
                <div>
                    <h2 class="text-xl font-semibold">Emily Johnson</h2>
                    <p class="text-gray-700">UX Designer</p>
                    <p class="text-gray-500">Availability: Mon, Tue, Fri</p>
                </div>
                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Schedule</button>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Queuing;
