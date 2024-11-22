import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Title from "../../components/Title";

const About = () => {

    return(
       <>
            <Row>
                <Col>
                    <Title txt="Sobre" />
                </Col>
            </Row>

            <Row>
                <Col md="6">
                    <p className="fw-medium text-secondary">
                        App feito para praticar rotas e alguns hooks do react.
                    </p>
                </Col>
            </Row>
       </>
    );

}

export default About;