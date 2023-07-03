"use client";

import { useEffect } from "react";

const HeaderWidget = ({ domain }) => {
  useEffect(() => {
    console.log(domain);
    const widgetContainer =
      document.getElementsByClassName("fheader-script")[0];
    const script = document.createElement("script");
    script.src = `https://tools.contrib.com/widget/fheader?d=${domain}&container=fheader-script`;
    script.async = true;

    widgetContainer.appendChild(script);

    return () => {
      // Cleanup function to remove the script when the component is unmounted
      widgetContainer.removeChild(script);
    };
  }, []);
  return <div className="fheader-script"></div>;
};

export default HeaderWidget;
