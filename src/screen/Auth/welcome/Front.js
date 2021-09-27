import React from 'react';
import {Row, Container, Col, Card,} from 'react-bootstrap';
//import './styles/app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


import Aux from '../../../hoc/_Aux';
import Navigation from './components/Navigation';
import Slide from './components/Slide'

export default function Front() {
    return (
        <Aux>
            <Navigation />
            <Container>
                <Slide />
                <Row style={{paddingTop:"20px"}}>
                    <Col xl={6} md={6} lg={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title> Why IEMIS</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p>
                                Strengthening of Education Management Information System (EMIS) has been the focus of International Development Partners (IDPs) over the years, while developed countries leverage on proprietary School Management Software (SMS) solutions such as Alma, Class365, Edsby, Eduflex, Edvance etc. in managing their education data, these solutions are expensive and unsuitable for developing countries whose annual education budget still fall below international benchmark. Today, countries are without EMIS and those with EMIS are yet to advance from desktop solutions to a web platform for efficient coverage and handling of education data.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6} md={6} lg={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title> Why IEMIS</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p>
                                Strengthening of Education Management Information System (EMIS) has been the focus of International Development Partners (IDPs) over the years, while developed countries leverage on proprietary School Management Software (SMS) solutions such as Alma, Class365, Edsby, Eduflex, Edvance etc. in managing their education data, these solutions are expensive and unsuitable for developing countries whose annual education budget still fall below international benchmark. Today, countries are without EMIS and those with EMIS are yet to advance from desktop solutions to a web platform for efficient coverage and handling of education data.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>All rights reserved @IEMIS 2021</Col>
                    <Col></Col>
                </Row>
            </Container>
        </Aux>
    )
}
