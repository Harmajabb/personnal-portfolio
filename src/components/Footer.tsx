/**
 * Footer.tsx - Pied de page du portfolio
 *
 * Composant simple affichant :
 * - Une ligne de séparation
 * - Le copyright
 * - Les scores Lighthouse (Performance, Accessibilité, SEO)
 *
 * Note : Ce composant n'utilise pas de traduction car les textes
 * sont techniques et universels (scores, copyright)
 */

import "./Footer.css";

export default function Footer() {
  return (
    // Balise sémantique <footer> pour le pied de page
    <footer className="footer">
      {/* Ligne de séparation horizontale */}
      <hr className="footer-line" />

      {/* Contenu du footer en deux parties */}
      <div className="footer-content">
        {/* Copyright à gauche */}
        <p className="footer-left">COPYRIGHT © 2025</p>

        {/*
          Scores Lighthouse au centre
          PERF = Performance
          A11Y = Accessibility (Accessibilité)
          SEO = Search Engine Optimization
        */}
        <p className="footer-center">PERF 99 - A11Y 95 - SEO 100</p>
      </div>
    </footer>
  );
}
