import React, {useState} from 'react';
import axiosInstance from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();

  const login = async () => {
    console.log({userEmail, password})
    try {
      const response = await axiosInstance.post('/candidateLogin',{
        email: userEmail,
        password: password,
      });
      if (response.data.message === 'Login Successful') {
        navigate('/profile');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <form method='post'>
          <label htmlFor="email">Email</label>
          <input className='border' type="text" id='email' onChange={(e) => setUserEmail(e.target.value)}/>

          <label htmlFor="password">Password</label>
          <input className="border" type="password" id='password' onChange={(e) => setPassword(e.target.value)}/>
          <button type='submit' onClick={() => login()}>Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
