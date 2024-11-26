import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import Title from "../../components/Title";
import Spinner from "react-bootstrap/esm/Spinner";

const Pokemon = () => {

    const { id } = useParams();
    const [ pokemon, setPokemon ] = useState(null);

    const handleGetPokemon = async () => {

        try{

            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

            if(!res.ok){

                throw new Error('Erro ao tentar fazer requisição');

            }

            const data = await res.json();

            setPokemon(data);

        } catch(error){

            console.log(error);

        }

    }

    const handleFirstLetterUpper = (string) => {

        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {

        handleGetPokemon();

    }, []);

    useEffect(() => {

        document.title = 'Carregando... - Pokemon-app';

        if(pokemon){

            document.title = `${handleFirstLetterUpper(pokemon.name)} - Pokemon-app`;

        }

    }, [pokemon]);

    if(!pokemon){

        return(
            <div className='text-center'>
                <Spinner animation="border" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )

    }

    return(
        <>
            <Row className="mb-3 mb-sm-0">
                <Col>
                    <Title txt={handleFirstLetterUpper(pokemon.name)} />
                </Col>
            </Row>

            <Row className="g-2">
                <Col xs="12" sm="4" md="3" lg="2">
                    <Card>
                        <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                        <Card.Title>Stats</Card.Title>
                        <Card.Body>
                            {pokemon.stats.map((p, i) => 
                                <div key={i}>{p.stat.name} | <span className="text-primary">{p.base_stat}</span></div>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );

}

export default Pokemon;