import { gm, gn } from "./msgaction";

// Initial state
const initialState = {
  msg: 'hello',
};

// Reducer function
function msgreducer(state = initialState, action) {
  switch (action.type) {
    case 'gm_type':
      return { msg: 'Good Morning' };
    case 'gn_type':
      return { msg: 'Good Night' };
    default:
      return state;
  }
}

export default msgreducer;