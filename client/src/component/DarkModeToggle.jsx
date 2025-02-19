import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

const DarkModeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button className="dark-mode-toggle" onClick={toggleTheme}>
      {darkMode ? <MdLightMode size={36} color="#ff8000"/> : <MdDarkMode size={36} color="black"/>}
    </button>
  );
};

export default DarkModeToggle;
