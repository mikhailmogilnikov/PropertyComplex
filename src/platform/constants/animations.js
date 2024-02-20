export const animations = {};

export const transitions = {
  desktopVisibility: { type: 'spring', stiffness: 150, damping: 20 },
};

export const variants = {
  desktop: {
    menu: {
      initial: { opacity: 0, x: '-110%', scale: 0.2 },
      open: { opacity: 1, x: 0, scale: 1 },
      closed: { opacity: 1, x: '-110%', scale: 1 },
    },
  },
  mobile: {},
};
