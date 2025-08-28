"use client";

import React, { useEffect } from "react";

const AdBanner = ({
  datapublisherid,
  dataadslot,
  dataapikey,
  dataslottype,
  dataresponsive = false,
  dataresponsivetype = "square",
  width = 300,
  height = 300,
}) => {
  const [reloading, setReloading] = React.useState(false);

  const loadAd = () => {
    try {
      (window.adsbyadgeist = window.adsbyadgeist || []).push({});
    } catch (err) {}
  };

  // // mount components every 10 seconds
  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setReloading(true);
  //     setTimeout(() => {
  //       setReloading(false);
  //     }, 500); // Wait for 1 second before reloading
  //   }, 10000); // 10 seconds

  //   return () => clearInterval(interval);
  // }, []);

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
        Loading...
      </div>
    );
  }

  return (
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
      data-publisher-id={datapublisherid}
      data-ad-slot={dataadslot}
      data-api-key={dataapikey}
      data-slot-type={dataslottype}
      data-responsive={dataresponsive}
      data-responsive-type={dataresponsivetype}
    ></ins>
  );
};

export default AdBanner;
