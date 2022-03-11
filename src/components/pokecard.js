import React, {useState, useEffect} from "react";
import {
    Link
} from "react-router-dom";

const PokedexCard = ({pokemon}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon/"+pokemon.name;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json)
                setIsLoading(false)
            })
            .catch((error) => console.log(error));
    }, []);

    return ( 
        <>
        {
            isLoading ? (
                <>
                    
                </>
            ) : (     
                <Link 
                    className={
                        `c-pokecard u-background-${data.types[0].type.name}`
                    }

                    to={`/pokemon/${data.id}`}
                >                    
                    <div className="c-pokecard__number">
                        #{data.id}
                    </div>
                    <div className="c-pokecard__preview">
                        <img src={data.sprites.front_default} alt=""/>
                    </div>            
                    <div className="c-pokecard__name">
                        {pokemon.name}
                    </div>
                </Link>
            )
        }
        </>
    )
}

export default PokedexCard;