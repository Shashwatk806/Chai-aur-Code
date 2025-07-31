// components/ThemeBtn.jsx
import React from "react";
import useTheme from "../context/theme";

export default function ThemeBtn() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const handleChange = (e) => {
    const isDark = e.target.checked;
    if (isDark) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={themeMode === "dark"}
        onChange={handleChange}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full" />
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
        Toggle Theme
      </span>
    </label>
  );
}
