import React from 'react';
import {Row, Col, Card,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NVD3Chart from 'react-nvd3';

import { countStudentByClass, countTeacherBySchoolAll, studentData, teacherData, schoolData} from "./api"
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
            disability:[],
            countTeachbySchool:[],
            school:'',
            student:'',
            teacher:'',
            loading:false,
        }
    }

    async componentDidMount(){
        this.setState({loading:true})
      const Auth = await JSON.parse(localStorage.getItem('admin-Auth'));
      //const countbygen = await countStudentByGender(Auth.token)
      //const countbyowner = await countSchoolByOwnership(Auth.token)
      const countbyclass = await countStudentByClass(Auth.token)
      //const countbydisable = await countStudentByClass(Auth.token)
      const countTeachbySchoolResp = await countTeacherBySchoolAll(Auth.token)
      const schoolDa = await schoolData(Auth.token);
      const studentDa = await studentData(Auth.token);
      const teacherDa = await teacherData(Auth.token);
      this.setState({student:studentDa.data, school:schoolDa.data, countbyclass:countbyclass.data, countTeachbySchool:countTeachbySchoolResp.data, teacher:teacherDa.data}) 
      this.setState({loading:false}) 
    }

    async componentDidUpdate(){

    }

    async UNSAFE_componentWillUnmount(){

    }

    

    render() {
        const {countbyclass,countTeachbySchool,student, teacher, school, loading} = this.state;
       
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
                    </Row>
                    <Row>
                        <Col md={8} xl={8}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>School by District</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/districts/read">
                                      <NVD3Chart id="barChartyx" height={300} type="pieChart" datum={school.countSchoolByDistrict} x="names" y="count" donut labelType='percent' />
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
                                    <NVD3Chart donut labelType='percent'  id="chart" height={300} type="pieChart" datum={school.countSchoolByEduLevel} x="_id" y="count" showValues groupSpacing={0.5}   />
                                  </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} xl={6}>
                            <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>Students Enrolment by Class Summary</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    <NVD3Chart id="barChart" type="multiBarChart" datum={student.learner} x="_id" y="count" height={380} showValues groupSpacing={0.3} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={6}>
                            <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>Students by Disability</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                {/*Please include disability here by male and female by class */}
                                    <NVD3Chart id="barChart" type="multiBarChart" datum={student.disability} x="_id" y="count" height={380} showValues groupSpacing={0.3} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} xl={4}>
                            <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'> Teachers summary by Education Level</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    <NVD3Chart id="barChart" type="multiBarChart" datum={countTeachbySchool} x="_id" y="count" height={380} showValues groupSpacing={0.3} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                        <Card>
                        <Card.Header>
                         <Card.Title>
                             <h5>Teachers Summary by Responsibility</h5>
                                    </Card.Title>
                                    <Card.Title>
                                    Total Teachers : {teacher.countTeacher} 
                                    </Card.Title>
                                </Card.Header>  
                                <Card.Body>
                                    <Link to="/admin/teachers">
                                      <NVD3Chart donut labelType='percent'  id="chart" height={330} type="pieChart" datum={teacher.countTeacherByTypeOfstaff} x="_id" y="count"  />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                        <Card>
                        <Card.Header>
                                    <Card.Title>
                                        <h5>Teacher by Dedication</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/teachers">
                                      <NVD3Chart donut labelType='percent'  id="chart" height={350} type="pieChart" datum={teacher. countTeacherByType} x="_id" y="count"  />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Aux>
        );
    }
}

export default Dashboard;