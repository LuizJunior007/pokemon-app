import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {

    return(
        <header>
            <Navbar collapseOnSelect expand="lg" className="bg-primary navbar-dark">
                <Container fluid="xxl">
                    <Link to="/" className='navbar-brand d-flex align-items-center'>
                        <div>
                            <img src="/pikachu.png" alt="logo" />
                        </div>

                        <div className='ms-2'>
                            Pokemon-app
                        </div>
                    </Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Link to="/sobre" className='nav-link'>Sobre</Link>
                            <Link to="/contato" className='nav-link'>Contato</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );

}

export default Header;