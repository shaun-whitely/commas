import React from 'react';
import Spreadsheet from './Spreadsheet';
import logo from './logo.svg';
import './App.css';

const fake = [["Foo", "Bar", "Baz"], ["1", "2", "3"], ["a", "b", "c"]];

function App() {
  return (
    <div className="App">
      <Spreadsheet content={fake} />
    </div>
  );
}

export default App;
