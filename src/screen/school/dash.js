import React from 'react';
import {Row, Col, Card, Tabs, Tab} from 'react-bootstrap';
import NVD3Chart from 'react-nvd3';




import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import { Link } from 'react-router-dom';


function generateNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

function getDatum() {
    let sin = [],
        sin2 = [],
        sin3 = [];

    const len =  35 + (Math.random() * (70-35));
    for (let i = 0; i < len; i++) {
        sin.push({
            'x': i,
            'y': generateNumber(0, 60)
        });
        sin2.push({
            'x': i,
            'y': generateNumber(0, 100)
        });
        sin3.push({
            'x': i,
            'y': generateNumber(0, 30)
        });
    }
    return [
        {
            values: sin,
            key: 'Stream #0',
            color: '#A389D4'
        },
        {
            values: sin3,
            key: 'Stream #1',
            color: '#04a9f5'
        },
        {
            values: sin2,
            key: 'Stream #3',
            color: '#1de9b6',
            area: true
        }
    ];
}

const datum1 = [
    {key: "One", y: 29, color: "#ff8a65"},
    {key: "Two", y: 0, color: "#f4c22b"},
    {key: "Three", y: 32, color: "#04a9f5"},
    {key: "Four", y: 196, color: "#3ebfea"},
    {key: "Five", y: 2, color: "#4F5467"},
    {key: "Six", y: 98, color: "#1de9b6"},
    {key: "Seven", y: 13, color: "#a389d4"},
    {key: "Eight", y: 5, color: "#FE8A7D"}
];

const datum2 = [
    {key: "One", y: 29, color: "#ff8a65"},
    {key: "Two", y: 0, color: "#f4c22b"},
    {key: "Three", y: 32, color: "#04a9f5"},
    {key: "Four", y: 196, color: "#3ebfea"},
    {key: "Five", y: 2, color: "#4F5467"},
    {key: "Six", y: 98, color: "#1de9b6"},
    {key: "Seven", y: 13, color: "#a389d4"},
    {key: "Eight", y: 5, color: "#FE8A7D"}
];



