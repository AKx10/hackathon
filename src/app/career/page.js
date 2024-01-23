"use client";
import Image from "next/image";
import { useNavigate } from "../quiz/components/Navigation/Navigate";
import { useEffect, useState } from "react";
import careers from "../quiz/components/career/career.json";
import careerImage from "../../../public/exploreCareer.png";
import myIntrestImage from "../../../public/myIntrest.png";

const Career = () => {
  const navigate = useNavigate();
  //   const [userAnswers, setUserAnswers] = useState([]);
  const [getuserAnswers, setuserAnswers] = useState([]);
  function calculateCareerMatch(userAnswers, careers) {
    return careers
      .map((career) => {
        const totalTags = career.tags.length;
        const matchingTags = career.tags.filter((tag) =>
          userAnswers.includes(tag)
        ).length;
        const matchPercentage = (matchingTags / totalTags) * 100;

        return {
          ...career,
          matchPercentage: Math.round(matchPercentage), // Rounded to the nearest whole number
        };
      })
      .filter((career) => career.matchPercentage > 0) // Filter out careers with 0% match
      .sort((a, b) => b.matchPercentage - a.matchPercentage); // Sort by match percentage in descending order
  }

  // Example Usage
  useEffect(() => {
    const storedAnswers = localStorage.getItem("userAnswers");
    if (storedAnswers) {
      setuserAnswers(JSON.parse(storedAnswers));
    }
  }, []);

  const matchedCareers = calculateCareerMatch(getuserAnswers, careers.careers);
  useEffect(() => {
    localStorage.setItem("careerIntrest", JSON.stringify(matchedCareers));
  }, [matchedCareers]);

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
            check <p className={`m-0 max-w-[30ch] text-xl`}>Career</p>
          </a>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center flex-row gap-x-10 min-w-[700px]">
        <div className="card w-96 bg-base-100 shadow-xl image-full h-[300px]">
          <figure>
            <img src="/exploreCareer.png" alt="Explore Career" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-white font-mono">Explore All Careers</h2>
            <p className="text-white font-mono">Learn more about the different career</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary font-mono" onClick={() => {navigate.push('/career/allCareer')}}>Explore {'->'}</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full h-[300px]">
          <figure>
            <img src="/myIntrest.png" alt="myIntrest" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white font-mono">Match My Career Interest</h2>
            <p className="text-white font-mono">Research career that meets your interest</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary font-mono" onClick={() => {navigate.push('/career/myIntrest')}}>Go In {'->'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
