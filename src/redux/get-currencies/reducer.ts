import { CurrenciesActionTypes, CurrenciesState } from './types';
import { CurrenciesActions } from './actions';

const initialState = {
  loading: false,
  currencies: [],
  error: null,
};

export const getCurrenciesReducer = (
  state: CurrenciesState = initialState,
  action: CurrenciesActions
) => {
  switch (action.type) {
    case CurrenciesActionTypes.STARTED:
      return {
        ...state,
        loading: true,
      };
    case CurrenciesActionTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        currencies: action.payload,
      };
    case CurrenciesActionTypes.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
