"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useNavigate } from "./quiz/components/Navigation/Navigate";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const isFormIncomplete = userName === "" || dateOfBirth === "";

  const handleChange = (event) => {
    setDateOfBirth(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  };
  const user = {
    name: userName, // assuming userName is a state variable
    dateOfBirth: dateOfBirth, // assuming dateOfBirth is a state variable
  };
  const userString = JSON.stringify(user);
  localStorage.setItem("user", userString);

  return (
    <main className="flex flex-1 h-[100vh] w-[100vw] flex-col items-center justify-center p-24 bg-black">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <p className={`m-0 max-w-[30ch] text-xl`}>Hey Prabhu</p>
          </a>
        </div>
      </div>

      {/* <button onClick={() => router.push("/about")}>Go to About</button> */}
      <div className="flex flex-1 items-center justify-center flex-col ">
        <div className="flex mb-5">
          <a className="flex font-mono text-white/70">
            Career exploration is the process of discovering and understanding
            various career options available to you. It involves assessing your
            interests, skills, and values to find a career path that aligns with
            your goals and aspirations. Whether you're a student planning for
            your future or someone considering a career change, career
            exploration helps you make informed decisions and set a clear path
            toward a fulfilling professional life.
          </a>
        </div>
        <div className="flex p-3 bg-[#001861] rounded-xl">
          <div className="flex mb-5">
            <label class="form-control w-full max-w-[400px] min-w-[350px]">
              <div class="label">
                <span class="label-text font-mono">What is your name?</span>
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
            <label className="form-control w-full max-w-[400px] min-w-[350px]">
              <div className="label">
                <span className="label-tex font-monot">Date of Birth</span>
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
              Our career exploration platform is designed to assist you in your
              journey of self-discovery. We offer a variety of resources,
              including quizzes, assessments, and informational content, to help
              you:
            </p>
            <p className="flex mt-2 flex-col">
              <ul>
                <li className="font-mono">
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
                  * Connect with professionals and experts in your chosen field.
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
      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
