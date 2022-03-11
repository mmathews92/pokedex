import React, {useState, useEffect} from "react";
import {
    useParams,
    Link
} from "react-router-dom";

const Details = ({pokemon}) => {
    
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon/"+id;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json)
                setIsLoading(false)
                console.log(json)
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        if (data !== null) {
            setIsLoading(false);
        }
    }, [data]);

    return (
        <>
        {
            isLoading ? ( <></>)  : (
                <div className={`main-container c-info u-background-${data.types[0].type.name}`}>
                    <div className="c-mainnav">
                        <Link className="c-controls__button c-controls__prev" to="/">
                            &#8249;
                        </Link>
                        <div className="c-pokemonname">
                            #{data.id} {data.name}
                        </div>                
                    </div>
                    <div className="c-pokemoninfo">
                        <div className="c-pokemoninfo__imagecontainer">
                            <img src={data.sprites.front_default} alt=""/>
                        </div>
                        <div className="c-pokemoninfo__data">
                            <div className="c-pokemoinfo__data__row"><b>Type:</b> <span>{data.types[0].type.name}</span></div>
                            <div className="c-pokemoinfo__data__row"><b>Height:</b> <span>{data.height}</span></div>
                            <div className="c-pokemoinfo__data__row"><b>Weight: </b> <span>{data.weight}</span></div>                    
                            <div className="c-pokemoinfo__data__row"><b>Moves:</b></div>
                            <div className="c-pokemoinfo__data__row">
                                <div className="c-pokemoinfo__data__move">
                                    {data.moves[0].move.name}
                                </div>                                
                                <div className="c-pokemoinfo__data__move">
                                    {data.moves[1].move.name}
                                </div>
                                <div className="c-pokemoinfo__data__move">
                                    {data.moves[2].move.name}
                                </div>
                                <div className="c-pokemoinfo__data__move">
                                    {data.moves[3].move.name}
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>
            )
        }
            
        </>
    )
}

export default Details;