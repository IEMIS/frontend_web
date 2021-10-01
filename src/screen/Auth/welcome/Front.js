import React from 'react';
import {Row, Container, Col, Card,Tabs, Tab,Table} from 'react-bootstrap';
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
                                <Card.Title> Why IEMIS?</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p>
                                The growing demand for valid and reliable data for planning, management of educational services and providing comparative information on performance globally led to Education Management Information System (EMIS). The outcomes are still largely poor with 75% in Pacific and 81% Sub-Saharan Africa countries are using paper based data collection  (UNESCO Institute for Statistics report 2020), despite millions of dollars spent to strengthen EMIS by donors.
                                </p>
                                <p> 
                                Today, many countries are without EMIS and some with EMIS are yet to advance from desktop solutions to a web platform for wider accessibility and efficient data management.  
                                </p>
                                <p>
                                Developed countries leverage on proprietary School Management Software (SMS) solutions such as Alma, Class365, Edsby, Eduflex, Edvance etc. in managing their education data, these solutions are expensive and unsuitable for developing countries with annual education budget below recommended international benchmark.
                                </p>
                               
                                <p>
                                An affordable school centered integrated web solution developed by Fiji Ministry of Education, known as FEMIS provides alternative for developing countries. However, it has core architecture design deficiencies and focuses on business processes only (for managing allocation of grants to schools and provision of vouchers to students) rather than generating education statistic and indicators data that can give overall education performances in the country. 
                                </p>
                                <p>
                                A modern web-based Intelligent EMIS (IEMIS) built on microservices architecture using MERN (MongoDB, ExpressJS, ReactJS, and NodeJS) stack to address EMIS challenges becomes necessary.  
                                </p>
                                <p>
                                IEMIS offers enhanced data management, automation and visualization of education data (indicators) imperative for educational planning and policy-making.
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
                            <Tabs defaultActiveKey="new" id="uncontrolled-tab-example">
                            <Tab eventKey="last" title="2018 Insights">
                            </Tab>
                            <Tab eventKey="previous" title="2019 Insights">
                            </Tab>
                            <Tab eventKey="current" title="2020 Insights">
                            </Tab>
                            <Tab eventKey="new" title="2021 Insights">
                            </Tab>
                        </Tabs>
                        <div>
                            <Table responsive="lg">
                                <thead>
                                <tr>
                                    <th>Level</th>
                                    <th>MoEHA</th>
                                    <th>IEMIS</th>
                                    <th>Variation</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Pre-School</td>
                                    <td>17,912</td>
                                    <td>17,469</td>
                                    <td>443</td>
                                </tr>
                                <tr>
                                    <td>Primary</td>
                                    <td>154,206</td>
                                    <td>153,757</td>
                                    <td>449</td>
                                </tr>
                                <tr>
                                    <td>Secondary</td>
                                    <td>67,547</td>
                                    <td>67,610</td>
                                    <td>-63 </td>
                                </tr>
                                <tr>
                                    <td>Vocational</td>
                                    <td>806</td>
                                    <td>1041</td>
                                    <td>-235 </td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>240,471</td>
                                    <td>239,877</td>
                                    <td>594 </td>
                                </tr>
                                </tbody>
                            </Table>
                            <Table responsive="xl">
                                <thead>
                                <tr>
                                    <th>Level</th>
                                    <th>MoEHA</th>
                                    <th>IEMIS</th>
                                    <th>Variation</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Pre-School</td>
                                    <td>874</td>
                                    <td>871</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>Primary</td>
                                    <td>736</td>
                                    <td>739</td>
                                    <td>-3</td>
                                </tr>
                                <tr>
                                    <td>Secondary</td>
                                    <td>172</td>
                                    <td>175</td>
                                    <td>-3 </td>
                                </tr>
                                <tr>
                                    <td>Vocational</td>
                                    <td>N/A</td>
                                    <td>2</td>
                                    <td>-2 </td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>1,782</td>
                                    <td>1,787</td>
                                    <td>-5 </td>
                                </tr>
                                </tbody>
                            </Table> <Table responsive="xl">
                                <thead>
                                <tr>
                                    <th>District</th>
                                    <th>Government</th>
                                    <th>Non-Govterment</th>
                                    <th>Private</th>
                                    <th>Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Ba-Tavua</td>
                                    <td>21</td>
                                    <td>118</td>
                                    <td>2</td>
                                    <td>141</td>
                                </tr>
                                <tr>
                                    <td>Cakaudrove</td>
                                    <td>18</td>
                                    <td>132</td>
                                    <td>2</td>
                                    <td>152</td>
                                </tr>
                                <tr>
                                    <td>Eastern</td>
                                    <td>38</td>
                                    <td>202</td>
                                    <td>4</td>
                                    <td>244</td>
                                </tr>
                                <tr>
                                    <td>Lautoka-Yasawa</td>
                                    <td>28</td>
                                    <td>179</td>
                                    <td>9</td>
                                    <td>216</td>
                                </tr>
                                <tr>
                                    <td>Macuata-Bua</td>
                                    <td>22</td>
                                    <td>223</td>
                                    <td>6</td>
                                    <td>251</td>
                                </tr>
                                <tr>
                                    <td>Nadroga-Navosa</td>
                                    <td>24</td>
                                    <td>118</td>
                                    <td>5</td>
                                    <td>147</td>
                                </tr>
                                <tr>
                                    <td>Nausori</td>
                                    <td>59</td>
                                    <td>221</td>
                                    <td>6</td>
                                    <td>286</td>
                                </tr>
                                <tr>
                                    <td>Ra</td>
                                    <td>16</td>
                                    <td>100</td>
                                    <td>1</td>
                                    <td>117</td>
                                </tr>
                                <tr>
                                    <td>Suva</td>
                                    <td>31</td>
                                    <td>184</td>
                                    <td>18</td>
                                    <td>233</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>257</td>
                                    <td>1,477</td>
                                    <td>53</td>
                                    <td>1,787</td>
                                </tr>
                                </tbody>
                            </Table>
                            </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Aux>
    );
}
