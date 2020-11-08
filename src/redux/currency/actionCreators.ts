import {
  FromCurrencyAmountActionI,
  FromCurrencyCodeActionI,
  ToCurrencyCodeActionI,
} from './actions';
import { CurrencyActionTypes } from './types';

export const onChangeAmountFromCurrency = (
  amount: string
): FromCurrencyAmountActionI => ({
  type: CurrencyActionTypes.FROM_CURRENCY_AMOUNT,
  payload: {
    amount,
  },
});

export const onChangeCodeFromCurrency = (
  code: string
): FromCurrencyCodeActionI => ({
  type: CurrencyActionTypes.FROM_CURRENCY_CODE,
  payload: {
    code,
  },
});

export const onChangeCodeToCurrency = (
  code: string
): ToCurrencyCodeActionI => ({
  type: CurrencyActionTypes.TO_CURRENCY_CODE,
  payload: {
    code,
  },
});
