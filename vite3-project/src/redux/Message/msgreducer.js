// Initial state
const initialState = {
  msg: 'hello',
};

// Reducer function
function msgreducer(state = initialState, action) {
  switch (action.type) {
    case 'GOOD_MORNING':
      return { msg: 'Good Morning' };
    case 'GOOD_NIGHT':
      return { msg: 'Good Night' };
    default:
      return state;
  }
}

export default msgreducer;