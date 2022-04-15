import React from 'react';
import './App.css';

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];

// tuple
// array of strict multiple types
// tuple the order and length are guaranteed.
let role: [number, string];

// role = [5,'r']

// create person object from custom type
type Person = {
  name: string,
  age?: number
}
// needs both properties
// 'age is optional, no error 
let person: Person = {
  name: 'bob',
}

// array of person objects
let lotsOfPeoople:Person[];


function App() {
  return (
    <div className="App">
      Hello Bob
    </div>
  );
}

export default App;
