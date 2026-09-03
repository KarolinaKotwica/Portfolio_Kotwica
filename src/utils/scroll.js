const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const behavior = () => (prefersReducedMotion() ? "auto" : "smooth");

export const scrollToElement = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: behavior() });
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: behavior() });
};
