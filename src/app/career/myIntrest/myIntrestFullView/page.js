"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useNavigate } from "@/app/quiz/components/Navigation/Navigate";
import careers from "../../../quiz/components/career/career.json";

const MyIntrestFullView = () => {
  const [userIntrestIndex, setUserIntrestIndex] = useState([]);
  useEffect(() => {
    const storedAnswers = localStorage.getItem("fullViewIndex");
    if (storedAnswers) {
      setUserIntrestIndex(JSON.parse(storedAnswers));
    }
  }, []);
  const careerInfo = careers?.careers.find(
    (career) => career.id === userIntrestIndex
  );
  console.log(careerInfo);
  return (
    <div className="flex h-[100vh] flex-col items-center justify-between p-10 pt-[96px] overflow-scroll">
      <div className="flex bg-white/10 flex-col p-10 rounded-3xl">
        {/* <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex "> */}
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"> */}
        {/* <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            > */}
        <h1 className={`text-[60px] text-bold text-white/70 w-full font-mono`}>
          {careerInfo?.title}
        </h1>
        {/* </a> */}
        {/* </div> */}
        {/* </div> */}
        <div className="flex flex-1 flex-col gap-y-5 w-full mt-5">
          <div className="flex flex-1 flex-col gap-y-5 w-full mt-5">
            <div className="flex mt-5 text-[20px] text-white/80 font-mono">
              {careerInfo?.Description}
            </div>
          </div>
          <div className="flex flex-col gap-y-4 border-[1px] p-5 rounded-2xl border-white/30 border-dashed bg-blue-900/10">
            <h3 className="flex text-[20px]">Key Responsibilities :</h3>
            {careerInfo?.KeyResponsibilities.map((responsibilities, index) => {
              return (
                <div className="collapse bg-blue-900/30">
                  <input type="radio" name="my-accordion-1" checked="checked" />
                  <div className="collapse-title text-md font-small font-mono">
                    {responsibilities}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-y-4 border-[1px] p-5 rounded-2xl border-white/30 border-dashed bg-blue-900/10">
            <h3 className="flex text-[20px] font-mono">Skills Requirement :</h3>
            {careerInfo?.SkillsRequirement.map((skills) => {
              return (
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow bg-[#154360] text-white-content focus:bg-[#1A5276] focus:text-white-content"
                >
                  <div className="collapse-title font-mono">
                    {skills?.title}
                  </div>
                  <div className="collapse-content">
                    <p className="font-mono">{skills?.Description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-1 w-full items-center justify-center rounded-md">
            <iframe
              width="560"
              height="315"
              src={careerInfo?.ytLink}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyIntrestFullView;
