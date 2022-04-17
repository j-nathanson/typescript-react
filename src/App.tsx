import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';


function App() {
  const personName = {
    first: 'Bob',
    last: 'Bobson'
  }
  return (
    <div className="App">
      <Greet name='string' messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
    </div>
  );
}

export default App;
