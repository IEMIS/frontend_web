import React from 'react';
import {Row, Col, Card,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NVD3Chart from 'react-nvd3';

import { countStudentByClass, countTeacherBySchool, studentData, schoolData} from "./api"
import Aux from "../../hoc/_Aux";


class Dashboard extends React.Component {
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
            school:'',
            student:'',
            loading:false,
        }
    }

    async componentDidMount(){
        this.setState({loading:true})
      const Auth = await JSON.parse(localStorage.getItem('admin-Auth'));
      //const countbygen = await countStudentByGender(Auth.token)
      //const countbyowner = await countSchoolByOwnership(Auth.token)
      const countbyclass = await countStudentByClass(Auth.token)
      const countTeachbySchoolResp = await countTeacherBySchool(Auth.token)
      const schoolDa = await schoolData(Auth.token);
      const studentDa = await studentData(Auth.token);
      this.setState({student:studentDa.data, school:schoolDa.data, countbyclass:countbyclass.data, countTeachbySchool:countTeachbySchoolResp.data}) 
      this.setState({loading:false}) 
    }

    async componentDidUpdate(){

    }

    async UNSAFE_componentWillUnmount(){

    }

    

    render() {
        const {countbyclass,countTeachbySchool,student, school, loading} = this.state;
       
        if(loading){
            return <h1>Loading ....</h1>
        }
        return (
            <Aux>
                {/*<Row>*/}
                    <Row>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>All Student Data</h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total students : {student.countStudent} 
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/students">
                                      <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={student.countStudentByGender} x="_id" y="count"  />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>School by Ownership</h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total Schools :  {school.countSchool}
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={school.countSchoolByownership} x="_id" y="count"  />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>Total Number of Districts</h5>
                                    </Card.Title>
                                </Card.Header>
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
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>School by District</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/district">
                                      <NVD3Chart id="barChartyx" height={200} type="pieChart" datum={school.countSchoolByDistrict} x="names" y="count" donut labelType='percent' />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>School by Category</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={school.countSchoolByCat} x="_id" y="count"  />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>School by Education Level</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                  <Link to="/admin/schools">
                                    <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={school.countSchoolByEduLevel} x="_id" y="count" showValues groupSpacing={0.5}   />
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
                                    <Card.Title as='h5'> Teachers summary data</Card.Title>
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

export default Dashboard;