import React from 'react';
import { connect } from 'react-redux';

type CountrySelectProps = {
  defaultValue: string;
};

const CountrySelect = ({
  defaultValue,
}: CountrySelectProps): React.ReactElement => {
  return (
    <div>
      <select defaultValue={defaultValue} />
    </div>
  );
};

export default CountrySelect;
