import React from 'react';
import {Row, Col, Card,Table, Form} from 'react-bootstrap';
import NVD3Chart from 'react-nvd3';

import Aux from "../../hoc/_Aux";
import { Link } from 'react-router-dom';


const datum = [
    {
        key: "Male",
        color: "#FE8A7D",
        values: [
          {
            "label" : "Pre School" ,
            "value" : 10,
          } ,
          {
            "label" : "Year 1" ,
            "value" : 20,
          } ,
          {
            "label" : "Year 2" ,
            "value" : 15
          } ,
          {
            "label" : "Year 3" ,
            "value" : 21
          }
        ]
      },
    {
    key: "Female",
    color: '#1de9b6',
    values: [
      {
        "label" : "Pre School" ,
        "value" : 15
      } ,
      {
        "label" : "Year 1" ,
        "value" : 20
      } ,
      {
        "label" : "Year 2" ,
        "value" : 11
      } ,
      {
        "label" : "Year 3" ,
        "value" : 14
      }
    ]
  },
  {
    key: "Total",
    color: "#3ebfea",
    values: [
      {
        "label" : "Pre School" ,
        "value" : 50
      } ,
      {
        "label" : "Year 1" ,
        "value" : 100
      } ,
      {
        "label" : "Year 2" ,
        "value" : 59
      },
      {
        "label" : "Year 3" ,
        "value" : 69
      }
    ]
  }
];



class SchoolData extends React.Component {
    render() {

        return (
            <Aux>
                {/*<Row>*/}
                    <Row>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        Seleect District
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>District</Form.Label>
                                        <Form.Control as="select">
                                                <option>Select district</option>
                                                <option>Select district</option>
                                                <option>Select district</option>
                                               {
                                                   /*
                                                   districtList && districtList.length > 0 
                                                   ?
                                                   districtList.map((dist, id)=>{
                                                       return(
                                                        <option value={dist._id}>{dist.names}</option>
                                                       ) 
                                                   }) : <option value="0">Fails to fetch district</option>
                                                   */
                                               }
                                        </Form.Control>
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        Select School
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Schools list</Form.Label>
                                        <Form.Control as="select">
                                                <option>Select School</option>
                                
                                               {
                                                   /*
                                                   districtList && districtList.length > 0 
                                                   ?
                                                   districtList.map((dist, id)=>{
                                                       return(
                                                        <option value={dist._id}>{dist.names}</option>
                                                       ) 
                                                   }) : <option value="0">Fails to fetch district</option>
                                                   */
                                               }
                                        </Form.Control>
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5} xl={5}>
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
                    </Row>
                    <Row>
                        <Col md={12} xl={9}>
                            <Row>
                                <Card className='Recent-Users'>
                                    <Card.Header>
                                        <Card.Title as='h5'>Students per class Summary</Card.Title>
                                    </Card.Header>
                                    <Card.Body className='px-0 py-2'>
                                        <NVD3Chart id="barChart" type="multiBarChart" datum={datum} x="label" y="value" height={380} showValues groupSpacing={0.5} />
                                    </Card.Body>
                                </Card>
                                <Col md={6} xl={6}>
                                    <Card className='card-social'>
                                        <Card.Header>
                                            <Card.Title as='h5'>Teachering Staff </Card.Title>
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
                                            <Card.Title as='h5'>None Teachering Staff </Card.Title>
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
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                    </Row>

               {/* </Row>  */}
            </Aux>
        );
    }
}

export default SchoolData;