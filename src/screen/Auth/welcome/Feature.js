import React from 'react';

import {Row, Container, Col,} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


import Aux from '../../../hoc/_Aux';
import Navigation from './components/Navigation';


export default function Feature() {
    return (
        <Aux>
            <Navigation />
            <Container>
                <Row>
                    <Col></Col>
                    <Col>All rights reserved @IEMIS 2021</Col>
                    <Col></Col>
                </Row>
            </Container>
        </Aux>
    )
}