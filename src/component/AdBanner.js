"use client";

import React from "react";

// Numbers are px, strings ("100%", "250px") pass through, empty means unset so
// the SDK sizes the slot from the ad space.
const toCss = (size) =>
  !size ? undefined : typeof size === "number" ? `${size}px` : size;

// The SDK discovers `.adsbyadgeist` slots on its own; data-ad-slot is the only
// attribute it reads. Size comes from our CSS.
const AdBanner = ({
  adspaceName = "",
  dataadslot,
  dataresponsive = false,
  width,
  height,
}) => {
  return (
    <div>
      {!!adspaceName && (
        <div
          style={{
            marginBottom: "4px",
          }}
        >
          {adspaceName}
        </div>
      )}
      <ins
        className="adsbyadgeist"
        style={{
          display: "inline-block",
          textDecoration: "none",
          width: dataresponsive ? "100%" : toCss(width),
          height: toCss(height),
        }}
        data-ad-slot={dataadslot}
      ></ins>
    </div>
  );
};

export default AdBanner;
