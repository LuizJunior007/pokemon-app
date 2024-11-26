import { useEffect } from "react";
import Title from "../../components/Title";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = () => {

    return(
        <>
            <Row>
                <Col>
                    <Title txt="Contato" />
                </Col>
            </Row>

            <Row>
                <Col md="6">
                    <div className="fw-medium text-secondary">
                        <a href="https://www.linkedin.com/in/luiz-junior-503969227/" target="blank">Linkedin</a>
                        <span> | </span>
                        <a href="https://github.com/LuizJunior007" target="blank">Github</a>
                        <span> | </span>
                        <span>juninhoc4p@gmail.com</span>
                    </div>
                </Col>
            </Row>
       </>
    );

}

export default Contact;