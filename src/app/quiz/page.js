"use client";
import { useNavigate } from "./components/Navigation/Navigate";
import QuizContainer from "./components/QuizContainer/QuizContainer";
import quiz from "./question/quizQuestion.json";
import { useEffect, useState } from "react";

const About = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const handleOptionSelect = (option) => {
    const updatedAnswers = [...userAnswers, option];
    console.log("Updated Answers: ", updatedAnswers); // Debugging
    setUserAnswers(updatedAnswers);
  };

  useEffect(() => {
    console.log("Storing Answers: ", userAnswers); // Debugging
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
  }, [userAnswers]);

  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (quizCompleted) {
      console.log("Stored in Local Storage:", localStorage.getItem("userAnswers")); // Debug

      navigate.push("/career");
    }
  }, [quizCompleted]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };
  return (
    <div className="flex h-[100vh] flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Take <p className={`m-0 max-w-[30ch] text-xl`}>Quiz</p>
          </a>
        </div>
      </div>
      {/* <button onClick={() => Navigate.Push('about/contact')}>Contact Me</button>
       */}
      <div className="flex flex-1 items-center justify-center flex-col min-w-[700px]">
        <div className="flex p-3 bg-[#8b0000]/40 rounded-xl flex-col w-full">
          <p className={`m-0 max-w-[30ch] text-xl font-mono`}>
            Quiz {"("} {currentQuestionIndex + 1} / {quiz.questions.length}{" "}
            {")"}
          </p>
          <QuizContainer
            quiz={quiz.questions[currentQuestionIndex]}
            onOptionSelect={handleOptionSelect}
          />
          <button
            onClick={handleNextQuestion}
            className="btn btn-primary font-mono"
            disabled={!userAnswers[currentQuestionIndex]}
          >
            {currentQuestionIndex < quiz.questions.length - 1
              ? "Next"
              : "Finish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
