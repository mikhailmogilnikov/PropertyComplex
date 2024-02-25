export const animations = {};

export const transitions = {
  primary: {
    type: 'spring',
    duration: 0.5,
    bounce: 0.05,
  },
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
