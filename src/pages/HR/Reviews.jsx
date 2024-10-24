import React from 'react';
import axiosInstance from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

import Sidebar from '../../commons/Sidebar';

const Reviews = () => {
  return (
    <div className='bg-gray-100 flex h-screen'>
      <Sidebar />
      <p className='text-4xl'>Reviews</p>
    </div>
  );
}

export default Reviews;
