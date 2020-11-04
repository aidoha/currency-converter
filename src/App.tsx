import React, { SyntheticEvent } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  onChangeAmountFromCurrency,
  onChangeCodeFromCurrency,
  onChangeCodeToCurrency,
} from './redux/currency/actionCreators';
import { getCurrencyState } from './redux/currency/selectors';
import { RootState } from './redux/rootReducer';
import CountrySelect from './components/country-select';

import './App.css';

type AppProps = {
  fromCurrency: {
    amount: string;
    code: string;
  };
  toCurrency: {
    amount: string;
    code: string;
  };
  onChangeAmountFromCurrency: (amount: string) => void;
  onChangeCodeFromCurrency: (code: string) => void;
  onChangeCodeToCurrency: (code: string) => void;
};

const App = ({
  fromCurrency,
  toCurrency,
  onChangeAmountFromCurrency,
  onChangeCodeFromCurrency,
  onChangeCodeToCurrency,
}: AppProps): React.ReactElement => {
  const handleAmountFromCurrency = (e: SyntheticEvent<HTMLInputElement>) => {
    onChangeAmountFromCurrency(e.currentTarget.value);
  };

  return (
    <div className='App'>
      <input value={fromCurrency.amount} onChange={handleAmountFromCurrency} />
      <CountrySelect
        isFromCurrency
        value={fromCurrency.code}
        setToCurrency={onChangeCodeToCurrency}
        setFromCurrency={onChangeCodeFromCurrency}
      />
      <div>calculated value</div>
      <CountrySelect
        value={toCurrency.code}
        setToCurrency={onChangeCodeToCurrency}
        setFromCurrency={onChangeCodeFromCurrency}
      />
      <button>Convert</button>
    </div>
  );
};

const mapStateToProps = (state: RootState) => getCurrencyState(state);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onChangeAmountFromCurrency,
      onChangeCodeFromCurrency,
      onChangeCodeToCurrency,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
