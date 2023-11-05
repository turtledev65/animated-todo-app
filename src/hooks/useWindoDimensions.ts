import { useEffect, useState } from "react";

interface WindowDimensions {
  width: number;
  height: number;
}

// TODO: Rewrite using refs so it doesen't trigger unecesary re-renders
const getWindowDimensions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>();

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
    window.addEventListener("resize", () =>
      setWindowDimensions(getWindowDimensions()),
    );

    return window.removeEventListener("resize", () =>
      setWindowDimensions(getWindowDimensions()),
    );
  }, []);

  return { width: windowDimensions?.width, height: windowDimensions?.height };
};

export default useWindowDimensions;
