export type CurrencyType = {
  currencyName: string;
  currencySymbol: string;
  id: string;
};

export type CurrenciesState = {
  loading: boolean;
  currencies: Array<CurrencyType>;
  error: null;
};

export enum CurrenciesActionTypes {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  STARTED = 'STARTED',
}
