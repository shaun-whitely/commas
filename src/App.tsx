import React from 'react';
import Spreadsheet from './Spreadsheet';
import logo from './logo.svg';
import './App.css';
import { Sheet } from './model/sheet';

const fake = [["Foo", "Bar", "Baz"], ["1", "2", "3"], ["a", "b", "c"]];

function App() {
  return (
    <div className="App">
      <Spreadsheet data={new Sheet(fake)} />
    </div>
  );
}

export default App;
