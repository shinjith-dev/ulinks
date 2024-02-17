import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [mode, setMode] = useState("dark");

  const setSystem = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setMode("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      setMode("light");
      localStorage.setItem("theme", "light");
    }
  };

  const setDark = () => {
    document.documentElement.classList.add("dark");
    setMode("dark");
    localStorage.setItem("theme", "dark");
  };

  const setLight = () => {
    document.documentElement.classList.remove("dark");
    setMode("light");
    localStorage.setItem("theme", "light");
  };

  useEffect(() => {
    if (localStorage.theme === "dark") setDark();
    else if (localStorage.theme === "light") setLight();
    else setSystem();
  }, []);

  const change = (isDark: boolean) => {
    if (isDark) setDark();
    else setLight();
  };

  return { mode, change };
};

export default useDarkMode;
