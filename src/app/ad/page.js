"use client";

import AdBanner from "@/component/AdBanner";
import Script from "next/script";
import { useEffect, useState } from "react";

const AllAd = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState(false);
  const [ads, setAds] = useState([]);

  const [bannerFields, setBannerFields] = useState({
    datapublisherid: "",
    dataapikey: "",
    dataadslot: "",
    dataslottype: "",
    dataresponsive: false,
    dataresponsivetype: "",
    width: 0,
    height: 0,
  });

  const handleChange = (key, value) => {
    try {
      setBannerFields((prev) => ({
        ...prev,
        [key]: value,
      }));
    } catch (error) {
      console.error("Error updating fields:", error);
    }
  };

  const onAddAD = () => {
    try {
      const updatedAds = [...ads, bannerFields];
      setAds(updatedAds);
      localStorage.setItem("adBannerDetails", JSON.stringify(updatedAds));
      setBannerFields({
        datapublisherid: "",
        dataapikey: "",
        dataadslot: "",
        dataslottype: "",
        dataresponsive: false,
        dataresponsivetype: "",
        width: 0,
        height: 0,
      });
    } catch (error) {
      console.error("Error adding ad:", error);
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
  console.log(ads);

  return (
    <div className="flex h-[100vh] flex-col items-center justify-between p-14 overflow-auto bg-black gap-4">
      <Script
        src="https://d2cfeg6k9cklz9.cloudfront.net/creativebyadgeist.js"
        data-ad-serve-url="https://bg-services-api.adgeist.ai"
        data-env="development"
        data-ad-tracking-url="https://bg-services-api.adgeist.ai"
        onReady={() => {
          setScriptLoaded(true);
          if (window && window?.adsbyadgeist) {
            window.adsbyadgeist?.setUserDetails({
              user_id: 99,
              user_name: "Akshay",
              email: "akshay@thealteroffice.com",
            });
            window.adsbyadgeist?.showConsentBanner();
          }
        }}
        onError={(e) => {
          setScriptLoaded(false);
          setScriptError(true);
        }}
      ></Script>
      <div className="flex p-3 bg-[#001861] rounded-xl flex-wrap items-center justify-center">
        <div className="flex mb-5">
          <label class="form-control w-full max-w-[400px] min-w-[350px]">
            <div class="label">
              <span class="label-text font-mono text-white">
                datapublisherid
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              value={bannerFields.datapublisherid}
              onChange={(e) => handleChange("datapublisherid", e.target.value)}
            />
          </label>
        </div>
        <div className="flex mb-5">
          <label class="form-control w-full max-w-[400px] min-w-[350px]">
            <div class="label">
              <span class="label-text font-mono text-white">dataapikey</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              value={bannerFields.dataapikey}
              onChange={(e) => handleChange("dataapikey", e.target.value)}
            />
          </label>
        </div>
        <div className="flex mb-5">
          <label class="form-control w-full max-w-[400px] min-w-[350px]">
            <div class="label">
              <span class="label-text font-mono text-white">dataadslot</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              value={bannerFields.dataadslot}
              onChange={(e) => handleChange("dataadslot", e.target.value)}
            />
          </label>
        </div>
        <div className="flex mb-5">
          <label class="form-control w-full max-w-[400px] min-w-[350px]">
            <div class="label">
              <span class="label-text font-mono text-white">dataslottype</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              value={bannerFields.dataslottype}
              onChange={(e) => handleChange("dataslottype", e.target.value)}
            />
          </label>
        </div>
        <div className="flex mb-5">
          <label class="form-control w-full max-w-[400px] min-w-[350px]">
            <div class="label">
              <span class="label-text font-mono text-white">
                dataresponsive
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              value={bannerFields.dataresponsive}
              onChange={(e) => handleChange("dataresponsive", e.target.value)}
            />
          </label>
        </div>
        <div className="flex mb-5">
          <label class="form-control w-full max-w-[400px] min-w-[350px]">
            <div class="label">
              <span class="label-text font-mono text-white">
                dataresponsivetype
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              value={bannerFields.dataresponsivetype}
              onChange={(e) =>
                handleChange("dataresponsivetype", e.target.value)
              }
            />
          </label>
        </div>
        <div className="flex mb-5">
          <label class="form-control w-full max-w-[400px] min-w-[350px]">
            <div class="label">
              <span class="label-text font-mono text-white">width</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              value={bannerFields.width}
              onChange={(e) => handleChange("width", e.target.value)}
            />
          </label>
        </div>
        <div className="flex mb-5">
          <label class="form-control w-full max-w-[400px] min-w-[350px]">
            <div class="label">
              <span class="label-text font-mono text-white">height</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              value={bannerFields.height}
              onChange={(e) => handleChange("height", e.target.value)}
            />
          </label>
        </div>
        <div className="flex items-center justify-center w-full ">
          <button onClick={onAddAD} className="btn btn-primary font-mono">
            Add AD
          </button>
        </div>
      </div>
      {scriptError && (
        <div className="text-red-500">Error loading ad script</div>
      )}
      {scriptLoaded && (
        <div className="flex flex-wrap w-full gap-10 flex-1">
          {ads?.map((ad, index) => {
            return (
              <div
                key={index + ad.dataadslot}
                className="flex bg-white/10 h-fit w-fit rounded-md p-1"
              >
                <AdBanner
                  datapublisherid={ad.datapublisherid}
                  dataapikey={ad.dataapikey}
                  dataadslot={ad.dataadslot}
                  dataslottype={ad.dataslottype}
                  dataresponsive={ad.dataresponsive == "true" ? true : false}
                  dataresponsivetype={ad.dataresponsivetype}
                  width={Number(ad.width)}
                  height={Number(ad.height)}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AllAd;
