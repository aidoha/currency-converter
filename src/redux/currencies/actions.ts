import { Action } from 'redux';
import { CurrenciesActionTypes, CurrencyType } from './types';

export interface CurrenciesSuccessActionI
  extends Action<CurrenciesActionTypes> {
  type: CurrenciesActionTypes.SUCCESS;
  payload: {
    currencies: Array<CurrencyType>;
  };
}
export interface CurrenciesFailureActionI
  extends Action<CurrenciesActionTypes> {
  type: CurrenciesActionTypes.FAILURE;
  payload: {
    error: any;
  };
}
export interface CurrenciesStartedActionI
  extends Action<CurrenciesActionTypes> {
  type: CurrenciesActionTypes.STARTED;
}

export type CurrenciesActions =
  | CurrenciesSuccessActionI
  | CurrenciesFailureActionI
  | CurrenciesStartedActionI;
