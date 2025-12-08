"use client";

import AdBanner from "@/component/AdBanner";
import Script from "next/script";
import React, { useEffect, useState } from "react";

const AllAd = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState(false);
  const [ads, setAds] = useState([]);
  const [pasteContent, setPasteContent] = useState("");
  const [error, setError] = useState("");

  // Global Script Configuration
  const [scriptConfig, setScriptConfig] = useState({
      publisherId: "69313010b753c523ef72a5d4",
      apiKey: "1e3357a7a4572ec9eb787761ca94740c17cd5f8adaa3cc7e214d33ec706d478b",
      scriptSrc: "/creativebyadgeist.js",
      origin: "https://hackathon-lake-nine.vercel.app", // Platform Origin
      env: "development"
  });

  // Separate inputs state
  const [originInput, setOriginInput] = useState("/creativebyadgeist.js");
  const [apiOriginInput, setApiOriginInput] = useState("https://hackathon-lake-nine.vercel.app");
  
  const handleScriptSrcChange = (val) => {
      setOriginInput(val);
      setScriptConfig(prev => ({ ...prev, scriptSrc: val }));
  };

  const handleApiOriginChange = (val) => {
      setApiOriginInput(val);
      setScriptConfig(prev => ({ ...prev, origin: val }));
  };

  const handlePasteProcess = (content) => {
    try {
      if (!content.trim()) return;

      const parser = new DOMParser();
      const doc = parser.parseFromString(content, "text/html");
      const ins = doc.querySelector("ins");
      const script = doc.querySelector("script");
      
      let newAd = null;
      let configUpdate = {};

      // Parse Script Tag if present
      if (script) {
          const pubId = script.getAttribute("data-publisher-id");
          const apiKey = script.getAttribute("data-api-key");
          const src = script.getAttribute("src");
          const env = script.getAttribute("data-env"); // Optional if present
          const origin = script.getAttribute("data-origin");

          if (pubId) configUpdate.publisherId = pubId;
          if (apiKey) configUpdate.apiKey = apiKey;
          if (src) {
              configUpdate.scriptSrc = src;
              setOriginInput(src); // Update valid origin input
          }
          if (origin) {
              configUpdate.origin = origin;
              setApiOriginInput(origin);
          }
          if (env) configUpdate.env = env;

          if (Object.keys(configUpdate).length > 0) {
              setScriptConfig(prev => ({ ...prev, ...configUpdate }));
          }
      }

      // Parse Ins Tag if present
      if (ins) {
        const styleWidth = ins.style.width;
        const styleHeight = ins.style.height;

        newAd = {
            datapublisherid: ins.getAttribute("data-publisher-id") || configUpdate.publisherId || scriptConfig.publisherId,
            dataapikey: ins.getAttribute("data-api-key") || configUpdate.apiKey || scriptConfig.apiKey,
            dataadslot: ins.getAttribute("data-ad-slot") || "",
            dataslottype: ins.getAttribute("data-slot-type") || "display",
            dataresponsive: ins.getAttribute("data-responsive") || "false",
            dataresponsivetype: ins.getAttribute("data-responsive-type") || "",
            width: styleWidth ? parseInt(styleWidth) : 0,
            height: styleHeight ? parseInt(styleHeight) : 0,
        };

        // Update Local Storage and State for Ads
        const updatedAds = [...ads, newAd];
        setAds(updatedAds);
        localStorage.setItem("adBannerDetails", JSON.stringify(updatedAds));
      }

      if (!ins && !script) {
         setError("No <ins> or <script> tag found in pasted code.");
         return;
      }
      
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
  }

  return (
    <div className="flex h-[100vh] flex-col items-center p-8 overflow-auto bg-black gap-8 text-white relative">
        {/* Background Gradients for Premium Feel */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/20 blur-[120px] rounded-full"></div>
        </div>

      {/* Dynamic Script based on Config */}
      <Script
        key={scriptConfig.scriptSrc + scriptConfig.publisherId + scriptConfig.origin} // Force reload on change
        src={scriptConfig.scriptSrc}
        data-should-ingest-events-to-cdp={false}
        data-publisher-id={scriptConfig.publisherId}
        data-api-key={scriptConfig.apiKey}
        data-origin={scriptConfig.origin} 
        data-env={scriptConfig.env}
        onReady={() => {
          setScriptLoaded(true);
          if (window && window?.adsbyadgeist) {
            const adsbyadgeist = window.adsbyadgeist;
            if (adsbyadgeist.setUserDetails) {
              adsbyadgeist.setUserDetails({
                user_id: 999,
                user_name: "Akshay",
                email: "akshay@thealteroffice.com",
              });
            }
            if (adsbyadgeist.showConsentBanner) {
              adsbyadgeist.showConsentBanner();
            }
          }
        }}
        onError={(e) => {
          setScriptLoaded(false);
          setScriptError(true);
        }}
      ></Script>

      <div className="z-10 w-full max-w-4xl flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-bl from-orange-400 to-red-500">
              Ad Manager
          </h1>
          
          <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                          Script Source URL
                      </label>
                      <input 
                          type="text"
                          className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm font-mono text-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                          value={originInput}
                          onChange={(e) => handleScriptSrcChange(e.target.value)}
                          placeholder="/creativebyadgeist.js"
                      />
                   </div>
                   <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                          API Payload Origin
                      </label>
                      <input 
                          type="text"
                          className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm font-mono text-green-300 focus:outline-none focus:ring-1 focus:ring-green-500 transition-all"
                          value={apiOriginInput}
                          onChange={(e) => handleApiOriginChange(e.target.value)}
                          placeholder="https://..."
                      />
                   </div>
               </div>
                
                {/* Config Display (Read-only/Editable if needed, making them read-only for now to rely on paste) */}
               <div className="grid grid-cols-2 gap-4">
                   <div className="flex flex-col gap-1">
                       <label className="text-[10px] uppercase text-gray-500 font-bold">Publisher ID</label>
                       <div className="text-xs font-mono text-gray-300 bg-black/30 p-2 rounded border border-white/5 truncate">
                           {scriptConfig.publisherId}
                       </div>
                   </div>
                   <div className="flex flex-col gap-1">
                        <label className="text-[10px] uppercase text-gray-500 font-bold">API Key</label>
                        <div className="text-xs font-mono text-gray-300 bg-black/30 p-2 rounded border border-white/5 truncate">
                            {scriptConfig.apiKey}
                        </div>
                   </div>
               </div>

               <div className="h-px w-full bg-white/10 my-2"></div>

              <label className="block text-sm font-medium text-gray-300 mb-2">
                  Paste Ad Code Snippet (Script + Ins)
              </label>
              <div className="relative">
                <textarea
                    className="w-full h-[200px] bg-black/50 border border-white/10 rounded-xl p-4 text-sm font-mono text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                    placeholder="<script ...></script>
<ins class='adsbyadgeist' ...></ins>"
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

      {scriptError && (
        <div className="text-red-500 bg-red-900/20 px-4 py-2 rounded border border-red-500/50">
            Error loading ad script from {scriptConfig.scriptSrc}
        </div>
      )}

    <div className="z-10 flex flex-col w-full gap-6">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <h2 className="text-xl font-semibold text-gray-200">Active Ads ({ads.length})</h2>
            {ads.length > 0 && (
                <button 
                    onClick={clearAds}
                    className="text-xs text-red-400 hover:text-red-300 transition-colors"
                >
                    Clear All
                </button>
            )}
        </div>
        
      {scriptLoaded && (
        <div className="flex flex-wrap w-full gap-8 justify-center">
          {ads?.map((ad, index) => {
            return (
              <div
                key={index + ad.dataadslot}
                className="group relative flex flex-col items-center bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300"
              >
                <div className="absolute -top-3 left-4 px-2 py-1 bg-black/80 border border-white/10 rounded text-[10px] text-gray-400 font-mono">
                    {ad.width}x{ad.height} | {ad.dataslottype}
                </div>
                <div className="mt-2">
                    <AdBanner
                    datapublisherid={ad.datapublisherid}
                    dataapikey={ad.dataapikey}
                    dataadslot={ad.dataadslot}
                    dataslottype={ad.dataslottype}
                    dataresponsive={ad.dataresponsive === "true" || ad.dataresponsive === true}
                    dataresponsivetype={ad.dataresponsivetype}
                    width={Number(ad.width)}
                    height={Number(ad.height)}
                    />
                </div>
              </div>
            );
          })}
        </div>
      )}
      </div>
    </div>
  );
};

export default AllAd;
