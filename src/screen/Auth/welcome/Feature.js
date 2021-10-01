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
            <Row style={{paddingTop:"20px"}}>
                    <Col xl={12} md={12} lg={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title>IEMIS FEATURES</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h5>Web Application </h5>
                                <p> 
                                IEMIS is a non-commercial web based application developed with open source MERN stack technologies that allow user to access their dashboard via any device’s browsers and perform CRUD operation according to the authorization level. 
                                </p>
                                <h5>Visualization of Education data and Indicators </h5>
                                <p> 
                                IEMIS offers dynamic pie (donut) charts and bar graph to aid analysis and support policy making on education statistics data and indicators in a granular disaggregation level.  
                                </p>
                                <h5>Wider coverage </h5>
                                <p> 
                                Most of EMIS solutions are only accessible to Ministry of Education and District because of associated cost in managing many users on premise servers and databases, IEMIS is a cloud native web application that is highly available, scalable as users grow, no downtime as a result of updates and inclusive security with an affordable pay as you go model. Schools/parent/ student/ teachers can conveniently access IEMIS from their comfort zones.
                                </p>
                                <h5>Single Database </h5>
                                <p>IEMIS uses MongoDB (NoSQL database) that has an expressive query language, indexing for fast lookup and real time aggregation which provides powerful ways to access and analyse data. This ensure a single record per user throughout education level for handling cohort analysis and improve data quality on record retrieval per academic session.
                                </p>
                                <h5>Reporting </h5>
                                <p>  
                                Screenshots from dynamic visualization on IEMIS dashboard would help to build annual education digest report indicators in line with international standards to support SDG 4. As well as monitoring implementation of the Pacific Regional Education Framework (PacREF).  
                                </p>
                                <h5>Real-Time Monitoring </h5>
                                <p> 
                                Education data and indicators are real-time on authorized user’s dashboard.
                                </p>
                                <h5>Data Management </h5>
                                <p> 
                                IEMIS eases data management through decentralization of roles in reducing various Admin’s work in managing record through user’s dashboard. Self-reset password is also possible for all users with an enhanced security. 
                                </p>
                                <p> 
                                Others technologies' benefits are;
                            <ul>
                                <li> Enables the continuous delivery and deployment of new changes to applications; </li>
                                <li> Improved fault isolation;</li>
                                <li> non-blocking I/O calls; </li>
                                <li> Efficient caching; </li>
                                <li> Real-time communication; and </li>
                                <li> Speed and Performance. </li>
                                 
                             </ul>
                                </p>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
            </Container>
            <Footer />
        </Aux>
    )
}