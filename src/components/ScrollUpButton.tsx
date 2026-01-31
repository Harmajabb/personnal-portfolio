import { useEffect, useState } from "react";
import scrollUpIcon from "../assets/scroll-up.svg";
import "./ScrollUpButton.css";
import { t } from "i18next";

function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Mettre le focus sur la navbar après le scroll
    setTimeout(() => {
      const navbarBrand = document.querySelector(
        ".navbar-brand"
      ) as HTMLElement;
      if (navbarBrand) {
        navbarBrand.focus();
      }
    }, 500);
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`scroll-up ${isVisible ? "visible" : "hidden"}`}
      aria-label={t("a11y_scrollUP")}
    >
      <img
        src={scrollUpIcon}
        alt=""
        className="scroll-up-icon"
        aria-hidden="true"
      />
    </button>
  );
}

export default ScrollUpButton;
