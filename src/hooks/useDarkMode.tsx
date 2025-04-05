import { useState, useEffect } from 'react';

const isDarkMode = () => {
  const theme = localStorage.getItem('theme');
  const system =
    !('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  return theme === 'dark' || system;
};

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(isDarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleToggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return { darkMode, handleToggleTheme };
};
