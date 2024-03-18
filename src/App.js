import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Pokedex from './components/shared/pokedex';

function App() {
  const URL = 'https://pokeapi.co/api/v2/'
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    const APIconnection = async () => {
      try {
        const response = await axios.get(URL + 'pokemon?limit=11&offset=0')
        const data = response.data.results
        const promises = data.map(pokemon => axios.get(URL + `pokemon/${pokemon.name}` ))
        const results = await Promise.all(promises)
        const pokemones = results.map(result => result.data)
        setPokemon(pokemones)
      } catch (error) {
        console.error(error)
      }
    }
    APIconnection();
  },[])



  return (
    <div className="App">
      <Pokedex 
      pokemon = {pokemon}
      />
    </div>
  );
}

export default App;

