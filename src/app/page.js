"use client";
import { useNavigate } from "./quiz/components/Navigation/Navigate";
import { Suspense, useEffect, useState } from "react";
import Script from "next/script";

export default function Home() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const isFormIncomplete = userName === "" || dateOfBirth === "";

  const handleChange = (event) => {
    setDateOfBirth(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };
  const user = {
    name: userName, // assuming userName is a state variable
    email: userEmail,
    dateOfBirth: dateOfBirth, // assuming dateOfBirth is a state variable
  };
  const userString = JSON.stringify(user);
  useEffect(() => {
    localStorage.setItem("user", userString);
  }, [userString]);

  return (
    <main className="flex flex-1 h-[100vh] w-[100vw] flex-col items-center justify-center p-24 bg-black">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="text-white pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <p className={`m-0 max-w-[30ch] text-xl text-white`}>
                Hey Prabhu
              </p>
            </a>
          </div>
        </div>

        {/* <button onClick={() => router.push("/about")}>Go to About</button> */}
        <div className="flex flex-1 items-center justify-center flex-col ">
          <div className="flex mb-5">
            <a className="flex font-mono text-white/70">
              Career exploration is the process of discovering and understanding
              various career options available to you. It involves assessing
              your interests, skills, and values to find a career path that
              aligns with your goals and aspirations. Whether you're a student
              planning for your future or someone considering a career change,
              career exploration helps you make informed decisions and set a
              clear path toward a fulfilling professional life.
            </a>
          </div>
          <div className="flex p-3 bg-[#001861] rounded-xl flex-wrap items-center justify-center">
            <div className="flex mb-5">
              <label class="form-control w-full max-w-[400px] min-w-[350px]">
                <div class="label">
                  <span class="label-text font-mono text-white">
                    What is your name?
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                  onChange={handleUsernameChange}
                />
              </label>
            </div>
            <div className="flex mb-5">
              <label class="form-control w-full max-w-[400px] min-w-[350px]">
                <div class="label">
                  <span class="label-text font-mono text-white">
                    What is your email id?
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                  onChange={handleEmailChange}
                />
              </label>
            </div>
            <div className="flex mb-5">
              <label className="form-control w-full max-w-[400px] min-w-[350px]">
                <div className="label">
                  <span className="label-tex font-monot text-white">
                    Date of Birth
                  </span>
                </div>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={dateOfBirth}
                  onChange={handleChange}
                  max={new Date().toISOString().split("T")[0]}
                  className="input input-bordered w-full max-w-xs font-mono"
                  placeholder="Enter Date of Birth"
                />
              </label>
            </div>
            <div className="flex items-center justify-center w-full ">
              <button
                onClick={() => {
                  navigate.push("/quiz");
                }}
                className="btn btn-primary font-mono"
                disabled={isFormIncomplete}
              >
                Go to Quiz
              </button>
            </div>
          </div>
          <div className="flex mt-5">
            <a className="flex font-mono text-white/70 flex-col">
              <p className="flex font-mono font-bold pb-2">How Can We Help?</p>
              <p className="flex font-mono">
                Our career exploration platform is designed to assist you in
                your journey of self-discovery. We offer a variety of resources,
                including quizzes, assessments, and informational content, to
                help you:
              </p>
              <p className="flex mt-2 flex-col">
                <ul>
                  <li className="font-mono ">
                    * Identify your career interests and preferences.
                  </li>
                </ul>
                <ul>
                  <li className="font-mono">
                    * Explore a wide range of professions and industries.
                  </li>
                </ul>
                <ul>
                  <li className="font-mono">
                    * Understand the skills and qualifications needed for
                    different careers.
                  </li>
                </ul>
                <ul>
                  <li className="font-mono">
                    * Connect with professionals and experts in your chosen
                    field.
                  </li>
                </ul>
                <ul>
                  <li className="font-mono">
                    * Access training and educational resources to develop your
                    skills.
                  </li>
                </ul>
              </p>
            </a>
          </div>
        </div>
      </Suspense>
    </main>
  );
}
