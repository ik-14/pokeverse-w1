import React from 'react';

function PokemonCard({ image, name }) {

  return (
    <div>
      <h1>{name}</h1>
      <img src={image}/>
    </div>
  );
}

export { PokemonCard };
