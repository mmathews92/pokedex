import React, {useState, useEffect} from "react";
import PokedexCard from "../components/pokecard";

const PokedexList = ({apiURL}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonlist, setPokemonList] = useState([]);
    const [currentURL, setCurrentURL] = useState(null);

    useEffect(() => {
        if (currentURL != apiURL) {
            //console.log("Loading api")
            fetch(apiURL)
                .then((response) => response.json())
                .then((json) => {
                    setPokemonList(json['results'])
                    setCurrentURL(apiURL)
                })
                .catch((error) => console.log(error));
        }
    }, [pokemonlist, apiURL]);

    useEffect(() => {
        if (pokemonlist.length !== 0) {
            setIsLoading(false);
        }
        //console.log(pokemonlist);
    }, [isLoading]);

    return (
        <div className="c-listcontainer">
            {
                pokemonlist.map((pokemon, index) => (
                    <PokedexCard key={`${pokemon.name}-${index}`} pokemon={pokemon} />
                ))
            }
        </div>
    )
}

export default PokedexList;