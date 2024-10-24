import React from 'react';
import { useNavigate } from 'react-router-dom';

const CandidateProfile = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='bg-gray-100 flex flex-row h-full'>
        <div className='bg-orange-500 w-[400px] h-screen'>
          <button onClick={() => navigate('/candidateProfile')}  className='p-4 text-2xl text-slate-100 w-full hover:bg-orange-600 border-b duration-300'>
            Profile
          </button>
          <button onClick={() => navigate('/addrole')}  className='p-4 text-2xl text-slate-100 w-full hover:bg-orange-600 border-b duration-300'>
            Add Role
          </button>
        </div>
        <div class="w-full p-5">
          <div class="flex flex-col md:flex-row items-center mb-6 px-5">
              <img src="assets/img/logo.jpg" alt="Profile Picture" class="rounded-full h-32 w-32 object-cover mb-4 md:mb-0 md:mr-4"/>
              <div class="text-center md:text-left">
                  <h1 class="text-3xl font-bold">John Doe</h1>
                  <p class="text-xl text-gray-700">Software Engineer</p>
                  <div class="flex justify-center md:justify-start space-x-2 mt-2">
                      <button class="bg-green-500 text-white text-sm px-2 py-1 rounded hover:bg-green-700">Open for Work</button>
                      <button class="bg-red-500 text-white text-sm px-2 py-1 rounded hover:bg-red-700">Not Open for Work</button>
                  </div>
              </div>
          </div>
          
          <div class="mb-6  px-5">
              <h2 class="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-2">About</h2>
              <p class="text-gray-700">
                  Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Proficient in technology design and programming.
              </p>
          </div>
          <div class="mb-6  px-5">
              <h2 class="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-2">Experience</h2>
              <ul class="text-gray-700">
                  <li class="mb-2">
                      <strong>Senior Software Engineer</strong> at Tech Company (2018 - Present)
                  </li>
                  <li class="mb-2">
                      <strong>Software Engineer</strong> at Another Tech Company (2015 - 2018)
                  </li>
              </ul>
          </div>
          <div class=" px-5">
              <h2 class="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-2">Education</h2>
              <ul class="text-gray-700">
                  <li class="mb-2">
                      <strong>Master of Science in Computer Science</strong> - University Name (2013 - 2015)
                  </li>
                  <li>
                      <strong>Bachelor of Science in Computer Science</strong> - University Name (2009 - 2013)
                  </li>
              </ul>
          </div>

          <div class="px-5 mt-6">
              <h2 class="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">Client Reviews</h2>
              <div class="space-y-4">
                  <div class="bg-gray-100 p-4 rounded-lg shadow">
                      <p class="text-gray-700 mb-2">"John was excellent to work with. His expertise and dedication made the project a success."</p>
                      <div class="flex items-center">
                          <img src="https://via.placeholder.com/40" alt="Client Image" class="rounded-full h-10 w-10 object-cover mr-2"/>
                          <div>
                              <p class="text-sm font-semibold">Jane Smith</p>
                              <p class="text-sm text-gray-500">CEO, Tech Company</p>
                          </div>
                          <span class="ml-auto text-green-500 font-semibold">Green Flag</span>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CandidateProfile;
