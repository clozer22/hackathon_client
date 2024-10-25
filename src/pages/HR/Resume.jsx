import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Resume = () => {
    const navigate = useNavigate();

    const [data, setdata] = useState();

    useEffect(() => {
        const fetchdata = async () => {
            e.preventDefault();
            try {
                const response = await axiosInstance.get('/api/getCandidateInfo'); 
                if (response?.data?.message === "fetched") {
                    setdata(response.data);
                }
            } catch (error) {
                navigate('/resume');
                console.error("Error fetching job roles:", error);
                toast.error("Failed to fetch job roles");
            }
        }
        fetchdata();
    },[])

    const handleAccept = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post(`/api/acceptCandidate/${candidateId}`); 
            if (response?.data?.message === "fetched") {
                
                navigate('/resume');
            }
        } catch (error) {
            navigate('/resume');
            console.error("Error fetching job roles:", error);
            toast.error("Failed to fetch job roles");
        }
    }

    // const handleAccept = async (e) => {
    //     navigate('/profile');
    // }


  return (
    <div className='bg-gray-100 flex flex-col items-center h-full'>
        <div class="w-[80%] bg-white p-5 my-6">
            <div class="flex flex-col md:flex-row items-center mb-6 px-5">
                <img src="https://via.placeholder.com/40" alt="Profile Picture" class="rounded-full h-32 w-32 object-cover mb-4 md:mb-0 md:mr-4"/>
                <div class="text-center md:text-left">
                    <h1 class="text-3xl font-bold">John Doe</h1>
                    <p class="text-xl text-gray-700">Software Engineer</p>
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
        <div className='mb-24'>
            <button className='py-2 px-4 m-2 rounded-lg border bg-white text-black duration-300 hover:bg-green-400 hover:text-white'>
                <h1>October 27, 2024</h1>
                <p>Monday | 10:30 AM</p>
            </button>
            <button className='py-2 px-4 m-2 rounded-lg border bg-white text-black duration-300 hover:bg-green-400 hover:text-white'>
                <h1>Novemver 12, 2024</h1>
                <p>Fiday | 01:30 PM</p>
            </button>
            <button className='py-2 px-4 m-2 rounded-lg border bg-white text-black duration-300 hover:bg-green-400 hover:text-white'>
                <h1>Saturday 27, 2024</h1>
                <p>Monday | 10:30 AM</p>
            </button>
        </div>
  </div>
  );
}

export default Resume;
