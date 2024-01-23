"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import careers from "../../quiz/components/career/career.json";
import { useNavigate } from "@/app/quiz/components/Navigation/Navigate";

const AllCareer = () => {
  const navigate = useNavigate();
  const onPressView = (index) => {
    localStorage.setItem("fullViewIndex", JSON.stringify(index));
    navigate.push("/career/allCareer/allCareerFullView");
  };
  return (
    <div className="flex h-[100vh] flex-col items-center justify-between p-24 overflow-scroll bg-black">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="text-white pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            explore <p className={`m-0 max-w-[30ch] text-xl text-white`}>Career</p>
          </a>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-y-10 w-full mt-5">
        {careers.careers.map((career, index) => {
          return (
            <div className="flex flex-1" key={index}>
              <div className="card bg-white/10 shadow-xl w-full text-primary-content">
                <div className="card-body">
                  <div className="flex flex-col gap-x-5 justify-center  bg-white/10 px-5 py-2 rounded-md">
                    <h2 className="card-title text-white/70 font-mono text-white">
                      {career?.title}
                    </h2>
                  </div>
                  <p className="line-clamp-2 overflow-hidden text-white mt-3 font-mono text-white">
                    {career?.Description}
                  </p>

                  <div className="card-actions justify-end mt-3">
                    <button
                      onClick={() => {
                        onPressView(career?.id);
                      }}
                      className="btn btn-outline btn-success text-white font-mono text-white"
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

export default AllCareer;
