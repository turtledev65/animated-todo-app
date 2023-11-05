import { useEffect, useRef } from "react";

const getWindowDimensions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

const useWindowDimensions = () => {
  const windowDimensionsRef = useRef(getWindowDimensions());

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => (windowDimensionsRef.current = getWindowDimensions()),
    );
    return window.removeEventListener(
      "resize",
      () => (windowDimensionsRef.current = getWindowDimensions()),
    );
  }, []);

  return {
    width: windowDimensionsRef.current.width,
    height: windowDimensionsRef.current.height,
  };
};

export default useWindowDimensions;
