/**
 * App.tsx - Composant racine de l'application
 *
 * Responsabilités :
 * - Structure globale de la page (navbar, main, footer)
 * - Synchronisation de la langue avec l'attribut HTML lang
 * - Rendu des composants persistants (navbar, footer, scroll button)
 */

/** biome-ignore-all assist/source/organizeImports: <good import even it has alerts on it> */
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Composants de layout (structure de page)
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import ScrollUpButton from "./components/ScrollUpButton";

// Page principale (contient toutes les sections)
import Home from "./pages/Home";

function App() {
  /**
   * useTranslation() : hook de react-i18next
   * - t : fonction pour traduire une clé (non utilisée ici)
   * - i18n : instance i18next avec la langue courante
   */
  const { i18n } = useTranslation();

  /**
   * useEffect : synchronise l'attribut lang du HTML avec la langue active
   *
   * Pourquoi c'est important :
   * - Accessibilité : les lecteurs d'écran utilisent lang pour la prononciation
   * - SEO : les moteurs de recherche utilisent lang pour indexer
   * - Navigateurs : peuvent adapter les polices selon la langue
   *
   * i18n.resolvedLanguage peut être "fr-FR", on garde juste "fr"
   */
  useEffect(() => {
    // Extrait le code langue principal (ex: "fr" de "fr-FR")
    const lang = i18n.resolvedLanguage?.split("-")[0] ?? "fr";

    // Met à jour les attributs du document HTML
    document.documentElement.lang = lang; // <html lang="fr">
    document.documentElement.dir = "ltr"; // Direction d'écriture (gauche à droite)
  }, [i18n.resolvedLanguage]); // Se relance quand la langue change

  return (
    <>
      {/* Barre de navigation fixe en haut */}
      <Navbar />

      {/* Contenu principal - balise sémantique pour l'accessibilité */}
      <main>
        <Home />
      </main>

      {/* Pied de page */}
      <Footer />

      {/* Bouton flottant pour remonter en haut de page */}
      <ScrollUpButton />
    </>
  );
}

export default App;
