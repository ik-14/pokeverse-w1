import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  
  const [pokeData, setPokeData] = useState([])
  const [newData, setNewData] = useState([])

  useEffect(() => {
    fetch(pokeApi)
    .then(res => res.json())
    .then(data => setPokeData(data.results))
  },[])

  useEffect(() => {
    pokeData.forEach(currentItem => {
      const url = currentItem.url
      fetch(url)
      .then(res => res.json())
      .then(data => setNewData(currentData => [...currentData, data]))
    })
  }, [pokeData])

  

  return (
    <div data-testid="app">
      { newData.map((pokemon, index) => {
        const ability = pokemon.abilities
        return (
      <PokemonCard
      key={index}
      name={pokemon.name}
      image={pokemon.sprites.front_default}
      abilities={ability}
      />
      )}
      
        )}
      <PokemonCard />
    </div>
  );
}

export { App };
