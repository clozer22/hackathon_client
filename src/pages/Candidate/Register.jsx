import React, {useState} from 'react';
import axiosInstance from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    fullName: '',
    sex: '',
    email: '',
    password: '',
    mobile: '',
    dob: '',
    address: '',
    city: '',
    province: '', // Optional (not being sent to backend currently)
    postalCode: '',
    educationLevel: '',
    jobTitle: '',
    relatedSkills: '', // Optional
    top5Skills: '', // Optional
    experience: '', // Optional
    portfolio: '' // Optional
});

 

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

   // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // const handleSubmit = () => {
  //   localStorage.setItem('userData', JSON.stringify(formData));
  //   navigate('/');
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/candidateRegister', {
        fullName: formData.fullName,
        sex: formData.sex,
        email: formData.email,
        password: formData.password,
        mobile: formData.mobile,
        dob: formData.dob,
        address: formData.address,
        city: formData.city,
        postalCode: formData.postalCode,
        educationLevel: formData.educationLevel,
        jobTitle: formData.jobTitle,
      });
  
      if (response.data.message === 'Registered Successfully') {
        navigate('/');
      }
    } catch (error) {
      console.error("Submission failed:", error);
      console.log(formData);
    }
  };

  return (
    <>
      <div className='h-screen flex items-center justify-center bg-[#001738]'>
        <div className="flex flex-col lg:flex-row w-full lg:w-3/5 border border-gray-400 shadow-xl bg-slate-50 m-4 rounded h-[400px]">
        <form onSubmit={handleSubmit} className="w-full p-5">
        {/* Step 1: Full Name and Sex */}
        <div className="flex justify-center mb-6">
          <img src="assets/img/logomain.png" alt="Logo" className="h-16"/>
        </div>
          <div className="mb-5">
            <h1 className="block text-center font-bold mb-5 text-orange-600 text-[40px]">Hello! Welcome to KMC!</h1>
          </div>

          {/* Step 1: Full Name */}
          <div className={`flex items-center justify-between ${currentStep === 0 ? '' : 'hidden'}`}>
          <a href="#" onClick={currentStep > 0 ? prevStep : (e) => e.preventDefault()} className={`block text-lg font-bold ${currentStep > 0 ? 'text-zinc-500' : 'text-gray-400 cursor-not-allowed'} text-[40px}`}>{'<'}</a>
            <input 
              type='text'
              className="w-3/5 px-2 py-5 border rounded text-lg text-center mt-5" 
              placeholder="Enter your full name" 
              id="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              required 
              rows="1" 
            />
            <a href="#" onClick={nextStep} className="block text-lg font-bold text-orange-600 text-[40px] cursor-pointer">{'>'}</a>
          </div>

          {/* Step 2: Sex */}
          <div className={`flex items-center justify-between ${currentStep === 1 ? '' : 'hidden'}`}>
            <a href="#" onClick={prevStep} className="block text-lg font-bold text-zinc-500 text-[40px] cursor-pointer">{'<'}</a>
            <input 
              type='text'
              className="w-3/5 px-2 py-5 border rounded text-lg text-center mt-5" 
              placeholder="Enter your sex" 
              id="sex" 
              value={formData.sex} 
              onChange={handleChange} 
              required 
              rows="1" 
            />
            <a href="#" onClick={nextStep} className="block text-lg font-bold text-orange-600 text-[40px] cursor-pointer">{'>'}</a>
          </div>

          {/* Step 3: Email */}
          <div className={`flex items-center justify-between ${currentStep === 2 ? '' : 'hidden'}`}>
            <a href="#" onClick={prevStep} className="block text-lg font-bold text-zinc-500 text-[40px] cursor-pointer">{'<'}</a>
            <input 
              type='email'
              className="w-3/5 px-2 py-5 border rounded text-lg text-center mt-5" 
              placeholder="Enter your email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              rows="1" 
            />
            <a href="#" onClick={nextStep} className="block text-lg font-bold text-orange-600 text-[40px] cursor-pointer">{'>'}</a>
          </div>

          <div className={`flex items-center justify-between ${currentStep === 3 ? '' : 'hidden'}`}>
            <a href="#" onClick={prevStep} className="block text-lg font-bold text-zinc-500 text-[40px] cursor-pointer">{'<'}</a>
            <input 
              type='password'
              className="w-3/5 px-2 py-5 border rounded text-lg text-center mt-5" 
              placeholder="Enter your password" 
              id="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
              rows="1" 
            />
            <a href="#" onClick={nextStep} className="block text-lg font-bold text-orange-600 text-[40px] cursor-pointer">{'>'}</a>
          </div>

          {/* Step 4: Mobile Number */}
          <div className={`flex items-center justify-between ${currentStep === 4 ? '' : 'hidden'}`}>
            <a href="#" onClick={prevStep} className="block text-lg font-bold text-zinc-500 text-[40px] cursor-pointer">{'<'}</a>
            <input 
              type='text'
              className="w-3/5 px-2 py-5 border rounded text-lg text-center mt-5" 
              placeholder="Enter your mobile number" 
              id="mobile" 
              value={formData.mobile} 
              onChange={handleChange} 
              required 
              rows="1" 
            />
            <a href="#" onClick={nextStep} className="block text-lg font-bold text-orange-600 text-[40px] cursor-pointer">{'>'}</a>
          </div>

          {/* Step 5: Date of Birth */}
          <div className={`flex items-center justify-between ${currentStep === 5 ? '' : 'hidden'}`}>
            <a href="#" onClick={prevStep} className="block text-lg font-bold text-zinc-500 text-[40px] cursor-pointer">{'<'}</a>
            <input
              type='date'
              className="w-3/5 px-2 py-5 border rounded text-lg text-center mt-5" 
              placeholder="Enter your date of birth" 
              id="dob" 
              value={formData.dob} 
              onChange={handleChange} 
              required 
              rows="1" 
            />
            <a href="#" onClick={nextStep} className="block text-lg font-bold text-orange-600 text-[40px] cursor-pointer">{'>'}</a>
          </div>

          {/* Step 6: Address */}
          <div className={`flex items-center justify-between ${currentStep === 6 ? '' : 'hidden'}`}>
            <a href="#" onClick={prevStep} className="block text-lg font-bold text-zinc-500 text-[40px] cursor-pointer">{'<'}</a>
            <input 
              type='text'
              className="w-3/5 px-2 py-5 border rounded text-lg text-center mt-5" 
              placeholder="Enter your address" 
              id="address" 
              value={formData.address} 
              onChange={handleChange} 
              required 
              rows="1" 
            />
            <a href="#" onClick={nextStep} className="block text-lg font-bold text-orange-600 text-[40px] cursor-pointer">{'>'}</a>
          </div>

          {/* Step 7: City */}
          <div className={`flex items-center justify-between ${currentStep === 7 ? '' : 'hidden'}`}>
            <a href="#" onClick={prevStep} className="block text-lg font-bold text-zinc-500 text-[40px] cursor-pointer">{'<'}</a>
            <input 
              className="w-3/5 px-2 py-5 border rounded text-lg text-center mt-5" 
              placeholder="Enter your city" 
              id="city" 
              value={formData.city} 
              onChange={handleChange} 
              required 
              rows="1" 
            />
            <a href="#" onClick={nextStep} className="block text-lg font-bold text-orange-600 text-[40px] cursor-pointer">{'>'}</a>
          </div>

          {/* Step 8: Province */}
          <div className={`flex items-center justify-between ${currentStep === 8 ? '' : 'hidden'}`}>
            <a href="#" onClick={prevStep} className="block text-lg font-bold text-zinc-500 text-[40px] cursor-pointer">{'<'}</a>
            <input 
              className="w-3/5 px-2 py-5 border rounded text-lg text-center mt-5" 
              placeholder="Enter your province" 
              id="province" 
              value={formData.province} 
              onChange={handleChange} 
              required 
              rows="1" 
            />
            <a href="#" onClick={nextStep} className="block text-lg font-bold text-orange-600 text-[40px] cursor-pointer">{'>'}</a>
          </div>
          {/* potal code */}
          <div className={`flex items-center justify-between ${currentStep === 9 ? '' : 'hidden'}`}>
            <a href="#" onClick={prevStep} className="block text-lg font-bold text-zinc-500 text-[40px] cursor-pointer">{'<'}</a>
            <input 
              className="w-3/5 px-2 py-5 border rounded text-lg text-center mt-5" 
              placeholder="Enter your postal code" 
              id="postalCode" 
              value={formData.postalCode} 
              onChange={handleChange} 
              required 
              rows="1" 
            />
            <a href="#" onClick={nextStep} className="block text-lg font-bold text-orange-600 text-[40px] cursor-pointer">{'>'}</a>
          </div>

          {/* Step 10: Educational Level */}
          <div className={`flex items-center justify-between ${currentStep === 10 ? '' : 'hidden'}`}>
            <a href="#" onClick={prevStep} className="block text-lg font-bold text-zinc-500 text-[40px] cursor-pointer">{'<'}</a>
            <input 
              className="w-3/5 px-2 py-5 border rounded text-lg text-center mt-5" 
              placeholder="Enter your educational level" 
              id="educationLevel" 
              value={formData.educationLevel} 
              onChange={handleChange} 
              required 
              rows="1" 
            />
            <a href="#" onClick={nextStep} className="block text-lg font-bold text-orange-600 text-[40px] cursor-pointer">{'>'}</a>
          </div>

          {/* Step 11: Job Title */}
          <div className={`flex items-center justify-between ${currentStep === 11 ? '' : 'hidden'}`}>
            <a href="#" onClick={prevStep} className="block text-lg font-bold text-zinc-500 text-[40px] cursor-pointer">{'<'}</a>
            <input 
              className="w-3/5 px-2 py-5 border rounded text-lg text-center mt-5" 
              placeholder="Enter your job title" 
              id="jobTitle" 
              value={formData.jobTitle} 
              onChange={handleChange} 
              required 
              rows="1" 
            />
            <a href="#" onClick={nextStep} className="block text-lg font-bold text-orange-600 text-[40px] cursor-pointer">{'>'}</a>
          </div>

          {/* Step 14: Related Skills */}
          <div className={`flex items-center justify-between ${currentStep === 12 ? '' : 'hidden'}`}>
            <a href="#"  onClick={currentStep <= 13 ? prevStep : (e) => e.preventDefault()} className={`block text-lg font-bold ${currentStep > 0 ? 'text-zinc-500' : 'text-gray-400 cursor-not-allowed'} text-[40px}`}>{'<'}</a>
            <input 
              className="w-3/5 px-2 py-5 border rounded text-lg text-center mt-5" 
              placeholder="Enter your related skills" 
              id="relatedSkills" 
              value={formData.relatedSkills} 
              onChange={handleChange} 
              required 
              rows="1" 
            />
            <button 
              type="submit" 
              className="block text-lg font-bold text-orange-600 text-[40px] cursor-pointer"
              onClick={handleSubmit}
            >
              Proceed to next step
            </button>
          </div>
        </form>
      </div>
    </div>

    </>
  );
}

export default Register;
