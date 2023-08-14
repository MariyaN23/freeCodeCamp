import React, {MouseEvent} from 'react';
import './App.css';
import {compileFunction} from 'vm';

function App() {
 /* const ButtonEvent = (event:MouseEvent<HTMLButtonElement>) => {
    console.log("Hello I'm Ivan")
  }*/

  const onClickHandler = (name:string) => {
    console.log(name)
  }

  const foo1 = ()=> {
    console.log(100200)
  }

  const foo2 = (num: number)=> {
console.log(num)
  }

  return (
    <div className="App">
      {/*<button onClick={()=>onClickHandler("Vasya")}>Button 1</button>*/}
      <button onClick={foo1}>Button 1</button>
      <button onClick={()=>foo2(100200)}>Button 2</button>
    </div>
  );
}

export default App;
