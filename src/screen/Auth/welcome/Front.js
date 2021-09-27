import React from 'react';
import {Row, Container, Col, Card,Tabs, Tab} from 'react-bootstrap';
//import './styles/app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


import Aux from '../../../hoc/_Aux';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
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
                                The growing demand for valid and reliable data for planning, management of educational services and providing comparative information on performance globally led to Education Management Information System (EMIS). The outcomes are still largely poor with 75% in Pacific and 81% Sub-Saharan Africa countries are using paper based data collection  (UNESCO Instituion for Statistics report 2020), despite millions of dollars spent to strengthen EMIS by donors.
                                </p>
                                <p>
                                Developed countries leverage on proprietary School Management Software (SMS) solutions such as Alma, Class365, Edsby, Eduflex, Edvance etc. in managing their education data, these solutions are expensive and unsuitable for developing countries with annual education budget below recommended international benchmark.
                                </p>
                                <p> 
                                Today, countries are without EMIS and those with EMIS are yet to advance from desktop solutions to a web platform for wider accessibility and efficient data management.  
                                </p>
                                <p>
                                An affordable school centered integrated web solution developed by Fiji Ministry of Education, known as FEMIS provides alternative for developing countries. However, it has core architecture design deficiencies and focuses on business processes only (for managing allocation of grants to schools and provision of vouchers to students) rather than generating education statistic and indicators data that can give overall education performances in the country. 
                                </p>
                                <p>
                                A modern web-based Intelligent EMIS (IEMIS) built on microservices architecture using MERN (MongoDB, ExpressJS, ReactJS, and NodeJS) stack to address EMIS challenges becomes necessary. It offers enhance data management, automation and visualization of education data (indicators) imperative for educational planning and policy-making. 
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6} md={6} lg={6}>
                    <Card>
                            <Card.Header>
                                <Card.Title> EDUCATION DATA SYNOPSIS</Card.Title>
                            </Card.Header>
                            <Card.Body>
                            <Tabs defaultActiveKey="current" id="uncontrolled-tab-example">
                            <Tab eventKey="last" title="2018 Insights">
                                
                            </Tab>
                            <Tab eventKey="previous" title="2019 Insights">
                            </Tab>
                            <Tab eventKey="current" title="2020 Insights">
                            </Tab>
                            <Tab eventKey="new" title="2021 Insights">
                            </Tab>
                        </Tabs>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Aux>
    );
}
