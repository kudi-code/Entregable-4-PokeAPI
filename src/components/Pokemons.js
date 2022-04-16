import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';


const Pokemons = () => {
    const userName = useSelector(state => state.userName)
    const [pokemonData, setPokemonData] = useState([])
    const [pokeName, setPokeName]= useState("")
    const [types, setTypes] = useState([])
    const [type, setType] = useState("")
    
    const [currentPoke, setCurrentPoke] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [pokePerPage, setPokePerPage] = useState(20)

    

    //Dividing the pokes in groups of pages
    useEffect(() => {
        const indexOfLastPoke = currentPage * pokePerPage
        const indexOfFirstPost = indexOfLastPoke -pokePerPage
        setCurrentPoke(pokemonData.slice(indexOfFirstPost, indexOfLastPoke))
    },[pokemonData, currentPage, pokePerPage])

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)



    const [pokeFiltered, setPokeFiltered] = useState([])



    const navigate = useNavigate()


    useEffect(() => {
        var totalPokes = 1126
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${totalPokes}`)
        .then(res => setPokemonData(res.data.results))
        axios.get("https://pokeapi.co/api/v2/type")
        .then(res => setTypes(res.data.results))
    }, [])
    useEffect(() => {
        var data =pokeFiltered.map(element => {
            return(
                element?.pokemon
            )
        })
        setPokemonData(data)
        setCurrentPage(1)

    },[pokeFiltered])


    const Submit = (e) => {
        e.preventDefault();
        navigate(`/pokemon/${pokeName}`)
    }

    const handleId = (e) => {      
        axios.get(e.target.value)
        .then(res => setPokeFiltered(res.data.pokemon))
        
    }
    return (
        <div className='pokemons'>
            <div className='background'>

            </div>
            <h1>Pokedex</h1>
            <h3>Hi {userName}!</h3>

            <span>Are you ready for begin your adventure? <br />
            Try searching the name of a pokemon or clic in a pokecard!</span> <br />

            <form action="Submit" onSubmit={Submit}>
                <span>Search by Type: </span>
                <select defaultValue={"default"} onChange={handleId} >
                    <option value="default">-</option>
                    {
                        types.map((location) => { return(
                            
                            <option value={location.url} key={location.name}>{location.name}</option>
                            )})
                    }
                </select>
                <input type="text"
                id='character-name'
                onChange={e => setPokeName(e.target.value)} />
                <button>Search</button>
            </form>
            <Pagination pokePerPage={pokePerPage}
             totalPokes={pokemonData.length}
             paginate={paginate}></Pagination>

            <div className='pokeList'>
            {
                currentPoke?.map((pokemon,id) => {
                return(
                    <div key ={pokemon.name}>                                             
                        <PokemonCard url={pokemon.url}></PokemonCard>
                    </div>
                )})
            }
            </div>
        </div>
    );
};

export default Pokemons;