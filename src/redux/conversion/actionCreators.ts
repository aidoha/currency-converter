import axios, { AxiosResponse, AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { ENDPOINT } from '../../utils/endpoint';
import { ConversionActionTypes, ConversionResultType } from './types';
import {
  ConversionStartedActionI,
  ConversionSuccessActionI,
  ConversionFailureActionI,
} from './actions';

const conversionStarted = (): ConversionStartedActionI => ({
  type: ConversionActionTypes.STARTED,
});

const conversionSuccess = (
  result: ConversionResultType
): ConversionSuccessActionI => ({
  type: ConversionActionTypes.SUCCESS,
  payload: result,
});

const conversionFailure = (error: any): ConversionFailureActionI => ({
  type: ConversionActionTypes.FAILURE,
  payload: error,
});

export const postConversion = (currencyPair: string) => {
  return (dispatch: Dispatch) => {
    dispatch(conversionStarted());
    axios
      .get(
        ENDPOINT +
          `/convert?q=${currencyPair}&compact=ultra&apiKey=f60895e4b2fca8fbb457`
      )
      .then((res: AxiosResponse) => {
        dispatch(conversionSuccess(res.data as ConversionResultType));
      })
      .catch((err: AxiosError) => {
        dispatch(conversionFailure(err));
      });
  };
};
