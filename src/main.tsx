/**
 * main.tsx - Point d'entrée de l'application React
 *
 * Ce fichier est le premier à s'exécuter. Il :
 * 1. Importe les styles globaux
 * 2. Initialise le système de traduction (i18n)
 * 3. Monte l'application React dans le DOM
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Styles globaux (variables CSS, reset, typographie)
import "./index.css";

// Initialisation de i18next (système de traduction)
// L'import suffit à exécuter la configuration
import "../src/i18n/in18.ts";

// Composant racine de l'application
import App from "./App.tsx";

/**
 * Récupère l'élément HTML où React va s'injecter
 * Dans index.html : <div id="root"></div>
 */
const container = document.getElementById("root");

// Vérification de sécurité : le conteneur doit exister
if (!container) {
  throw new Error("Root element not found");
}

/**
 * createRoot : API React 18 pour le rendu concurrent
 * Remplace l'ancien ReactDOM.render()
 *
 * StrictMode : mode développement qui aide à détecter les problèmes
 * - Détecte les effets de bord inattendus
 * - Avertit sur les API dépréciées
 * - Double les rendus en dev pour détecter les bugs
 * (n'affecte pas la production)
 */
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
