"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useNavigate } from "@/app/quiz/components/Navigation/Navigate";

const MyIntrest = () => {
  const navigate = useNavigate();
  const [userIntrest, setUserIntrest] = useState([]);
  useEffect(() => {
    const storedAnswers = localStorage.getItem("careerIntrest");
    if (storedAnswers) {
      setUserIntrest(JSON.parse(storedAnswers));
    }
  }, []);
  const onPressView = (index) => {
    localStorage.setItem("fullViewIndex", JSON.stringify(index));
    navigate.push("/career/myIntrest/myIntrestFullView");
  };
  return (
    <div className="flex h-[100vh] flex-col items-center justify-between p-24 overflow-scroll">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            my <p className={`m-0 max-w-[30ch] text-xl`}>Interest</p>
          </a>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-y-5 w-full mt-5">
        {userIntrest.map((career, index) => {
          return (
            <div className="flex flex-1">
              <div className="card bg-base-100 shadow-xl w-full text-primary-content ">
                <div className="card-body">
                  <div className="flex flex-col gap-x-5 justify-center  bg-white/10 px-5 py-2 rounded-md">
                    <h2 className="card-title text-white/70 font-mono">
                      {career?.title}
                    </h2>
                    <div className="flex flex-row items-center gap-x-5">
                      <progress
                        className="progress progress-accent w-56 font-mono"
                        value={career?.matchPercentage}
                        max="100"
                      ></progress>
                      <p className="text-white font-mono">{career?.matchPercentage}%</p>
                    </div>
                  </div>
                  <p className="line-clamp-2 overflow-hidden text-white mt-3 font-mono">
                    {career?.Description}
                  </p>
                  <div className="card-actions justify-end mt-3">
                    <button
                      onClick={() => {
                        onPressView(career?.id);
                      }}
                      className="btn btn-outline btn-success text-white font-mono"
                    >
                      View {"->"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyIntrest;
