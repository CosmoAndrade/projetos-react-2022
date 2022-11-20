import { Container, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";


function Home() {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons()
    }, []);

    function getPokemons() {
        var endpoints = []
        for (var i = 1; i < 50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((res) => setPokemons(res))

    }


    function pokemonFilter (name){

        var filteredPokemons = []

        if(name === ""){
            getPokemons();
        }

        for( var i in pokemons) {
            if(pokemons[i].data.name.includes(name)){
                filteredPokemons.push(pokemons[i]);
            }
        }

        setPokemons(filteredPokemons);
    }



    return (
        <div>
            <Navbar pokemonFilter={pokemonFilter} />
            <Container  >

                <Grid container marginTop={6} spacing={2}  >

                    {pokemons.map((pokemon, key) => {
                        return (
                            <Grid item xs={2} marginRight={3} key={key}  >
                                <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                            </Grid>

                        )
                    })}

                </Grid>

            </Container>

        </div>
    );
}

export default Home;