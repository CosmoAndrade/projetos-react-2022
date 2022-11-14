import './login.css'
import Logo from "../../components/Logo/index"
import { useState } from 'react';
import {auth} from '../../services/firebaseConnections'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom';

import {toast} from 'react-toastify'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // cosmo@email.com
    // Jc190785

    function handleLogin(e){
        e.preventDefault();


        if(email === '' || password === '') {
            toast.error("Preencha todos os campos!'")
            return;
        }

        signInWithEmailAndPassword(auth,email,password)
        .then(() => {
            console.log('Usuario logado com sucesso!')
            toast.success("Bem vindo de volta :)")
            navigate("/admin" , {replace: true})
        })
        .catch(() => {
            console.log('Erro ao fazer seu login!')
            toast.error("Erro ao fazer seu login!")
            
        })



    }

    return (
        <div className='login-container'>
            <Logo />

            <form className='form' onSubmit={handleLogin}>

                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Digite seu email...'
                />

                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Digite sua senha'
                    autoComplete='on'
                />

                <button type="submit">Acessar</button>


            </form>
        </div>

    );
}

export default Login;



