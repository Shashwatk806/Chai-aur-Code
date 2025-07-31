import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
export const ThemeContext = createContext();

// Create the component that holds state and provides value
export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use in components
export default function useTheme() {
  return useContext(ThemeContext);
}
