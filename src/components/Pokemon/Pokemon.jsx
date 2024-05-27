import { useState } from "react"

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=808'

    const fetchPokemon = async () => {
        try {
            const response = await fetch(URL)
            !response.ok ? (() => { throw new Error("No data from server") })()
                : console.log("Data received");

            const data = await response.json()
            setPokemon(data.results)
        }

        catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <h1>Pokemon API</h1>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            <ul>
                {pokemon.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </>
    )
}

export default Pokemon;