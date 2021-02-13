import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export const useMobileCheck = () => {
  const [mobile, setMobile] = useState(isMobile);
  const handleWindowSizeChange = () => {
    setMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return mobile;
};
