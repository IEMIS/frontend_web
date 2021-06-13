import React from 'react';

import {Row, Container, Col,} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


import Aux from '../../../hoc/_Aux';
import Navigation from './components/Navigation';


export default function About() {
    return (
        <Aux>
            <Navigation />
            <Container>
                <Row>
                    <Col></Col>
                    <Col>All copy reserved @IEMIS 2021</Col>
                    <Col></Col>
                </Row>
            </Container>
        </Aux>
    )
}
