import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getCurrencies } from '../redux/currencies/actionsCreators';
import { CurrenciesState } from '../redux/currencies/types';

type CountrySelectProps = {
  defaultValue: string;
  getCurrencies: () => void;
  state?: any;
};

const CountrySelect = ({
  defaultValue,
  getCurrencies,
  state,
}: CountrySelectProps): React.ReactElement => {
  console.log('state', state);
  useEffect(() => {
    getCurrencies();
  }, []);
  return (
    <div>
      <select defaultValue={defaultValue} />
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
