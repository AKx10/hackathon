"use client";

import { useEffect, useState } from "react";
import { getAdgeistIds, setAdgeistIds } from "@/lib/adgeist";

// Lets an e2e run point the SDKs at any publisher/advertiser; saving reloads
// the page so both scripts re-initialize with the new ids.
const AdgeistIdsForm = () => {
  const [publisherId, setPublisherId] = useState("");
  const [advertiserId, setAdvertiserId] = useState("");

  useEffect(() => {
    const ids = getAdgeistIds();
    setPublisherId(ids.publisherId);
    setAdvertiserId(ids.advertiserId);
  }, []);

  return (
    <form
      className="flex flex-wrap items-end gap-3 mb-5"
      onSubmit={(e) => {
        e.preventDefault();
        setAdgeistIds({ publisherId, advertiserId });
      }}
    >
      <label className="flex flex-col gap-1">
        <span className="text-[10px] uppercase text-gray-400 font-bold font-mono">
          Publisher ID
        </span>
        <input
          type="text"
          name="publisherId"
          value={publisherId}
          onChange={(e) => setPublisherId(e.target.value)}
          className="input input-bordered input-sm w-64 font-mono"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-[10px] uppercase text-gray-400 font-bold font-mono">
          Advertiser ID
        </span>
        <input
          type="text"
          name="advertiserId"
          value={advertiserId}
          onChange={(e) => setAdvertiserId(e.target.value)}
          className="input input-bordered input-sm w-64 font-mono"
        />
      </label>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-900/20"
      >
        Save &amp; reload SDKs
      </button>
    </form>
  );
};

export default AdgeistIdsForm;
