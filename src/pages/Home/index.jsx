import { useEffect, useState } from "react";
import Pokemons from "../../components/Pokemons";
import Title from "../../components/Title";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const Home = () => {

    const [ baseUrl ] = useState('https://pokeapi.co/api/v2/');
    const [ pokemons, setPokemons ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ limit, setLimit ] = useState(20);
    const [ offset, setOffset ] = useState(0);
    const [ query, setQuery ] = useState('');
    
    const handleGetPokemons = async () => {

        setLoading(true);

        try{

            const res = await fetch(baseUrl + `pokemon?limit=${limit}&offset=${offset}`);

            if(!res.ok){

                throw new Error('Erro ao tentar fazer requisição');

            }

            const data = await res.json();
            setLoading(false);
            
            if(!pokemons.length > 0){

                return setPokemons(data.results);
                
            } 

            setPokemons(prev => [...prev, ...data.results]);

        } catch(error){

            setLoading(false);
            console.log(error);

        }

    }

    const handleLoadMorePokemons = () => {

        setOffset(off => off + limit);
    }

    const handleSearchPokemons = (value) => {
        
        setQuery(value);
        
        if(!value == ''){

            const filteredPoks = pokemons.filter((pok) => 
                pok.name.toLowerCase().includes(value.toLowerCase())
            );
    
            return setPokemons(filteredPoks);
        }

        
    }

    useEffect(() => {

        handleGetPokemons();

    }, []);

    useEffect(() => {

        handleGetPokemons();

    }, [offset]);

    return(
        <>
            <Row className="mb-3 mb-sm-0">
                <Col sm="9">
                    <Title txt="Pokemons" />
                </Col>

                <Col sm="3">
                    <Form.Control type="text" placeholder="Buscar pokemon" value={query} onChange={ (e) => handleSearchPokemons(e.target.value) } />
                </Col>
            </Row>

            <Pokemons pokemons={pokemons} loading={loading} loadMorePokemons={handleLoadMorePokemons} />
        </>
    );

}

export default Home;