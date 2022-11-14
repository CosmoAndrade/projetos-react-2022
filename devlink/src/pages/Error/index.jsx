import { Link } from 'react-router-dom';
import './error.css'

import Logo from '../../components/Logo';

function Error() {

    return ( 
        <div className='error'>
            <Logo/>

            <h1>Página não encontrada!</h1>

            <Link className='link' to="/">
                Voltar para Home
            </Link>

        </div>
     );
}

export default Error;
