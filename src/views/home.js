import React, {useState, useEffect} from "react";
import PokedexList from "../components/pokelist";

const Home = () => {
    
    const [nextURL, setNextURL] = useState(null);
    const [prevURL, setPrevURL] = useState(null);
    const [currentListURL, setCurrentListURL] = useState("https://pokeapi.co/api/v2/pokemon");
    
    useEffect(() => {
        fetch(currentListURL)
            .then((response) => response.json())
            .then((json) => {
                //console.log(currentListURL)
                setNextURL(json['next']);
                setPrevURL(json['previous']);
            })
            .catch((error) => console.log(error));
    }, [currentListURL]);

    function triggerNext(){
        setCurrentListURL(nextURL);
    }

    function triggerPrev(){
        if (prevURL != null){
            setCurrentListURL(prevURL);
        }
    }

    return (
        <div className="main-container">
            {/*<div className="c-mainnav">
                pokedex
            </div>*/}
            <PokedexList apiURL={currentListURL}/>
            <div className="c-controls">
                <div className="c-controls__button c-controls__prev" onClick={triggerPrev}>
                    &#8249;
                </div>
                <div className="c-controls__button c-controls__next" onClick={triggerNext}>
                    &#8250;
                </div>
            </div>
        </div>
    )
}

export default Home;