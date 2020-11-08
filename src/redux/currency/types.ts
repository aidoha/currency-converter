export type CurrencyState = {
  fromCurrency: {
    amount: string;
    code: string;
  };
  toCurrency: {
    code: string;
  };
};

export enum CurrencyActionTypes {
  FROM_CURRENCY_AMOUNT = 'FROM_CURRENCY_AMOUNT',
  FROM_CURRENCY_CODE = 'FROM_CURRENCY_CODE',
  TO_CURRENCY_CODE = 'TO_CURRENCY_CODE',
}
