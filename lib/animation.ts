export const ltrAnimation = {
  initial: { x: "-20%", opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true },
};

export const rtlAnimation = {
  initial: { x: "20%", opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true },
};

export const bottomupAnimation = {
  initial: { y: "50%", opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export const appearAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const appearOnceAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};
