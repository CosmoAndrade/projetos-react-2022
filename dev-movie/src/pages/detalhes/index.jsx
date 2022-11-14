
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { Button, Container, Figure } from './detalhes';

function Detalhes() {


    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});


    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "28fc232cc001c31e8a031f419d0a14ca",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setFilme(response.data);

                })
                .catch(() => {
                    console.log("FILME NAO ENCONTRADO");
                    navigate("/", { replace: true });
                    return;
                })
        }

        loadFilme();


        return () => {
            console.log("COMPONENTE FOI DESMONTADO")
        }
    }, [navigate, id])



    function salvarFilme() {
        const minhaLista = localStorage.getItem("@primeflix");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)

        if (hasFilme) {
            alert("Esse filme já está na sua lista!")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        alert("Filme salvo com sucesso!")

    }



    return (
        <Container>


            <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>{filme.title}</h1>

            <Figure>

                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            </Figure>

            <h3 style={{ textAlign: 'center', marginTop: '10px' }}>Sinopse</h3>

            <span>{filme.overview}</span>  <br />

            <strong style={{ textAlign: 'center', marginBottom: '10px' }}> Avalição: {filme.vote_average} / 10</strong>

            <div >
                <Button bg="blue" onClick={salvarFilme}>Salvar</Button>
                <Button bg="magenta" >
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </Button>
            </div>




        </Container>
    );
}

export default Detalhes;

