import React from 'react';

function PokemonCard({ image, name, abilities }) {

  console.log(abilities)
  
    return (
      <div>
        <h1>{name}</h1>
        <img src={image} alt='poke pic'/>
        {/* <h3>{abilities[0].ability}</h3> */}
      </div>
    );
  }
  
  export { PokemonCard };
  
  