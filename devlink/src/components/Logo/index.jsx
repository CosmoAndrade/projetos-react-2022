
import { Link } from 'react-router-dom';
import './logo.css'

function Logo() {

    return (
        <div>

            <Link to="/">
                <h1 className='logo'>Dev<span className='logo-text'>Link</span></h1>
            </Link>

        </div>
    );
}

export default Logo;
