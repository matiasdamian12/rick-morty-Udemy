
export default function Characters(props) {

const { characters, setCharacters } = props;

const resetCharacters = () =>{
    setCharacters(null);
}

return <div className="characters">
        <h1>personajes</h1>
        <span className="back-home" onClick={resetCharacters}>Volver a la Home</span>
        <div className="container-characters">
        {characters.map((characters, index) =>(
            <div className="character-container" key={index}>
            <div>
                <img src={characters.image} alt={characters.name} />
            </div>
            <div>
                <h3>{characters.name}</h3>
                <h6>
                    {characters.status === "alive" ? (
                        <>
                        <span className="alive"/>
                        Alive
                        </>
                    ) : (
                        <>
                        <span className="dead"/>
                        Dead
                        </>
                    )}
                </h6>
                <p>
                    <span className="text-grey">Episodios: </span>
                    <span>{characters.episode.length}</span>
                </p>
                <p>
                <span className="text-grey">Especie: </span>
                    <span>{characters.species}</span>
                </p>
            </div>
            </div>
        ))}
        </div>
        <span className="back-home" onClick={resetCharacters}>Volver a la Home</span>
    </div>
}