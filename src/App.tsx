import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';


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
      <Status status='success' />
      <Heading>Placeholder text</Heading>
      <Oscar><Heading>Oscar goes to Leo</Heading></Oscar>
      <Greet name='nom' isLoggedIn={true} />
      <Button handleClick={(e, id) => { console.log('button clicked', e, id) }} />
      <Input value='' handleChange={e => console.log(e)} />
    </div>
  );
}

export default App;
