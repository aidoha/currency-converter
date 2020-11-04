import { Action } from 'redux';
import { CurrencyActionTypes } from './types';

export interface FromCurrencyAmountActionI extends Action<CurrencyActionTypes> {
  type: CurrencyActionTypes.FROM_CURRENCY_AMOUNT;
  payload: {
    amount: string;
  };
}
export interface FromCurrencyCodeActionI extends Action<CurrencyActionTypes> {
  type: CurrencyActionTypes.FROM_CURRENCY_CODE;
  payload: {
    code: string;
  };
}

export interface ToCurrencyAmountActionI extends Action<CurrencyActionTypes> {
  type: CurrencyActionTypes.TO_CURRENCY_AMOUNT;
  payload: {
    amount: string;
  };
}
export interface ToCurrencyCodeActionI extends Action<CurrencyActionTypes> {
  type: CurrencyActionTypes.TO_CURRENCY_CODE;
  payload: {
    code: string;
  };
}

export type CurrencyActions =
  | FromCurrencyAmountActionI
  | FromCurrencyCodeActionI
  | ToCurrencyAmountActionI
  | ToCurrencyCodeActionI;
