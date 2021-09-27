import React from 'react';
import {Row, Container, Col, Card,} from 'react-bootstrap';
import './styles/app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


import Aux from '../../../hoc/_Aux';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Slide from './components/Slide'



export default function About() {
    return (
        <Aux>
            <Navigation />
            <Container>
                <Row style={{paddingTop:"20px"}}>
                    <Col xl={12} md={12} lg={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title> About IEMIS</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p>
                                IEMIS is cloud native application developed to aid education data collection, improve automation of quality data generation for planning and policy making. It is accessible to learners/parents/guardian, school staff, and Ministry of Education officials. 
                                </p>
                                <p>
                                A MERN stack solution in pursuit of MSc, Computing Science Award at the University of the South Pacific, fully funded by Queen Elizabeth Commonwealth Scholarship (2020-2021). This idea was borne out of my desire to support developing countries to solve age long problem on having  achieve 2030 Sustainable Development Goal (SDG) on Quality of Education. 
                                </p>
                                <p> 
                                This IEMISv1.0 (version) is a Minimum Viable Product (MVP) due to circumstances beyond us (i.e pandemic, unavailability of historical data and time constraint etc).  The solution would further be enhanced to allow predictive analytics in the following areas;
                            <ul>
                                <li> predicting students likely to dropout from school and forecasting enrolment drive using time series forecasting models; </li>
                                <li> school mapping and placement of primary school learners to a neighbourhood high schools through clustering models;</li>
                                <li> perform classification modelling to determine candidates likely to pass or fail certificate examination; and </li>
                                <li>implementation of A and B testing in new teaching methodology </li>

                             </ul>
                                </p>
                                <p>
                                On a final note, I am indebted to the supervisory team (Dr. Vani Vasudevan, Principal Supervisor; Associate Prof. MGM Khan, Co-Supervisor and Prof. Govinda Ishwar Lingam, Co-Supervisor), QECS, My Family and Abdul Jeleel in Nigeria for their sacrifices, while special appreciation goes to Fiji Ministry of Education and International Development Partners whose data and reports guided the realization of this web solution. 
                                </p>
                            </Card.Body>
                        </Card>
                        </Col>
                </Row>
                <Slide />
                <Row>
                </Row>
            </Container>
            <Footer />
        </Aux>
    )
}
