"use client";

import AdBanner from "@/component/AdBanner";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AllAd = () => {
  const [ads, setAds] = useState([]);
  const [pasteContent, setPasteContent] = useState("");
  const [error, setError] = useState("");
  const [sdkVersions, setSdkVersions] = useState({});

  const router = useRouter();

  // The SDKs are loaded once from the root layout; poll briefly for their globals.
  useEffect(() => {
    const readVersions = () => {
      const versions = {
        publisher: window.adsbyadgeist?.version,
        advertiser: window.adgeistAdvertiser?.version,
      };
      setSdkVersions(versions);
      return versions.publisher && versions.advertiser;
    };
    if (readVersions()) return;
    const interval = setInterval(() => {
      if (readVersions()) clearInterval(interval);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handlePasteProcess = (content) => {
    try {
      if (!content.trim()) return;

      const parser = new DOMParser();
      const doc = parser.parseFromString(content, "text/html");
      const ins = doc.querySelector("ins");

      if (!ins) {
        setError("No <ins> tag found in pasted code.");
        return;
      }

      const dataadslot = ins.getAttribute("data-ad-slot") || "";
      if (!dataadslot) {
        setError("The <ins> tag has no data-ad-slot.");
        return;
      }

      // data-ad-slot is the only attribute the SDK reads; size comes from CSS.
      const newAd = {
        dataadslot,
        width: ins.style.width || "",
        height: ins.style.height || "",
      };

      const updatedAds = [...ads, newAd];
      setAds(updatedAds);
      localStorage.setItem("adBannerDetails", JSON.stringify(updatedAds));

      // Clear input
      setPasteContent("");
      setError("");
    } catch (e) {
      console.error("Parsing error", e);
      setError("Failed to parse code.");
    }
  };

  const getAdDetails = () => {
    try {
      const adDetails = localStorage.getItem("adBannerDetails");
      if (adDetails) {
        const parsedAds = JSON.parse(adDetails);
        setAds(Array.isArray(parsedAds) ? parsedAds : []);
      }
    } catch (error) {
      console.error("Error retrieving ad banner details:", error);
      setAds([]);
    }
  };

  useEffect(() => {
    getAdDetails();
  }, []);

  const clearAds = () => {
    setAds([]);
    localStorage.removeItem("adBannerDetails");
  };

  return (
    <div className="flex h-[100vh] flex-col items-center p-8 overflow-auto bg-black gap-8 text-white relative">
      {/* Background Gradients for Premium Feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="z-10 w-full max-w-4xl flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-bl from-orange-400 to-red-500">
          Ad Manager
        </h1>

        <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4">
          <div className="flex flex gap-3 items-center">
            <button
              onClick={() => router.push("/")}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-900/20"
            >
              router.push('/')
            </button>
            <button
              onClick={() => router.replace("/")}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-900/20"
            >
              router.replace('/')
            </button>
            <button
              onClick={() => router.back()}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-900/20"
            >
              router.back()
            </button>
            <a href="/">Anchor Navigation</a>
            <a href="/" target="#">
              Anchor #
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] uppercase text-gray-500 font-bold">
                Publisher SDK
              </label>
              <div className="text-xs font-mono text-gray-300 bg-black/30 p-2 rounded border border-white/5">
                {sdkVersions.publisher || "not loaded"}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] uppercase text-gray-500 font-bold">
                Advertiser SDK
              </label>
              <div className="text-xs font-mono text-gray-300 bg-black/30 p-2 rounded border border-white/5">
                {sdkVersions.advertiser || "not loaded"}
              </div>
            </div>
            <button
              onClick={() => window.adsbyadgeist?.showConsentBanner()}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-900/20"
            >
              Privacy choices
            </button>
          </div>

          <div className="h-px w-full bg-white/10 my-2"></div>

          <label className="block text-sm font-medium text-gray-300 mb-2">
            Paste Ad Code Snippet (Ins)
          </label>
          <div className="relative">
            <textarea
              className="w-full h-[200px] bg-black/50 border border-white/10 rounded-xl p-4 text-sm font-mono text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
              placeholder="<ins class='adsbyadgeist' data-ad-slot='...' style='width:300px;height:250px'></ins>"
              value={pasteContent}
              onChange={(e) => setPasteContent(e.target.value)}
            />
            <div className="absolute bottom-3 right-2 flex gap-2">
              <button
                onClick={() => handlePasteProcess(pasteContent)}
                disabled={!pasteContent.trim()}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-900/20"
              >
                ➕ ADD🖕🏼
              </button>
            </div>
          </div>
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </div>
      </div>

      <div className="z-10 flex flex-col w-full gap-6">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <h2 className="text-xl font-semibold text-gray-200">
            Active Ads ({ads.length})
          </h2>
          {ads.length > 0 && (
            <button
              onClick={clearAds}
              className="text-xs text-red-400 hover:text-red-300 transition-colors"
            >
              Clear All
            </button>
          )}
        </div>

        <div className="flex flex-wrap w-full gap-8 justify-center">
          {ads?.map((ad, index) => {
            return (
              <div
                key={index + ad.dataadslot}
                className="group relative flex flex-col items-center bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300"
              >
                <div className="absolute -top-3 left-4 px-2 py-1 bg-black/80 border border-white/10 rounded text-[10px] text-gray-400 font-mono">
                  {ad.dataadslot} | {ad.width || "auto"}x{ad.height || "auto"}
                </div>
                <div className="mt-2">
                  <AdBanner
                    dataadslot={ad.dataadslot}
                    dataresponsive={
                      ad.dataresponsive === "true" || ad.dataresponsive === true
                    }
                    width={ad.width}
                    height={ad.height}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllAd;
