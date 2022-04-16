import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import bruno from './Bruno.png';


const Welcome = () => {
    //Guardando el estado del input
    const [userName, setUsername] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()


    //Función submit
    const submit = (e) =>{
        e.preventDefault();
        dispatch({
            type: "GET_USERNAME", //Manda a ejecutar la función
            payload: userName//Permite mandar valores
        })
        navigate("/pokemons")
    }
    return (
        <div id='welcome'>
            <h1>Welcome Trainer!</h1>
            <br />
            <img id='bruno' src={bruno} alt="Bruno" />
            <p>Please, enter your name for begin your adventure!</p>
           
            <form action="Submit" onSubmit={submit}>
                <input type="text"value={userName} 
                onChange={e => setUsername(e.target.value)} />
                <button>Send</button>
            </form>
        </div>
    );
};

export default Welcome;