import { CurrencyState, CurrencyActionTypes } from './types';
import { CurrencyActions } from './actions';

const initialState = {
  fromCurrency: {
    amount: '',
    code: '',
  },
  toCurrency: {
    code: '',
  },
};

export const currencyReducer = (
  state: CurrencyState = initialState,
  action: CurrencyActions
) => {
  switch (action.type) {
    case CurrencyActionTypes.FROM_CURRENCY_AMOUNT:
      return {
        ...state,
        fromCurrency: {
          ...state.fromCurrency,
          amount: action.payload.amount,
        },
      };
    case CurrencyActionTypes.FROM_CURRENCY_CODE:
      return {
        ...state,
        fromCurrency: {
          ...state.fromCurrency,
          code: action.payload.code,
        },
      };
    case CurrencyActionTypes.TO_CURRENCY_CODE:
      return {
        ...state,
        toCurrency: {
          ...state.toCurrency,
          code: action.payload.code,
        },
      };
    default:
      return state;
  }
};
