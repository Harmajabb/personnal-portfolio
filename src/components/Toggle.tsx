import {
  useEffect,
  useEffect as useEffectType,
  useMemo,
  useState,
} from "react";
import moonIcon from "../assets/ImageNav/moon.svg";
import sunIcon from "../assets/ImageNav/sun.svg";
import "./Toggle.css";

function Toggle() {
  type Theme = "light" | "dark";
  const STORAGE_KEY = "theme";

  const getStoredTheme = (): Theme | null => {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  };

  const getInitialTheme = (): Theme => {
    const stored = getStoredTheme();
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffectType(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!getStoredTheme()) setTheme(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";

  const ariaLabel = useMemo(() => {
    return nextTheme === "light"
      ? "Basculer le thème en clair"
      : "Basculer le thème en sombre";
  }, [nextTheme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-pressed={theme === "dark"}
      aria-label={ariaLabel}
      onClick={toggleTheme}
    >
      <span className="icon-viewport" aria-hidden="true">
        <span className="icon-stack">
          <img src={sunIcon} alt="" className="icon" />
          <img src={moonIcon} alt="" className="icon" />
        </span>
      </span>
      <span className="sr-only" aria-live="polite">
        {theme === "dark" ? "Thème sombre activé" : "Thème clair activé"}
      </span>
    </button>
  );
}

export default Toggle;
