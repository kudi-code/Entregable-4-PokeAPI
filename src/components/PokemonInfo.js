import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import "../styles/pokemoninfo.css"

const PokemonInfo = () => {
    const {id} = useParams()
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setPokemon(res.data))
    }, [id])
    // console.log(pokemon)
    return (
        <div id="pokemoninfo" className={pokemon?.types?.[0].type.name}>
            <div className='main'>
                <h1>{pokemon.name}</h1>
                <img className='sprite' alt='sprite' src={pokemon.sprites?.other["official-artwork"].front_default}  /> <br />
                <p>Weight: <strong>{pokemon.weight}</strong></p>
                <p>Heigth: <strong>{pokemon.height}</strong></p>
                <strong>#{pokemon.id}</strong> <br />
            </div>
            <div className='types'>
                <h3>Types:</h3> 
                <button className={pokemon?.types?.[0].type.name}>
                    {pokemon?.types?.[0].type.name}
                </button>
                <button className={pokemon?.types?.[1]?.type.name}>
                    {pokemon?.types?.length === 2 ? pokemon?.types?.[1].type.name : "" } 
                </button>
            </div>
            <div className='abilities'>           
                <h3>Abilities:</h3>
                <button>
                    {pokemon?.abilities?.[0].ability.name}
                </button>                
                {pokemon?.abilities?.length === 2 ? <button>{pokemon?.abilities?.[1].ability.name}</button> : "" }                
            </div>
            <div className='moves'>
                <h2>Movements:</h2> <br />
                <section className='move-list'>
                {
                    pokemon?.moves?.map(move => {
                        return(
                            <section className='move' key={move.move.name}>
                                <a href={move.move.url}>{move.move.name}</a>
                            </section>
                        )
                    })
                }
                </section>
            </div>
        </div>
    );
};

export default PokemonInfo;