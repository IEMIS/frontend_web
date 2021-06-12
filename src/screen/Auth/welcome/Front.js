import React from 'react';
import {Row, Container,} from 'react-bootstrap';
//import './styles/app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


import Aux from '../../../hoc/_Aux';
import Navigation from './components/Navigation';

export default function Front() {
    return (
        <Aux>
            <Navigation />
            <Container>
                <Row>
                </Row>
            </Container>
        </Aux>
    )
}
