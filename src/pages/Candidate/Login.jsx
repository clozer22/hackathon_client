import React, {useState} from 'react';
import axiosInstance from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
import Bg from '../../assets/bg-image.png';
import Logo from '../../assets/kmc-logo.png';


const Login = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();

  const login = async (e) => {
    e.preventDefault();
    console.log({userEmail, password})
    try {
      const response = await axiosInstance.post('/candidateLogin',{
        email: userEmail,
        password: password,
      });
      if (response.data.message === 'Password does not match') {
        return console.log("BOBOKAAAA")
      }
      if (response.data.message === 'Login Successfully') {
        navigate('/profile');
      }
    } catch (error) {
      console.log("bobo ka");
    }
  }

  return (
    <>
      <div className='h-screen flex items-center justify-center bg-[#001738]'>
        <div className="flex flex-col lg:flex-row w-full md:w-3/5 border border-gray-400 shadow-xl bg-slate-50 m-2 md:m-4 rounded h-[400px]">
          <div className="hidden lg:flex w-full lg:w-2/5 h-full">
            <img src={Bg} alt="Descriptive Alt Text" className="object-cover h-full w-full"/>
          </div>
          <div className="w-full lg:w-3/5 flex items-center justify-center h-full">
            <form className="w-3/4 md:p-6">
              <div className="flex justify-center mb-6">
                <img src="assets/img/logomain.png" alt="Logo" className="h-16"/>
              </div>
              <div className="mb-4">
                <label className="block text-sm text-slate-500 mb-2">Email</label>
                <input className="w-full px-2 py-2 border rounded-lg text-sm" type="text" id="email" name="email" required onChange={(e) => setUserEmail(e.target.value)}/>
              </div>
              <div className="mb-1">
                <label className="block text-sm text-slate-500 mb-2">Password</label>
                <input className="w-full px-2 py-2 border rounded-lg text-sm" type="password" id="password" name="password" required  value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="mb-4 flex justify-end">
                <a href="#" className="text-blue-500 text-sm hover:underline">Forgot Password?</a>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button onClick={login} className="bg-blue-500 text-white w-full px-3 py-2 duration-300 text-sm rounded hover:bg-blue-700">Login</button>
              </div>
              <div className="text-center">
                <p className="text-sm">Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up here</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
