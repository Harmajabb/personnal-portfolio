/**
 * useRevealOnScroll.ts - Hook personnalisé pour animer l'apparition au scroll
 *
 * Ce hook utilise l'Intersection Observer API pour détecter quand
 * un élément entre dans le viewport et déclencher son animation.
 *
 * Usage :
 * ```tsx
 * const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();
 *
 * return (
 *   <div ref={ref} className={`reveal ${isVisible ? 'reveal--visible' : ''}`}>
 *     Contenu animé
 *   </div>
 * );
 * ```
 *
 * Caractéristiques :
 * - Animation déclenchée une seule fois (disconnect après visibilité)
 * - Respecte prefers-reduced-motion (pas d'animation si désactivé)
 * - Seuil de 20% (déclenche quand 20% de l'élément est visible)
 */

import { useEffect, useRef, useState } from "react";

/**
 * Hook générique pour animer l'apparition d'un élément au scroll
 *
 * @template T - Type de l'élément HTML (ex: HTMLDivElement, HTMLSectionElement)
 * @returns {{ ref: RefObject<T>, isVisible: boolean }}
 */
export function useRevealOnScroll<T extends HTMLElement>() {
  /**
   * useRef crée une référence qui persiste entre les rendus
   * On l'attache à l'élément DOM à observer
   */
  const ref = useRef<T | null>(null);

  /**
   * État pour tracker si l'élément est devenu visible
   * Une fois à true, ne redevient jamais false (animation one-shot)
   */
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    // Si pas d'élément, on ne fait rien
    if (!element) return;

    /**
     * Respect de l'accessibilité : prefers-reduced-motion
     * Si l'utilisateur a demandé moins d'animations,
     * on rend l'élément visible immédiatement sans animation
     */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    /**
     * IntersectionObserver observe quand l'élément entre/sort du viewport
     *
     * Callback reçoit un tableau d'entries (éléments observés)
     * Chaque entry contient :
     * - isIntersecting : true si l'élément est visible
     * - intersectionRatio : pourcentage visible (0 à 1)
     * - target : l'élément observé
     */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Arrête d'observer une fois l'animation déclenchée
            // L'animation ne se joue qu'une seule fois
            observer.disconnect();
          }
        });
      },
      {
        /**
         * threshold: 0.2 signifie que le callback se déclenche
         * quand 20% de l'élément est visible dans le viewport
         *
         * Valeurs possibles : 0 (dès le 1er pixel) à 1 (100% visible)
         */
        threshold: 0.2,
      },
    );

    // Commence à observer l'élément
    observer.observe(element);

    // Cleanup : arrête d'observer au démontage du composant
    return () => {
      observer.disconnect();
    };
  }, []); // Tableau vide = exécuté une seule fois au montage

  // Retourne la ref à attacher et l'état de visibilité
  return { ref, isVisible };
}
