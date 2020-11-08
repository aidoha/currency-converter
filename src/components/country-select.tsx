import React, { SyntheticEvent } from 'react';
import { CurrenciesState } from '../redux/get-currencies/types';

type CountrySelectProps = {
  isFromCurrency?: boolean;
  value: string;
  setFromCurrency: (value: string) => void;
  setToCurrency: (value: string) => void;
  currenciesState: CurrenciesState;
};

const CountrySelect = ({
  value,
  setFromCurrency,
  setToCurrency,
  isFromCurrency,
  currenciesState,
}: CountrySelectProps): React.ReactElement => {
  const onChangeCurrency = (e: SyntheticEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    isFromCurrency ? setFromCurrency(value) : setToCurrency(value);
  };

  return (
    <select value={value} onChange={onChangeCurrency}>
      {currenciesState?.currencies.map((option) => (
        <option key={option.id}>{option.id}</option>
      ))}
    </select>
  );
};

export default CountrySelect;
