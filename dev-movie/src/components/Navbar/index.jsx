import { Link, NavLink } from "react-router-dom";
import { Container, Header, Nav } from "./navbar";

function Navbar() {

    return (
        <Header>

            <Nav>

                <NavLink to={'/'}>

                    <h1>DevMovie</h1>

                </NavLink>

            </Nav>

            <Container >
                <Link to={'/favoritos'} >Favoritos</Link>
            </Container>

        </Header>
    );
}

export default Navbar;

