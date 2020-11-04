import { combineReducers } from 'redux';
import { getCurrenciesReducer } from './get-currencies/reducer';
import { currencyReducer } from './currency/reducer';

export const rootReducer = combineReducers({
  currenciesState: getCurrenciesReducer,
  currencyState: currencyReducer,
});

export type RootState = ReturnType<typeof rootReducer>
