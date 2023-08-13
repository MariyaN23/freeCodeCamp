import React from 'react';
import './App.css';
import {TopCars} from './topCars/TopCars';

const arrayTopCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]

function App() {
  return (
    <div className="App">
      <TopCars topCars={arrayTopCars}/>
    </div>
  );
}

export default App;
