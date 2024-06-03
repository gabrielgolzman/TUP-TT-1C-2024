import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

const themeValue = localStorage.getItem("theme");

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeValue);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", themeValue);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("theme", "dark");

      setTheme("dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "light");
      localStorage.setItem("theme", "light");

      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
