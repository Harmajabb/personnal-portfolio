/** biome-ignore-all assist/source/organizeImports: <good import even it has alerts on it> */
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import ScrollUpButton from "./components/ScrollUpButton";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.resolvedLanguage?.split("-")[0] ?? "fr";

    document.documentElement.lang = lang;
    document.documentElement.dir = "ltr";
  }, [i18n.resolvedLanguage]);
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <ScrollUpButton />
    </>
  );
}

export default App;
