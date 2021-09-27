import React from 'react';
import {Row, Container, Col, Card,} from 'react-bootstrap';
import './styles/app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


import Aux from '../../../hoc/_Aux';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Slide from './components/Slide'

export default function Feature() {
    return (
        <Aux>
            <Navigation />
            <Container>
            <Slide />
                <Row>
                    
                </Row>
            </Container>
            <Footer />
        </Aux>
    )
}