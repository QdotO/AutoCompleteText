import React from 'react';
import './App.css';
import AutoCompleteText from './AutoCompleteText';
import countries from './countries';


function App() {
  return (
    <div className="App">
      <div className="container">
        <AutoCompleteText list={countries} />
      </div>

    </div>
  );
}

export default App;
