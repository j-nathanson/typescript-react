import React from 'react';
import './App.css';

// let name: any; // not recommended
let name: string;
let age: number | string; // union type one or more value types
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];


// define a function that doesn't return anything
let printName: (name: string) => void;
// let printName: (name: string) => number;
// let printName: (name: string) => string;

// need to give args specific types
// function printName(name: string) {
//   console.log(name);

// }

printName('bobb')
// tuple
// array of strict multiple types
// tuple the order and length are guaranteed.


// // role = [5,'r']

// // create person object from custom type
// type Person = {
//   name: string,
//   age?: number
// }
// // needs both properties
// // 'age is optional, no error 
// let person: Person = {
//   name: 'bob',
// }

// // array of person objects
// let lotsOfPeoople:Person[];

age = 'bob';

function App() {
  return (
    <div className="App">
      Hello Bob
    </div>
  );
}

export default App;
