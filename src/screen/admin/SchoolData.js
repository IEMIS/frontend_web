
import React from 'react';
import {Row, Col, Card,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NVD3Chart from 'react-nvd3';


import {countStudentByGender, countStudentByClass, countSchoolByOwnership, countTeacherBySchool} from "./api"
import Aux from "../../hoc/_Aux";
/*
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
*/

class SchoolData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            countbygender:[],
            countbydistrict:[],
            countbyschool : [],
            countbyeduLevel :[],
            countbyownership:[],
            countbytype: [],
            countbycat : [],
            countbyclass:[],
            countTeachbySchool:[],
        }
    }

    async componentDidMount(){
      const Auth = await JSON.parse(localStorage.getItem('admin-Auth'));
      const countbygen = await countStudentByGender(Auth.token)
      const countbyowner = await countSchoolByOwnership(Auth.token)
      const countbyclass = await countStudentByClass(Auth.token)
      const countTeachbySchoolResp = await countTeacherBySchool(Auth.token)
      this.setState({countbygender:countbygen.data, countbyownership:countbyowner.data, countbyclass:countbyclass.data, countTeachbySchool:countTeachbySchoolResp.data})
        
    }

    async componentDidUpdate(){

    }

    async UNSAFE_componentWillUnmount(){

    }

    

    render() {
        const {countbygender, countbyclass,countbyownership,countTeachbySchool} = this.state;
        return (
            <Aux>
                     <Row>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        Choose District
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
                                        Choose Session
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Session</Form.Label>
                                        <Form.Control as="select">
                                            {/*Use current session as default */}
                                                <option>select session </option>
                                                <option>2020 Academic Session</option>
                                                <option>2019 Academic Session</option>
                                               {
                                                  /*
                                                   sessionList && sessionList.length > 0 
                                                   ?
                                                   sessionList.map((sess, id)=>{
                                                       return(
                                                        <option value={sess._id}>{sess.names}</option>
                                                       ) 
                                                   }) : <option value="0">Fails to fetch session</option>
                                                   */
                                               }
                                        </Form.Control>
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>All Student Data</h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total students :  {
                                       true ? countbygender.map((data, i)=>{
                                        let total = 0;
                                        total += data.count
                                        return total
                                    }):"data not available" }
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/students">
                                      <NVD3Chart id="chart" height={200} type="pieChart" datum={countbygender} x="_id" y="count"  />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>Teacher by Type</h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total Teachers :  {
                                     true ? countbyownership.map((data, i)=>{
                                        let total = 0;
                                        total += data.count
                                        return total
                                    }):"data not available" }
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>Student by Religion</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                  <Link to="/admin/schools">
                                    <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  />
                                  </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>Student by ethnicity</h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total students :  {
                                       true ? countbygender.map((data, i)=>{
                                        let total = 0.0;
                                        let r = data.count * 100/100
                                        total += r
                                        console.log(r, total)
                                        return null
                                    }):"data not available" }
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/students">
                                      <NVD3Chart id="chart" height={200} type="pieChart" datum={countbygender} x="_id" y="count"  />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>Student by Province</h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total Schools :  {
                                     true ? countbyownership.map((data, i)=>{
                                        let total = 0;
                                        total += data.count
                                        return total
                                    }):"data not available" }
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>Student by year of Admission</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                  <Link to="/admin/schools">
                                      {/* multiplebar chart is appropriate and should be disaggregate by gender */}
                                    <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  />
                                  </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>Student by disability</h5>
                                    </Card.Title>
                                    <Card.Title>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/students">
                                      <NVD3Chart id="chart" height={200} type="pieChart" datum={countbygender} x="_id" y="count"  />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>Student by Status</h5>
                                    </Card.Title>
                                    <Card.Title>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>Student by Country</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                  <Link to="/admin/schools">
                                    <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  />
                                  </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12} xl={12}>
                            <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>Students Enrolment by Class Summary</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    <NVD3Chart id="barChart" type="multiBarChart" datum={countbyclass} x="classCode" y="count" height={380} showValues groupSpacing={0.5} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} xl={12}>
                            <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'> Teachers summary data by class</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    <NVD3Chart id="barChart" type="multiBarChart" datum={countTeachbySchool} x="eduLevel" y="count" height={380} showValues groupSpacing={0.5} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Aux>
        );
    }
}

export default SchoolData;

