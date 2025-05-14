// Action types
export const gm = 'GOOD_MORNING';
export const gn = 'GOOD_NIGHT';

// Action creators
export const gmAction = () => ({
  type: gm,
});

export const gnAction = () => ({
  type: gn,
});