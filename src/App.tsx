import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';


function App() {
  const personName = {
    first: 'Bob',
    last: 'Bobson'
  }

  const nameList = [
    {
      first: 'Bob',
      last: 'Bobson'
    },
    {
      first: 'Rob',
      last: 'Robson'
    },
    {
      first: 'Sob',
      last: 'Sobson'
    }
  ]
  return (
    <div className="App">
      <Greet name='string' messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
