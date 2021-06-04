import React from "react";
import './HomePage.css';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function Home(){
    let history = useHistory();

    return (
        <div className="Home">
            <Container className="container">
                <Row>
                    <Col>
                    <button className="button"
                        onClick={() => {
                            history.push("/carnot-efficiency");
                        }}
                    >
                        Carnot Efficiency Calculator
                    </button>
                    <button className="button"
                        onClick={() => {
                            history.push("/water-flow-rate");
                        }}
                    >
                        Water Flow Rate Calculator
                    </button>
                    </Col>
                    <Col>
                    <button className="button"
                        onClick={() => {
                            history.push("/michaelis-menten-equation");
                        }}
                    >
                        Michaelis-Menten Equation Calculator
                    </button>
                    <button className="button"
                        onClick={() => {
                            history.push("/mole");
                        }}
                    >
                        Mole Calculator
                    </button>
                    </Col>
                    <Col>
                    <button className="button"
                        onClick={() => {
                            history.push("/mach-number");
                        }}
                    >
                        Mach Number Calculator
                    </button>
                    <button className="button"
                        onClick={() => {
                            history.push("compressibility-factor");
                        }}
                    >
                        Compressibility Factor Calculator
                    </button>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
}

export default Home;
