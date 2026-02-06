"use client";

import { useEffect, useRef, useState, RefObject } from "react";

/**
 * Hook for scroll-triggered reveal animations.
 * Attaches an IntersectionObserver and toggles a 'revealed' CSS class.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px"
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          el.classList.add("revealed");
          observer.unobserve(el); // only animate once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}

/**
 * Batch-reveal: observe multiple children inside a parent container.
 * Each child with class "reveal" / "reveal-left" / "reveal-right" / "reveal-scale"
 * gets staggered reveal via CSS transition-delay.
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  staggerMs = 120,
  threshold = 0.1
): RefObject<T | null> {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );

    children.forEach((child, i) => {
      (child as HTMLElement).style.transitionDelay = `${i * staggerMs}ms`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => child.classList.add("revealed"));
          observer.unobserve(container);
        }
      },
      { threshold }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [staggerMs, threshold]);

  return containerRef;
}
