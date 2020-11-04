export type ConversionResultType = {
  [key: string]: number;
};

export type ConversionState = {
  loading: boolean;
  conversionResult: ConversionResultType;
  error: null;
};

export enum ConversionActionTypes {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  STARTED = 'STARTED',
}
