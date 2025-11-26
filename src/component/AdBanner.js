"use client";

import React, { useEffect } from "react";

const AdBanner = ({
  adspaceName = "",
  dataadslot,
  dataslottype,
  databuytype,
  dataresponsive = false,
  dataresponsivetype = "square",
  width = 300,
  height = 300,
}) => {
  const [reloading, setReloading] = React.useState(false);

  const loadAd = () => {
    try {
    } catch (err) {}
  };

  useEffect(() => {
    if (!reloading) {
      loadAd();
    }
  }, [reloading]);

  if (reloading) {
    return (
      <div
        style={{
          width: typeof width == "number" ? `${width}px` : width,
          height: typeof height == "number" ? `${height}px` : height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f0f0",
          textAlign: "center",
        }}
      >
        loading
      </div>
    );
  }

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
          display: "block",
          textDecoration: "none",
          width: dataresponsive
            ? "100%"
            : typeof width === "number"
            ? `${width}px`
            : width,
          height: dataresponsive
            ? "100%"
            : typeof height === "number"
            ? `${height}px`
            : height,
        }}
        data-ad-slot={dataadslot}
        data-slot-type={dataslottype}
        data-buy-type={"FIXED"}
        data-responsive={dataresponsive}
        data-responsive-type={dataresponsivetype}
      ></ins>
    </div>
  );
};

export default AdBanner;
