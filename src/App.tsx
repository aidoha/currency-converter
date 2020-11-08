import React, { SyntheticEvent, useEffect } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CountrySelect from './components/country-select';

import {
  onChangeAmountFromCurrency,
  onChangeCodeFromCurrency,
  onChangeCodeToCurrency,
} from './redux/currency/actionCreators';
import { CurrencyState } from './redux/currency/types';
import { getCurrencyState } from './redux/currency/selectors';

import { postConversion } from './redux/conversion/actionCreators';
import { ConversionState } from './redux/conversion/types';
import { getConversionState } from './redux/conversion/selectors';

import { getCurrencies } from './redux/get-currencies/actionsCreators';
import { CurrenciesState } from './redux/get-currencies/types';
import { getCurrenciesState } from './redux/get-currencies/selectors';

import { RootState } from './redux/rootReducer';

import './App.css';

type AppProps = {
  conversionState: ConversionState;
  currencyState: CurrencyState;
  currenciesState: CurrenciesState;
  onChangeAmountFromCurrency: (amount: string) => void;
  onChangeCodeFromCurrency: (code: string) => void;
  onChangeCodeToCurrency: (code: string) => void;
  postConversion: (currencyPair: string) => void;
  getCurrencies: () => void;
};

const App = ({
  conversionState,
  currencyState,
  currenciesState,
  onChangeAmountFromCurrency,
  onChangeCodeFromCurrency,
  onChangeCodeToCurrency,
  postConversion,
  getCurrencies,
}: AppProps): React.ReactElement => {
  const { fromCurrency, toCurrency } = currencyState;
  const { loading, error, conversionResult } = conversionState;

  const handleAmountFromCurrency = (
    e: SyntheticEvent<HTMLInputElement>
  ): void => {
    const { value } = e.currentTarget;
    onChangeAmountFromCurrency(value);
  };

  const handlePostConversion = (): void => {
    postConversion(`${fromCurrency.code}_${toCurrency.code}`);
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  // console.log('conversionState', conversionState);
  // console.log('getCurrenciesState', currenciesState);

  return (
    <div className='App'>
      <input value={fromCurrency.amount} onChange={handleAmountFromCurrency} />
      <CountrySelect
        isFromCurrency
        value={fromCurrency.code}
        setToCurrency={onChangeCodeToCurrency}
        setFromCurrency={onChangeCodeFromCurrency}
        currenciesState={currenciesState}
      />
      <div>
        {loading && <div>loading...</div>}
        {error && <div>error!</div>}
      </div>
      <CountrySelect
        value={toCurrency.code}
        setToCurrency={onChangeCodeToCurrency}
        setFromCurrency={onChangeCodeFromCurrency}
        currenciesState={currenciesState}
      />
      <button onClick={handlePostConversion}>Convert</button>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  console.log('state', state)
  return {
    currencyState: getCurrencyState(state),
    conversionState: getConversionState(state),
    currenciesState: getCurrenciesState(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onChangeAmountFromCurrency,
      onChangeCodeFromCurrency,
      onChangeCodeToCurrency,
      postConversion,
      getCurrencies,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
