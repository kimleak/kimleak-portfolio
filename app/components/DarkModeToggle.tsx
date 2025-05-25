'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-yellow-300 transition-colors"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}
