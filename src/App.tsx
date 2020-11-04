import React, { useState } from 'react';
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

type AppProps = {};

const App: React.FC = (props): React.ReactElement => {
  console.log(props);
  const [fromCurrency, setFromCurrency] = useState<string>('');
  const [toCurrency, setToCurrency] = useState<string>('');
  return (
    <div className='App'>
      <input />
      <CountrySelect
        isFromCurrency
        value={fromCurrency}
        setToCurrency={setToCurrency}
        setFromCurrency={setFromCurrency}
      />
      <div>calculated value</div>
      <CountrySelect
        value={toCurrency}
        setToCurrency={setToCurrency}
        setFromCurrency={setFromCurrency}
      />
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
