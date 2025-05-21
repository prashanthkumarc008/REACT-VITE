import { INC, DEC } from '../prodAction';

const initialState = {
  P_NAME: 'asus',
  p_price: 10000,
  qty: 1,
};

export const prodReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return { ...state, qty: state.qty + 1 };
    case DEC:
      return { ...state, qty: state.qty > 1 ? state.qty - 1 : 1 };
    default:
      return state;
  }
};