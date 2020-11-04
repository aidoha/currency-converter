import React, { useEffect, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getCurrencies } from '../redux/get-currencies/actionsCreators';
import { CurrenciesState } from '../redux/get-currencies/types';
import { RootState } from '../redux/rootReducer';
import { getCurrenciesState } from '../redux/get-currencies/selectors';

type CountrySelectProps = {
  isFromCurrency?: boolean;
  value: string;
  setFromCurrency: (value: string) => void;
  setToCurrency: (value: string) => void;
  getCurrencies: () => void;
  currenciesState?: CurrenciesState;
};

const CountrySelect = ({
  value,
  setFromCurrency,
  setToCurrency,
  isFromCurrency,
  getCurrencies,
  currenciesState,
}: CountrySelectProps): React.ReactElement => {
  useEffect(() => {
    getCurrencies();
  }, []);

  const onChangeCurrency = (e: SyntheticEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    isFromCurrency ? setFromCurrency(value) : setToCurrency(value);
  };

  return (
    <div>
      <select value={value} onChange={onChangeCurrency}>
        {currenciesState?.currencies.map((option) => (
          <option key={option.id}>{option.id}</option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    currenciesState: getCurrenciesState(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getCurrencies,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelect);
