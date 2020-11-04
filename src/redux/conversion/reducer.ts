import { ConversionState, ConversionActionTypes } from './types';
import { ConversionActions } from './actions';

const initialState = {
  loading: false,
  conversionResult: {},
  error: null,
};

export const currencyReducer = (
  state: ConversionState = initialState,
  action: ConversionActions
) => {
  switch (action.type) {
    case ConversionActionTypes.STARTED:
      return {
        ...state,
        loading: true,
      };
    case ConversionActionTypes.SUCCESS:
      return {
        ...state,
        conversionResult: action.payload,
        loading: false,
      };
    case ConversionActionTypes.FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
