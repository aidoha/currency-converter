import { combineReducers } from 'redux';
import { currenciesReducer } from './currencies/reducer';

export const rootReducer = combineReducers({
  currencies: currenciesReducer,
});