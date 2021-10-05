
import React from 'react';
import {Row, Col, Card,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NVD3Chart from 'react-nvd3';
import moment from 'moment'; 

import {  studentDataBySchool, schoolDetails, readsSchool, countTeacherInSchool, countStudentByClassInSchool} from "./api"
import Aux from "../../hoc/_Aux";
import { isAuthenticated } from '../Auth/school/api';

class SchoolData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            countbyclass:[],
            countTeachbySchool:[],
            schools:{},
            students:'',
            school:'',
            student:'',
            // district:"",
            // districtList:[],
            // schoolList:[],
            loading:false,
        }
    }

    async componentDidMount(){
        this.setState({loading:true})
        const Auth = await isAuthenticated()
        // const scho = await readsSchool(Auth.district._id,Auth.token);
        // this.setState({schoolList:scho.data})
        this.setState({loading:false}) 
    }

    async componentDidUpdate(prevProps, prevState, snapshot){
        const {school} = this.state;
        const Auth = await isAuthenticated()
        if(prevState.school !== school){
            this.setState({loading:true})
            const studentDa = await studentDataBySchool(school, Auth.token)
            const schoolDe = await schoolDetails(school, Auth.token)
            const teacher = await countTeacherInSchool(Auth.district._id,school, Auth.token)
            const studentClass = await countStudentByClassInSchool(school, Auth.token)
            this.setState({students:studentDa.data, schools:schoolDe.data[0], countTeachbySchool:teacher.data,countbyclass:studentClass.data }) 
            this.setState({loading:false}) 
        }
    }

    async UNSAFE_componentWillUnmount(){

    }

    handleChange = name=>event=>{
        this.setState({[name]:event.target.value})
    }

    isempty = (data) =>{
        return Object.keys(data).length === 0 && data.constructor === Object
    }

    

    render() {
        const { countbyclass,countTeachbySchool,school,schools,students,schoolList,loading} = this.state;
        console.log({countTeachbySchool})
        if(loading){
            return <h1>Loading ....</h1>
        }
        return (
            <Aux>
                    <Row>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>School Details </h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    {
                                        this.isempty(schools) ? "" : 
                                        (
                                            <>
                                            School Name : {schools.names} <br />
                                            School Level : {schools.eduLevel} <br />
                                            School Type  : {schools.schoolType} <br />
                                            School Category : {schools.schoolCat} <br />
                                            School Ownership : {schools.ownership} <br />
                                            Established : {moment(schools.estabYear,"YYYY-MM-DDTHH:mm:ss.SSSSZ").format('LL')} <br />
                                            <hr />
                                            School Contact  <br />
                                            Phone : {schools.contact[0].phone} <br />
                                            Fax : {schools.contact[0].fax} <br />
                                            Address : {schools.contact[0].address} <br />
                                            Locality : {schools.contact[0].province} <br />
                                            </>
                                        )
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>Student Data</h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total students : {students.countStudent}
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/">
                                      <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={students.countStudentByGender} x="_id" y="count"  />
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
                                  <Link to="/">
                                    <NVD3Chart donut labelType='percent' id="chart" height={200} type="pieChart" datum={students.countStudentByReligion} x="_id" y="count"  />
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
                                        <h5>Student by Ethnicity</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/">
                                      <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={students.countStudentByEthnicity} x="_id" y="count"  />
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
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/">
                                        <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={students.countStudentByProvince} x="_id" y="count"  />
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
                                  <Link to="/">
                                      {/* multiplebar chart is appropriate and should be disaggregate by gender */}
                                    <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={students.countStudentByYear} x="_id" y="count"  />
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
                                        <h5>Students by Session</h5>
                                    </Card.Title>
                                    <Card.Title>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/">
                                      <NVD3Chart donut labelType='percent' id="chart" height={200} type="pieChart" datum={students.countStudentBySession} x="name" y="count"  />
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
                                    <Link to="/">
                                        <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={students.countStudentByStatus} x="_id" y="count"  />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>Student by Nationality</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                  <Link to="/">
                                    <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={students.countStudentByCountry} x="_id" y="count"  />
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
                                    <NVD3Chart donut labelType='percent' id="barChart" type="multiBarChart" datum={countbyclass} x="classCode" y="count" height={380} showValues groupSpacing={0.5} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} xl={12}>
                            <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>Students by Disability</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                {/*Please include disability here by male and female by class */}
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
                                    <NVD3Chart donut labelType='percent' id="barChart" type="multiBarChart" datum={countTeachbySchool} x="classCode" y="count" height={380} showValues groupSpacing={0.5} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Aux>
        );
    }
}

export default SchoolData;
