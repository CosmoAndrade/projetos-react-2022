import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { Card, Container, Detalhes } from '../CardFilmes/card';

function CardFilmes() {


    const [filmes, setFilmes] = useState([]);



    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "28fc232cc001c31e8a031f419d0a14ca",
                    language: "pt-BR",
                    page: 1,
                }
            })

            //console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results.slice(0, 12))


        }

        loadFilmes();

    }, [])


    return (
        <Container>
            {filmes.map((filme) => {
                return (
                    <Card key={filme.id} >

                        <img class="card-img-top" src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />

                        <Detalhes >

                            <h2>{filme.title}</h2>

                            <Link  to={`/detalhes/${filme.id}`}>Ver Detalhes</Link>
                        </Detalhes>


                    </Card>
                )
            })}
        </Container>
    );
}

export default CardFilmes;

