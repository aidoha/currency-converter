import React from 'react';
import CountrySelect from './components/country-select';

import './App.css';

const App: React.FC = (): React.ReactElement => {
  return (
    <div className='App'>
      <CountrySelect defaultValue='USD' />
    </div>
  );
};

export default App;
