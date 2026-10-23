// Thin wrappers around the Adgeist SDK globals. Both SDKs load async, so every
// call is guarded on the global being present.

export const DEFAULT_ADGEIST_ID = "69a6a5c6987b5f0a9357cfa1";
const IDS_KEY = "adgeistIds";

// Publisher/advertiser ids are configurable for e2e runs and kept in
// localStorage. An empty id is kept as-is so the "missing id" path can be tested.
export const getAdgeistIds = () => {
  const ids = {
    publisherId: DEFAULT_ADGEIST_ID,
    advertiserId: DEFAULT_ADGEIST_ID,
  };
  try {
    const stored = JSON.parse(localStorage.getItem(IDS_KEY) || "{}");
    if (typeof stored.publisherId === "string")
      ids.publisherId = stored.publisherId;
    if (typeof stored.advertiserId === "string")
      ids.advertiserId = stored.advertiserId;
  } catch (error) {
    console.error("Error reading adgeistIds from localStorage:", error);
  }
  return ids;
};

// The SDKs initialize once per page and skip a second load, so new ids only
// take effect after a full reload.
export const setAdgeistIds = ({ publisherId, advertiserId }) => {
  try {
    localStorage.setItem(
      IDS_KEY,
      JSON.stringify({
        publisherId: publisherId.trim(),
        advertiserId: advertiserId.trim(),
      }),
    );
  } catch (error) {
    console.error("Error saving adgeistIds to localStorage:", error);
  }
  window.location.reload();
};

export const identifyUser = ({ name, email } = {}) => {
  if (typeof window === "undefined") return;
  const userId = email || name;
  if (!userId) return;

  window.adsbyadgeist?.setUserDetails({
    userId,
    email: email || undefined,
    name: name || undefined,
    companyName: "Hackathon",
  });
  window.adgeistAdvertiser?.setUserDetails({
    userId,
    email: email || undefined,
    companyName: "Hackathon",
  });
};

// Re-identify the user saved by the home page form (runs on every page load).
export const identifyStoredUser = () => {
  try {
    const stored = localStorage.getItem("user");
    if (stored) identifyUser(JSON.parse(stored));
  } catch (error) {
    console.error("Error reading user from localStorage:", error);
  }
};

export const trackConversion = (eventType, payload) => {
  if (typeof window === "undefined") return;
  return window.adgeistAdvertiser?.trackConversionEvent(eventType, payload);
};
