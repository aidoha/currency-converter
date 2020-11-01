import axios from 'axios';
import { Dispatch } from 'redux';
import { ENDPOINT } from '../../utils/endpoint';
import { CurrenciesActionTypes, CurrencyType } from './types';
import {
  CurrenciesStartedActionI,
  CurrenciesFailureActionI,
  CurrenciesSuccessActionI,
} from './actions';

const getCurrenciesSuccess = (
  currencies: Array<CurrencyType>
): CurrenciesSuccessActionI => ({
  type: CurrenciesActionTypes.SUCCESS,
  payload: {
    currencies,
  },
});

const getCurrenciesStarted = (): CurrenciesStartedActionI => ({
  type: CurrenciesActionTypes.STARTED,
});

const getCurrenciesFailure = (error: any): CurrenciesFailureActionI => ({
  type: CurrenciesActionTypes.FAILURE,
  payload: {
    error,
  },
});

export const getCurrencies = () => {
  return (dispatch: Dispatch) => {
    dispatch(getCurrenciesStarted());

    axios
      .get(ENDPOINT + '/currencies?apiKey=f60895e4b2fca8fbb457')
      .then((res) => {
        dispatch(getCurrenciesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getCurrenciesFailure(err.message));
      });
  };
};