class Dash extends React.Component {
    render() {

        const data = getDatum();
        const tabContent = (
            <Aux>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline"> <a href={DEMO.BLANK_LINK}>Silje Larsen</a></h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>3784</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Julie Vad</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>3544</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Storm Hanse</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red"/>2739</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Frida Thomse</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red"/>1032</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Silje Larsen</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>8750</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Storm Hanse</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red"/>8750</span>
                    </div>
                </div>
            </Aux>
        );


        return (
            <Aux>
                <Row>
                    <Col md={4} xl={4}>
                        <Card>
                            <Card.Body>
                                <Link to="/admin/students">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-6">
                                            <h6>Male </h6>
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 1,600</h3>
                                        </div>
                                        <div className="col-6">
                                            <h6>Male </h6>
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 1,420</h3>
                                        </div>
                                       {/* <div className="col-3 text-right">
                                            <p className="m-b-0"> </p>
                                        </div>*/}
                                    </div>
                                    <br />
                                    <div className="row d-flex align-items-center">
                                        <div className="col-9">
                                            <h6 className='mb-4'>Total number of Students</h6>
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 3,020</h3>
                                        </div>
                                    </div>
                                    <div className="progress m-t-30" style={{height: '7px'}}>
                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={6}>
                        <Card>
                            <Card.Body>
                                <Link to="/admin/schools">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-3">
                                            <h6>Community </h6>
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="f-30 m-r-5"/> 1,600</h3>
                                        </div>
                                            <div className="col-3">
                                                <h6>Governemnt</h6>
                                                <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="f-30 m-r-5"/> 1,420</h3>
                                            </div>
                                            <div className="col-3">
                                                <h6>Faith Base</h6>
                                                <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className=" f-30 m-r-5"/> 1,420</h3>
                                            </div>
                                            <div className="col-3">
                                                <h6>Privatet</h6>
                                                <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className=" f-30 m-r-5"/> 1,420</h3>
                                            </div>
                                    </div>
                                    <br/>
                                    <div className="col-9">
                                        <h6 className='mb-4'>Total number of Schools</h6>
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 40</h3>
                                    </div>
                                    <div className="progress m-t-30" style={{height: '7px'}}>
                                        <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} xl={2}>
                        <Card>
                            <Card.Body>
                                <Link to="/admin/districts">
                                    <h6 className='mb-4'>Total Number of Districts</h6>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-9">
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 20</h3>
                                        </div>
                                    </div>
                                    <div className="progress m-t-30" style={{height: '7px'}}>
                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} xl={12}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as='h5'>Current Year Indicator </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="row d-flex align-items-center">
                                    <div className="col-2">
                                        <h6>GIR </h6>
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 1,600</h3>
                                    </div>
                                        <div className="col-2">
                                            <h6>NIR</h6>
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 1,420</h3>
                                        </div>
                                        <div className="col-2">
                                            <h6>ANR</h6>
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 1,420</h3>
                                        </div>
                                        <div className="col-2">
                                            <h6>GER</h6>
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 1,420</h3>
                                        </div>
                                        <div className="col-2">
                                            <h6>NER</h6>
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 1,420</h3>
                                        </div>
                                        <div className="col-2">
                                            <h6>ASER</h6>
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 1,420</h3>
                                        </div>
                                        <br />
                                        <div className="col-2" style={{marginTop:10, paddingTop:40}}>
                                            <h6>OOS</h6>
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 1,420</h3>
                                        </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    
                    <Col md={6} xl={8}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as='h5'>Students Summary</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <NVD3Chart type="multiBarChart" datum={data} x="school" y="level" height={380} showValues groupSpacing={0.5} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className='card-event'>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col">
                                        <h5 className="m-0">Upcoming Event</h5>
                                    </div>
                                    <div className="col-auto">
                                        <label className="label theme-bg2 text-white f-14 f-w-400 float-right">34%</label>
                                    </div>
                                </div>
                                <h2 className="mt-2 f-w-300">Data<sub className="text-muted f-14">Management</sub></h2>
                                <h6 className="text-muted mt-3 mb-0">You can participate in event </h6>
                                <i className="fa fa-angellist text-c-purple f-50"/>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className='border-bottom'>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="feather icon-zap f-30 text-c-green"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">20</h3>
                                        <span className="d-block text-uppercase">Student transfer Request</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="feather icon-map-pin f-30 text-c-blue"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">26</h3>
                                        <span className="d-block text-uppercase">total locations</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className='card-social'>
                            <Card.Body className='border-bottom'>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto">
                                        {/*<i className="fa fa-facebook text-primary f-36"/>*/}
                                        <h5>Teaching staff</h5>
                                    </div>
                                    <div className="col text-right">
                                        <h3>12,281</h3>
                                        {/*<h5 className="text-c-green mb-0">+7.2% <span className="text-muted">Total Likes</span></h5>*/}
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className='card-social'>
                            <Card.Body className='border-bottom'>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto">
                                        <h5>Non-Teaching Staff</h5>
                                    </div>
                                    <div className="col text-right">
                                        <h3>11,200</h3>
                                        
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className='card-social'>
                            <Card.Body className='border-bottom'>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto">
                                        <h5>Total Staff</h5>
                                    </div>
                                    <div className="col text-right">
                                        <h3>10,500</h3>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Students Attendance Weekly Report</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <NVD3Chart id="chart" height={300} type="pieChart" datum={datum1} x="key" y="y"  />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={6} className='m-b-30'>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Students Attendance Yearly Report</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <NVD3Chart id="chart" height={300} type="pieChart" datum={datum2} x="key" y="y"  />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Student % in a Class</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center m-b-20">
                                    <div className="col-6">
                                        <h2 className="f-w-300 d-flex align-items-center float-left m-0">4.7 <i className="fa fa-star f-10 m-l-10 text-c-yellow"/></h2>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="d-flex  align-items-center float-right m-0">0.4 <i className="fa fa-caret-up text-c-green f-22 m-l-10"/></h6>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow"/>5</h6>
                                        <h6 className="align-items-center float-right">384</h6>
                                        <div className="progress m-t-30 m-b-20" style={{height: '6px'}}>
                                            <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow"/>4</h6>
                                        <h6 className="align-items-center float-right">145</h6>
                                        <div className="progress m-t-30  m-b-20" style={{height: '6px'}}>
                                            <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow"/>3</h6>
                                        <h6 className="align-items-center float-right">24</h6>
                                        <div className="progress m-t-30  m-b-20" style={{height: '6px'}}>
                                            <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow"/>2</h6>
                                        <h6 className="align-items-center float-right">1</h6>
                                        <div className="progress m-t-30  m-b-20" style={{height: '6px'}}>
                                            <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow"/>1</h6>
                                        <h6 className="align-items-center float-right">0</h6>
                                        <div className="progress m-t-30  m-b-5" style={{height: '6px'}}>
                                            <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={8} className='m-b-30'>
                        <Tabs defaultActiveKey="today" id="uncontrolled-tab-example">
                            <Tab eventKey="today" title="Staff Request ">
                                {tabContent}
                            </Tab>
                            <Tab eventKey="week" title="Parent Request">
                                {tabContent}
                            </Tab>
                            <Tab eventKey="all" title="All Request">
                                {tabContent}
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Dash;