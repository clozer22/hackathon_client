import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
const ResultPage = () => {
  const [questions, setQuestions] = useState([])

  // const handleSubmitAnswer = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   // Assuming `questions` is your list of questions
  //   // and `answers` is an object holding the user's answers
  //   const data = questions.map((question, index) => ({
  //     [`question${index + 1}`]: question[`question${index + 1}`],
  //   }));

  //   const answersArray = Object.keys(answers).map((key) => ({
  //     [key]: answers[key],
  //   }));

  //   try {
  //     const response = await axiosInstance.post("/api/submitAnswer", {
  //       data, // This should be an array of question objects
  //       answers: answersArray, // This should be an array of answer objects
  //     });

  //     if (response?.data?.message === "Successfully rated answers") {
  //       console.log(response?.data?.ratingsString1);
  //       console.log(response?.data?.ratingsString2);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const [result, setResult] = useState({
    status: "",
    reason: ""
  })

  useEffect(() => {
    const questionsData = localStorage.getItem("questions");
    const answersData = localStorage.getItem("answers");

    if (questionsData && answersData) {
      const parsedQuestions = JSON.parse(questionsData);
      const parsedAnswers = JSON.parse(answersData);

        const handleSubmitAnswer = async () => {

        // Assuming `questions` is your list of questions
        // and `answers` is an object holding the user's answers
        const data = parsedQuestions.map((question, index) => ({
          [`question${index + 1}`]: question[`question${index + 1}`],
        }));

        const answersArray = Object.keys(parsedAnswers).map((key) => ({
          [key]: parsedAnswers[key],
        }));

        try {
          const response = await axiosInstance.post("/api/submitAnswer", {
            data, // This should be an array of question objects
            answers: answersArray, // This should be an array of answer objects
          });

          if (response?.data?.message === "Successfully rated answers") {
            setResult((prevData) => ({
              status: response?.data?.ratingsString1, 
              reason: response?.data?.ratingsString2?.replace(/[^a-zA-Z0-9 ,.]/g, '') // Remove special characters except letters, numbers, spaces, commas, and periods
            }));
          }
        } catch (e) {
          console.log(e);
        } 
      };

      handleSubmitAnswer();

    } else {
      console.log("No data found in localStorage");
    }
  }, []);

  return (
    <div className='h-screen flex w-full items-center justify-center flex-col'>
      <h1 className='text-4xl text-red-600 font-black'>RESULT: {result.status}</h1>

      <div className='w-full p-5'>
        <h1 className=' tracking-widest text-justify font-semibold'>ASSESSMENT RESULT</h1>
        <p>{result.reason}</p>
      </div>
      
      <button className='text-white text-xl duration-300 hover:bg-orange-600 bg-orange-500 p-3 rounded-lg'>Retake Assessment</button>
  </div>
  );
}

export default ResultPage;
