
import { useState } from 'react'
import './App.css'
import AppHeader from './components/Header'
import api from './services/api'
import { Button } from './styles/button'
import GlobalStyle from './styles/global'
import { Input } from './styles/input'
import { Table } from './styles/tabela'


function App() {

  const [cep, setCep] = useState('')
  const [enderecos, setEnderecos] = useState([
    {
      "cep": "01001 - 000",
      "logradouro": "Praça da Sé",
      "complemento": "lado ímpar",
      "bairro": "Sé",
      "localidade": "São Paulo",
      "uf": "SP",
      "ibge": "3550308",
      "gia": "1004",
      "ddd": "11",
      "siafi": "7107"
    }
  ])

  const getCep = () => {

    api
      .get(`${cep}/json`)
      .then((response) => setEnderecos([
        ...enderecos, response.data
      ]))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

  }


  const numberMask = (value) => value.replace(/\D/g, '');

  const handleSubmit = (e) => {
    e.preventDefault()

    const cepExiste = enderecos.find((endereco) => numberMask(endereco.cep) === cep);

    if (!cepExiste) {
      getCep()
    }
    // console.log(cepExiste, enderecos);
    setCep('')

  }

  return (
    <div>
      <GlobalStyle />

      <AppHeader />


      <form onSubmit={handleSubmit} >

        <Input type="text"
          placeholder='Digite o cep'
          value={cep}
          onChange={(e) => setCep(numberMask(e.target.value))}

        />

        <Button type='submit'>Buscar</Button>

      </form>

      <Table>


        <thead>
          <th>RUA</th>
          <th>BAIRRO</th>
          <th>CIDADE</th>
          <th>UF</th>
          <th>COMPLEMENTO</th>
          <th>DDD</th>
        </thead>
        <tbody>
          {enderecos.map((endereco) => {
            return (
              <tr>

                <td>{endereco.logradouro}</td>
                <td>{endereco.bairro}</td>
                <td>{endereco.localidade}</td>
                <td>{endereco.uf}</td>
                <td>{endereco.complemento}</td>
                <td>{endereco.ddd}</td>


              </tr>
            )
          })}
        </tbody>


      </Table>






    </div>
  )
}

export default App
