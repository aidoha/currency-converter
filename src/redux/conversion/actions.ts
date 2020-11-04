import { Action } from 'redux';
import { ConversionActionTypes, ConversionResultType } from './types';

export interface ConversionStartedActionI
  extends Action<ConversionActionTypes> {
  type: ConversionActionTypes.STARTED;
}
export interface ConversionSuccessActionI
  extends Action<ConversionActionTypes> {
  type: ConversionActionTypes.SUCCESS;
  payload: ConversionResultType;
}

export interface ConversionFailureActionI
  extends Action<ConversionActionTypes> {
  type: ConversionActionTypes.FAILURE;
  payload: any;
}

export type ConversionActions =
  | ConversionStartedActionI
  | ConversionSuccessActionI
  | ConversionFailureActionI;
