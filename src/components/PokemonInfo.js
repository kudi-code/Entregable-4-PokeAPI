import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonInfo = () => {
    const {id} = useParams()
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setPokemon(res.data))
    }, [id])
    console.log(pokemon)
    return (
        <div>
            <h1>PokemonInfo</h1>
            <h3>{pokemon.name}</h3>
        </div>
    );
};

export default PokemonInfo;