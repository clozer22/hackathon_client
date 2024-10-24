import React, {useState} from 'react';
import axiosInstance from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();

  const register = async () => {
    try {
      const response = await axiosInstance.post('/candidateLogin',{
        email: userEmail,
        password: password,
      });
      if (response.data.message === 'Login Successful') {
        navigate('/profile');
        console.log(response.data.message);
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

export default Register;
