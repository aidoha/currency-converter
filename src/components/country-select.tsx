import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getCurrencies } from '../redux/currencies/actionsCreators';
import { CurrenciesState } from '../redux/currencies/types';

type CountrySelectProps = {
  defaultValue: string;
  getCurrencies: () => void;
  currenciesState?: CurrenciesState;
};

const CountrySelect = ({
  defaultValue = '',
  getCurrencies,
  currenciesState,
}: CountrySelectProps): React.ReactElement => {
  useEffect(() => {
    getCurrencies();
  }, []);
  console.log(currenciesState?.currencies);
  return (
    <div>
      <select defaultValue={defaultValue}>
        {/* {currenciesState?.currencies.map((option) => (
          <option></option>
        ))} */}
      </select>
    </div>
  );
};

const mapStateToProps = (state: CurrenciesState) => state;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getCurrencies,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelect);
