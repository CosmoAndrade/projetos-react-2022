import './home.css'

import { Social } from '../../components/Social';
import {FaFacebook,FaInstagram,FaYoutube} from 'react-icons/fa'

function Home() {

    return (
        <div className='home-container'>
            <h1>Cosmo Andrade</h1>
            <span>Veja meus links👇</span>

            <main className='links'>

                <section className='link-area'>
                    <a href='#'>
                        <p className='link-text'>Canal do Youtube</p>
                    </a>
                </section>

                <section className='link-area'>
                    <a href='#'>
                        <p className='link-text'>Telegram</p>
                    </a>
                </section>

                <section className='link-area'>
                    <a href='#'>
                        <p className='link-text'>Instagram</p>
                    </a>
                </section>

                <footer>
                    <Social url="#">
                        <FaFacebook size={35} color="#FFF"/>
                    </Social>

                    <Social url="#">
                        <FaInstagram size={35} color="#FFF"/>
                    </Social>

                    <Social url="#">
                        <FaYoutube size={35} color="#FFF"/>
                    </Social>
                </footer>

            </main>


        </div>
    );
}

export default Home;



