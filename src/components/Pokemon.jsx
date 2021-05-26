import React, {useState} from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [allPokes, setAllPokes] = useState([])

    const getPokes = (e) => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(res=> {
            return res.json()
        })
        .then(res => {
            console.log(res)
            setAllPokes(res.results)
        })
        .catch(err => console.log("error", err))

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(res => {
                setAllPokes(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <button onClick={getPokes}>Gotta catch 'em all</button>
            <ul>
                {
                    allPokes.map((pokemon, i) => {
                        return (
                            <li key = {i} style={{textTransform: 'capitalize'}}> {pokemon.name} </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};


export default Pokemon;