import { combineReducers } from 'redux';
import { getCurrenciesReducer } from './get-currencies/reducer';
import { currencyReducer } from './currency/reducer';
import { conversionReducer } from './conversion/reducer';

export const rootReducer = combineReducers({
  currenciesState: getCurrenciesReducer,
  currencyState: currencyReducer,
  conversionState: conversionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
