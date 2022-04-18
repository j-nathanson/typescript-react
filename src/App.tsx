import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
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
    last: 'Venture'
  }

  const nameList = [
    {
      first: 'kyle',
      last: 'blanard'
    },
    {
      first: 'Jeery',
      last: 'Robinson'
    },
    {
      first: 'Scott',
      last: 'Danger'
    }
  ]
  return (
    <div className="App">
      {/* basic props passing */}
      <Greet name='string' messageCount={20} isLoggedIn={false} />

      {/* pass an object as a prop */}
      <Person name={personName} />

      {/* pass array of objects */}
      <PersonList names={nameList} />

      {/* pass a union type value */}
      <Status status='success' />

      {/* Pass children as a prop & if child is a react element */}
      <Heading>Placeholder text</Heading>
      <Oscar><Heading>Oscar goes to Leo</Heading></Oscar>

      {/* default values for props - missing 'messageCount' */}
      <Greet name='nom' isLoggedIn={true} />

      {/* pass a click event as props */}
      <Button handleClick={(e, id) => { console.log('button clicked', e, id) }} />
      {/*  pass a change event*/}
      <Input value='' handleChange={e => console.log(e)} />

      {/* pass styles as a prop */}
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
    </div>
  );
}

export default App;
