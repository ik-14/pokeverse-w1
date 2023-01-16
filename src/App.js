import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;


function App() {

  const [pokeData, setPokeData] = useState([])
  const [newData, setNewData] = useState([])

  const getPokeData = async() => {
    const res = await fetch(pokeApi)
    const data = await res.json()
    const results = data.results
    setPokeData(results)
  }

  const mapPokeData = () => {
    pokeData.forEach( async (currentItem) => {
      const res = await fetch(currentItem.url)
      const data = await res.json()
      setNewData(currentData => [...currentData, data])
    })
  }

  useEffect(() => {
    getPokeData()
    mapPokeData()
  }, [])


  return (
    <div data-testid="app">
      <Navigation />
      { newData.map(pokemon => 
        <PokemonCard 
        name={pokemon.name}
        image={pokemon.sprites.front_default}
        />
        )}
      <PokemonCard />
    </div>
  );
}

export { App };
