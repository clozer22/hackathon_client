import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

const ResultPage = () => {
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState({
    status: "",
    reason: ""
  });
  const [loading, setLoading] = useState(true); // Added loading state
  const navigate = useNavigate()

  useEffect(() => {
    const questionsData = localStorage.getItem("questions");
    const answersData = localStorage.getItem("answers");

    if (questionsData && answersData) {
      const parsedQuestions = JSON.parse(questionsData);
      const parsedAnswers = JSON.parse(answersData);

      const handleSubmitAnswer = async () => {
        setLoading(true); // Set loading to true while the request is being processed

        const data = parsedQuestions.map((question, index) => ({
          [`question${index + 1}`]: question[`question${index + 1}`],
        }));

        const answersArray = Object.keys(parsedAnswers).map((key) => ({
          [key]: parsedAnswers[key],
        }));

        try {
          const response = await axiosInstance.post("/api/submitAnswer", {
            data, 
            answers: answersArray, 
          });

          if (response?.data?.message === "Successfully rated answers") {
            setResult({
              status: response?.data?.ratingsString1, 
              reason: response?.data?.ratingsString2?.replace(/[^a-zA-Z0-9 ,.]/g, ' ')
            });
          }
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false); // Set loading to false once the request finishes
        }
      };

      handleSubmitAnswer();
    } else {
      console.log("No data found in localStorage");
    }
  }, []);

  return (
    <div className='h-screen flex w-full items-center justify-center flex-col'>
      {loading ? (
        <h1 className='text-4xl text-gray-600 font-black'>Waiting for the result...</h1>
      ) : (
        <>
        {result.status === "Failed" ? (
          <h1 className='text-4xl text-red-600 font-black'>RESULT: {result.status}</h1>
        ):(
          <h1 className='text-4xl text-green-600 font-black'>RESULT: {result.status}</h1>
        )}
          


          <div className='w-1/2 border shadow-lg my-6 p-5'>
            <h1 className='tracking-widest text-justify font-semibold'>ASSESSMENT RESULT</h1>
            <p>{result.reason}</p>
          </div>
          
          <button onClick={() => navigate('/addrole')} className='text-white text-xl duration-300 hover:bg-orange-600 bg-orange-500 p-3 rounded-lg'>
            Retake Assessment
          </button>
        </>
      )}
    </div>
  );
}

export default ResultPage;
