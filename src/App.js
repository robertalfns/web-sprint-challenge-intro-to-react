import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Character from './components/Character'

const App = () => {
  const [names, setNames] = useState([{
    name: 'name'
  }])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      console.log(res.data);
      setNames(res.data);
    })
    .catch(err => console.log(err))
  }, [])


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // console.log(character)
  
    return (
      <div className="App">
        {
        names.map(nameObj => {
          console.log("hello")

          return (
            <Character nameObj={nameObj}/>
          )
        })
      }
      </div>
    );
  }

  export default App;

  