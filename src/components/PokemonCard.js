import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import pokeball from './Pokeball.png';


const PokemonCard = ({url}) => {
    const [pokeData, setPokeData] = useState([])
    useEffect(() => {
        axios.get(url)
        .then(res => setPokeData(res.data) )
    },[url])
    return (
        <div className={ pokeData?.types?.[0].type.name +' pokeCard'}>
            <Link to={`/pokedex/${pokeData.id}`}><h3>{pokeData.name}</h3>  </Link> 
            <p># {pokeData.id}</p>
            <img className='sprite' src={pokeData?.sprites?.front_default} alt="" srcSet="" />

            <p><b>Types:</b> {pokeData?.types?.[0].type.name} {pokeData?.types?.length === 2 ? "/ "+pokeData?.types?.[1].type.name : "" } </p>
            <p><b>HP:</b>  {" "}{pokeData?.stats?.[0].base_stat}</p>
            <p><b>Attack:</b> {" "}{pokeData?.stats?.[1].base_stat}</p>
            <p><b>Defense:</b> {" "}{pokeData?.stats?.[2].base_stat}</p>
            <p><b>Speed:</b> {" "}{pokeData?.stats?.[3].base_stat}</p>
            <img className="pokeball" src={pokeball} alt="pokeball"/>
        </div>
    );
};

export default PokemonCard;