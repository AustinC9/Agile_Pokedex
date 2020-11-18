import React from 'react'

export default function pokemonList({ pokemon }) {
    return (
        <div>
        {pokemon.map((item, i) => (
            <div key={i}>{item} <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`}/>
            </div>
        ))}
            
        </div>
    )
}
