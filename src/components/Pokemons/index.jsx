import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Pokemons = ({ pokemons, loading, loadMorePokemons }) => {

    const handleGetPokId = (url) => {

        return url.split('/')[6];

    }

    const handleFirstLetterUpper = (string) => {

        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <>
            {loading 
                ? 
                    <div className='text-center'>
                        <Spinner animation="border" variant="primary">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                :
                    <div>
                        <Row className='g-2'>
                            {pokemons.length > 0 ? pokemons.map((p, i) => 
                                <Col xxs="12" xs="6" sm="4" md="3" lg="2" key={i}>
                                    <Link to={`/pokemon/${handleGetPokId(p.url)}`}>
                                        <Card>
                                            <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${handleGetPokId(p.url)}.png`} />
                                            <Card.Body className='fw-medium'>{handleFirstLetterUpper(p.name)}</Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            ) : <Col>
                                    <p className='fw-medium text-secondary'>Nenhum pokemon foi encontrado</p>
                                </Col>}
                        </Row>

                        <div className='text-center mt-3 mb-3'>
                            <Button variant="primary" onClick={() => loadMorePokemons()}>Carregar mais</Button>
                        </div>

                    </div>
            }
        </>
    );

}

export default Pokemons;