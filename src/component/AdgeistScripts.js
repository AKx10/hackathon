"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getAdgeistIds, identifyStoredUser } from "@/lib/adgeist";

export const PUBLISHER_SDK_URL =
  "https://cdn-beta.adgeist.ai/publisher/v1-beta/publisher.min.js";
export const ADVERTISER_SDK_URL =
  "https://cdn-beta.adgeist.ai/advertiser/v1-beta/advertiser.min.js";

// Loaded once from the root layout so both SDKs survive client-side navigation.
// Ids come from localStorage, so the scripts render only after mount.
const AdgeistScripts = () => {
  const [ids, setIds] = useState(null);

  useEffect(() => {
    setIds(getAdgeistIds());
  }, []);

  if (!ids) return null;

  return (
    <>
      <Script
        async
        src={PUBLISHER_SDK_URL}
        data-publisher-id={ids.publisherId || undefined}
        onLoad={identifyStoredUser}
      />
      <Script
        async
        src={ADVERTISER_SDK_URL}
        data-advertiser-id={ids.advertiserId || undefined}
        onLoad={identifyStoredUser}
      />
    </>
  );
};

export default AdgeistScripts;
