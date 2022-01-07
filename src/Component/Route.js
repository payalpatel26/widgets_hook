import { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  const [currentlocation, setcurrentlocation] = useState(
    window.location.pathname
  );
  const onLocationChange = () => {
    setcurrentlocation(window.location.pathname);
  };
  useEffect(() => {
    window.addEventListener("popstate", onLocationChange, { capture: true });

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return currentlocation === path ? children : null;
};
export default Route;
