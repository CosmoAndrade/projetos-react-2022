import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Container, Div } from './favoritos';

function Favoritos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])


    function excluirFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
        alert("Filme removido com sucesso")
    }


    return (
        <Container>

            <h1>Meus filmes</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo :( </span>}

            <ul class="list-group">
                {filmes.map((item) => {
                    return (

                        <li key={item.id} >
                            <span>{item.title}</span>

                            <Div>
                                <Link  to={`/detalhes/${item.id}`}>Ver detalhes</Link>
                                
                                <button  onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </Div>
                        </li>



                    )
                })}
            </ul>



        </Container>
    );
}

export default Favoritos;

