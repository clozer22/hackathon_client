import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const Assessment = ({newJobRole}) => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();
  const jobRole = "Frontend Developer";
  const candidateId = 1;
  const [questions, setQuestions] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [genCount, setGenCount] = useState(0);
  const [answers, setAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
  });

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await axiosInstance.get(
        `/api/generate-questions/${newJobRole}/${candidateId}`
      );

      if (
        response?.data?.message ===
        "Questions generated and inserted successfully."
      ) {
        console.log("successssssss");
        setGenCount((count) => count + 1);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const fetch = async () => {
    fetchQuestions();
  };



  useEffect(() => {
    const fetchGeneratedQuestions = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/getGeneratedQuestions/${candidateId}`
        );

        if (response?.data?.message === "fetched") {
          setQuestions(response?.data?.questions);
          console.log(response?.data?.questions);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchGeneratedQuestions();
  }, [genCount]);

  const login = async (e) => {
    e.preventDefault();
    console.log({ userEmail, password });
    try {
      const response = await axiosInstance.post("/candidateLogin", {
        email: userEmail,
        password: password,
      });
      if (response.data.message === "Login Successfully") {
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitAnswer = async (e) => {
    e.preventDefault();

    const data = questions.map((question, index) => ({
      [`question${index + 1}`]: question[`question${index + 1}`],
    }));



    localStorage.setItem("questions", JSON.stringify(questions))
    localStorage.setItem("answers", JSON.stringify(answers))
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve,2000));
      navigate('/resultPage');
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <>
      <div className="h-screen flex items-center justify-center w-full flex-col gap-y-5">
        {genCount === 0 && (
          <button className="p-4 border bg-orange-500 rounded-lg text-white" onClick={fetch}>
            Generate Questions
          </button>
        )}

        {questions.length === 0 ? (
          <h1 className="text-4xl">
            {isLoading
              ? "Generating..."
              : "The AI will generate 5 questions for you."}
          </h1>
        ) : (
          <ul className="">
            {questions.map((data, index) => (
              <div className="w-full flex flex-col gap-y-3" key={index}>
                <li className="">{data.question1}</li>
                <textarea
                  type="text"
                  value={answers[`answer1`] || ""} // Access answer1 for question1
                  onChange={(e) =>
                    setAnswers((prev) => ({
                      ...prev,
                      answer1: e.target.value, // Set answer1
                    }))
                  }
                  className="px-2 py-4 border rounded-lg text-black border-black max-h-[200px]"
                />
                <li>{data.question2}</li>
                <textarea
                  type="text"
                  value={answers[`answer2`] || ""} // Access answer2 for question2
                  onChange={(e) =>
                    setAnswers((prev) => ({
                      ...prev,
                      answer2: e.target.value, // Set answer2
                    }))
                  }
                  className="px-2 py-4 border  rounded-lg text-black border-black max-h-[200px]"
                />
                <li>{data.question3}</li>
                <textarea
                  type="text"
                  value={answers[`answer3`] || ""} // Access answer3 for question3
                  onChange={(e) =>
                    setAnswers((prev) => ({
                      ...prev,
                      answer3: e.target.value, // Set answer3
                    }))
                  }
                  className="px-2 py-4 border  rounded-lg text-black border-black max-h-[200px]"
                />
                <li>{data.question4}</li>
                <textarea
                  type="text"
                  value={answers[`answer4`] || ""} // Access answer4 for question4
                  onChange={(e) =>
                    setAnswers((prev) => ({
                      ...prev,
                      answer4: e.target.value, // Set answer4
                    }))
                  }
                  className="px-2 py-4 border  rounded-lg text-black border-black max-h-[200px]"
                />
                <li>{data.question5}</li>
                <textarea
                  type="text"
                  value={answers[`answer5`] || ""} // Access answer5 for question5
                  onChange={(e) =>
                    setAnswers((prev) => ({
                      ...prev,
                      answer5: e.target.value, // Set answer5
                    }))
                  }
                  className="px-2 py-4 border  rounded-lg text-black border-black max-h-[200px]"
                />
                <button
                  className="px-2 py-2 border text-white bg-orange-500 rounded-lg"
                  onClick={handleSubmitAnswer}
                >
                  {isLoading ? "Submitting..." : "Submit answer"}
                </button>
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Assessment;
