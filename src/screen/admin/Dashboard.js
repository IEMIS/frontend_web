import React from 'react';
//import {Row, Col, Card, Tabs, Tab, Table} from 'react-bootstrap';
import {Row, Col, Card, Table} from 'react-bootstrap';
import NVD3Chart from 'react-nvd3';

import Aux from "../../hoc/_Aux";
/*
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
*/
import { Link } from 'react-router-dom';


function generateNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

function getDatum() {
    let sin = [],
        sin2 = [],
        sin3 = [];

    const len =  35 + (Math.random() * (30-35000));
    for (let i = 0; i < len; i++) {
        sin.push({
            'x': i,
            'y': generateNumber(30, 30000)
        });
        sin2.push({
            'x': i,
            'y': generateNumber(35, 30000)
        });
        sin3.push({
            'x': i,
            'y': generateNumber(30, 30000)
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
/*
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

*/

const datum = [
    {
        key: "Male",
        color: "#FE8A7D",
        values: [
            {
                "label" : "ECE" ,
                "value" : 17422
              } ,
              {
                "label" : "YR1" ,
                "value" : 15067
              } ,
              {
                "label" : "YR2" ,
                "value" : 10441
              },
              {
                "label" : "YR3" ,
                "value" : 10255
              },
              {
                "label" : "YR4" ,
                "value" : 10496
              } ,
              {
                "label" : "YR5" ,
                "value" : 10346
              } ,
              {
                "label" : "YR6" ,
                "value" : 9356
              },
              {
                "label" : "YR7" ,
                "value" : 9245
              },
              {
                "label" : "YR8" ,
                "value" : 8945
              } ,
              {
                "label" : "YR9" ,
                "value" : 8542
              },
              {
                "label" : "YR10" ,
                "value" : 7555
              },
              {
                "label" : "YR11" ,
                "value" : 6548
              } ,
              {
                "label" : "YR12" ,
                "value" : 5698
              } ,
              {
                "label" : "YR13" ,
                "value" : 3579
              },
              {
                "label" : "Voc Y1 " ,
                "value" : 512
              },
              {
                "label" : "Voc Y2 " ,
                "value" : 166
              }
        
        ]
      },
    {
    key: "Female",
    color: '#1de9b6',
    values: [
        {
            "label" : "ECE" ,
            "value" : 8227
          } ,
          {
            "label" : "YR1" ,
            "value" : 9639
          } ,
          {
            "label" : "YR2" ,
            "value" : 9712
          },
          {
            "label" : "YR3" ,
            "value" : 9602
          },
          {
            "label" : "YR4" ,
            "value" : 9553
          } ,
          {
            "label" : "YR5" ,
            "value" : 9666
          } ,
          {
            "label" : "YR6" ,
            "value" : 8634
          },
          {
            "label" : "YR7" ,
            "value" : 8529
          },
          {
            "label" : "YR8" ,
            "value" : 8771
          } ,
          {
            "label" : "YR9" ,
            "value" : 8339
          },
          {
            "label" : "YR10" ,
            "value" : 7877
          },
          {
            "label" : "YR11" ,
            "value" : 7432
          } ,
          {
            "label" : "YR12" ,
            "value" : 7156
          } ,
          {
            "label" : "YR13" ,
            "value" : 4884
          },
          {
            "label" : "Voc Y1 " ,
            "value" : 307
          },
          {
            "label" : "Voc Y2 " ,
            "value" : 56
          }
    
    ]
  },
  {
    key: "Total",
    color: "#3ebfea",
    values: [
      {
        "label" : "ECE" ,
        "value" : 17422
      } ,
      {
        "label" : "YR1" ,
        "value" : 21430
      } ,
      {
        "label" : "YR2" ,
        "value" : 23456
      },
      {
        "label" : "YR3" ,
        "value" : 20672
      },
      {
        "label" : "YR4" ,
        "value" : 19956
      } ,
      {
        "label" : "YR5" ,
        "value" : 20345
      } ,
      {
        "label" : "YR6" ,
        "value" : 17527
      },
      {
        "label" : "YR7" ,
        "value" : 17832
      },
      {
        "label" : "YR8" ,
        "value" : 17122
      } ,
      {
        "label" : "YR9" ,
        "value" : 16632
      },
      {
        "label" : "YR10" ,
        "value" : 15232
      },
      {
        "label" : "YR11" ,
        "value" : 13323
      } ,
      {
        "label" : "YR12" ,
        "value" : 12345
      } ,
      {
        "label" : "YR13" ,
        "value" : 7432
      },
      {
        "label" : "Voc Y1 " ,
        "value" : 819
      },
      {
        "label" : "Voc Y2 " ,
        "value" : 222
      }

    ]
  }
];



class Dashboard extends React.Component {
    render() {

        const data = getDatum();
        console.log(data)
        /*
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
        */


        return (
            <Aux>
                {/*<Row>*/}
                    <Row>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Body>
                                    <Link to="/admin/students">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-6">
                                                <h6>Male </h6>
                                                <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 121,420</h3>
                                            </div>
                                            <div className="col-6">
                                                <h6>Female </h6>
                                                <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 118,354</h3>
                                            </div>
                                        {/* <div className="col-3 text-right">
                                                <p className="m-b-0"> </p>
                                            </div>*/}
                                        </div>
                                        <br />
                                        <div className="row d-flex align-items-center">
                                            <div className="col-9">
                                                <h6 className='mb-4'>Total number of Students</h6>
                                                <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 239,774</h3>
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
                                                    <h6>Governemnt</h6>
                                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="f-30 m-r-5"/> 300</h3>
                                                </div>
                                                <div className="col-3">
                                                    <h6>Non-Government</h6>
                                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className=" f-30 m-r-5"/> 1,384</h3>
                                                </div>
                                                <div className="col-3">
                                                    <h6>Private</h6>
                                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className=" f-30 m-r-5"/> 120</h3>
                                                </div>
                                        </div>
                                        <br/>
                                        <div className="col-9">
                                            <h6 className='mb-4'>Total number of Schools</h6>
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 1,784</h3>
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
                                                <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 9</h3>
                                            </div>
                                        </div>
                                        <div className="progress m-t-30" style={{height: '7px'}}>
                                            <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} xl={9}>
                            <Row>
                                <Card className='Recent-Users'>
                                    <Card.Header>
                                        <Card.Title as='h5'>Students Per Class Summary</Card.Title>
                                    </Card.Header>
                                    <Card.Body className='px-0 py-2'>
                                        <NVD3Chart id="barChart" type="multiBarChart" datum={datum} x="label" y="value" height={380} showValues groupSpacing={0.5} />
                                    </Card.Body>
                                </Card>
                                <Col md={6} xl={6}>
                                    <Card className='card-social'>
                                        <Card.Header>
                                            <Card.Title as='h5'>Teaching Staff </Card.Title>
                                        </Card.Header>
                                        <Card.Body className='border-bottom'>
                                        <Table responsive striped bordered hover>
                                            <thead>
                                                <tr>
                                                <th> </th>
                                                <th>ECE</th>
                                                <th>PRY</th>
                                                <th>SEC</th>
                                                <th>TVET</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td>Male</td>
                                                <td>120</td>
                                                <td>450</td>
                                                <td>452</td>
                                                <td>15</td>
                                                </tr>
                                                <tr>
                                                <td>Female</td>
                                                <td>158</td>
                                                <td>782</td>
                                                <td>651</td>
                                                <td>80</td>
                                                </tr>
                                                <tr>
                                                <td>Total</td>
                                                <td>278</td>
                                                <td>1232</td>
                                                <td>1103</td>
                                                <td>95</td>
                                                </tr>
                                            </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} xl={6}>
                                    <Card className='card-social'>
                                        <Card.Header>
                                            <Card.Title as='h5'>Non-Teaching Staff </Card.Title>
                                        </Card.Header>
                                        <Card.Body className='border-bottom'>
                                        <Table responsive striped bordered hover>
                                            <thead>
                                                <tr>
                                                <th> </th>
                                                <th>ECE</th>
                                                <th>PRY</th>
                                                <th>SEC</th>
                                                <th>TVET</th>
                                                <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td>Male</td>
                                                <td>120</td>
                                                <td>450</td>
                                                <td>452</td>
                                                <td>15</td>
                                                <td>1037</td>
                                                </tr>
                                                <tr>
                                                <td>Female</td>
                                                <td>158</td>
                                                <td>782</td>
                                                <td>651</td>
                                                <td>80</td>
                                                <td>16040</td>
                                                </tr>
                                                <tr>
                                                <td>Total</td>
                                                <td>278</td>
                                                <td>1232</td>
                                                <td>1103</td>
                                                <td>95</td>
                                                <td>40398</td>
                                                </tr>
                                            </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12} xl={3}>
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
                    </Row>
                    <Row>
                        
                    </Row>
                    {/*<Row>
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
                    </Row>
                    <Row>
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
                    </Row>                             */}
               {/* </Row>  */}
            </Aux>
        );
    }
}

export default Dashboard;