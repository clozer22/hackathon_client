import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Assessment from './Assessment';

const AddRole = () => {
  const [jobRole, setJobRole] = useState("");
  const {assessment} = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = queryParams.get("page");
  const [listOfRole, setListOfRole] = useState([]);
  const [newAdded, setNewAdded] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const candidateId = 1;
  const navigate = useNavigate()
  const [newJobRole, setNewJobRole] = useState("");

  useEffect(() => {
    navigate(`/addrole?page=${currentPage}`)
  },[currentPage,navigate]);
  // Function to fetch the list of job roles
  const fetchJobRoles = async () => {
    try {
      const response = await axiosInstance.get(`/api/getListOfRoles/${candidateId}`); 
      if (response?.data?.message === "fetched") {
        setListOfRole(response.data.jobs); 
      }
    } catch (error) {
      console.error("Error fetching job roles:", error);
      toast.error("Failed to fetch job roles");
    }
  };


  const handleAddRole = async (e) => {
    e.preventDefault();
    if (jobRole === "") {
      return toast.error("Please add your desired role");
    }

    try {
      const response = await axiosInstance.post("/api/addRole", { jobRole });

      if (response?.data?.message === "role is already exist") {
        return toast.error("Role already exists");
      }

      if (response?.data?.message === "failed to insert job role") {
        return toast.error("Failed to insert job role");
      }

      if (response?.data?.message === "role inserted") {
        await fetchJobRoles();
        setJobRole(""); 
        setNewAdded((prev) => !prev)
        toast.success("New role added");
        
      }
    } catch (error) {
      console.log("SERVER ERROR", error);
      toast.error("Server error occurred");
    }
  };

  
  useEffect(() => {
    console.log("asdasdasdas")
    fetchJobRoles();
  }, [newAdded]);


  const handleApply = async(job_role) => {
    // setLoading(true)
    // try{
    //   const response = await axiosInstance.get(`/api/generate-questions/${job_role}/${candidate_id}`);

    //   if(response.data.message === "Questions generated and inserted successfully."){
      setNewJobRole(job_role)
        navigate('/addrole?page=assessment');
    //   }

    // }catch(e){
    //  toast.error("Somerthing went wrong. Please try again later.")
    // }finally{
    //   setLoading(false)
    // }
  }

  return (
<>
{currentPage !== "assessment" ? (

  <div className='flex'>
      <ToastContainer/>
      <div className='bg-orange-500 w-[400px] h-screen'>
          <button onClick={() => navigate('/candidateProfile')}  className='p-4 text-2xl text-slate-100 w-full hover:bg-orange-600 border-b duration-300'>
            Profile
          </button>
          <button  className='p-4 text-2xl text-slate-100 w-full hover:bg-orange-600 border-b duration-300'>
            Add Role
          </button>
        </div>
      <div class="w-full p-5 bg-slate-100">
        <h1 className='text-center text-4xl font-bold mt-20'>Add Job</h1>
        <div className='flex gap-2 justify-end px-16'>
          <input type="text" value={jobRole} onChange={(e) => setJobRole(e.target.value)} placeholder='Add new role' className='rounded-lg'/>
          <button onClick={handleAddRole} className='p-2 bg-orange-500 text-center rounded-lg font-semibold text-white'>Add New Job</button>
        </div> 
        <div className='flex flex-col gap-2 w-full px-16 my-4 bg-slate-100'>
        {listOfRole && listOfRole.length ? (
          listOfRole.map((data) => (
            <div className='flex justify-between bg-white w-full items-center gap-2 rounded-lg overflow-hidden'>
              <h1 className='px-4'>{data.job_role}</h1>
              <button onClick={() => handleApply(data.job_role, data.candidate_id)} className='p-4 w-[150px] text-white duration-300 hover:bg-orange-600 bg-orange-500'>{isLoading ? "Loading...":"Assessment"}</button>
          </div>
          ))
        ):(
          <div className='flex justify-center bg-white w-full items-center gap-2 rounded-lg overflow-hidden'>
            <h1 className='py-6 text-2xl font-bold text-gray-600'>No role</h1>
          </div>
        )}

        </div>
      </div>
    
    </div>
):(
  <Assessment candidateId={candidateId} newJobRole={newJobRole} />
)}
</>
  );
}

export default AddRole;
