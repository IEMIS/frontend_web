
import React from 'react';
import {Row, Col, Card,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NVD3Chart from 'react-nvd3';


import { countStudentByClass, countTeacherBySchool, studentData, 
    // schoolData, 
    // studentDataByDistrict, schoolDataByDistrict,
    districtL,  schoolByDistrict, studentDataBySchool, schoolDetails} from "./api"
import Aux from "../../hoc/_Aux";

class SchoolData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // countbygender:[],
            // countbydistrict:[],
            // countbyschool : [],
            // countbyeduLevel :[],
            // countbyownership:[],
            // countbytype: [],
            // countbycat : [],
            countbyclass:[],
            countTeachbySchool:[],
            schools:{},
            students:'',
            school:'',
            student:'',
            district:"",
            districtList:[],
            schoolList:[],
            loading:false,
        }
    }

    async componentDidMount(){
        // this.setState({loading:true})
        // const Auth = await JSON.parse(localStorage.getItem('admin-Auth'));
        // const countbyclass = await countStudentByClass(Auth.token)
        // const countTeachbySchoolResp = await countTeacherBySchool(Auth.token)
        // const distirct = await districtL(Auth.token)
        // const studentDa = await studentData(Auth.token);
        // const schoolDa = await schoolData(Auth.token); 
        // this.setState({countbyclass:countbyclass.data, countTeachbySchool:countTeachbySchoolResp.data, districtList:distirct.data, students:studentDa.data,schools:schoolDa.data,  })
        // this.setState({loading:false}) 

        this.setState({loading:true})
        const Auth = await JSON.parse(localStorage.getItem('admin-Auth'));
        // const school = "60ef9ddf0bd7840036e5bd9f"
        const countbyclass = await countStudentByClass(Auth.token)
        const countTeachbySchoolResp = await countTeacherBySchool(Auth.token)
        const distirct = await districtL(Auth.token)
        const studentDa = await studentData(Auth.token);
        // const schoolDe = await schoolDetails(school, Auth.token)
        this.setState({countbyclass:countbyclass.data, countTeachbySchool:countTeachbySchoolResp.data, districtList:distirct.data, students:studentDa.data })
        this.setState({loading:false}) 
    }

    async componentDidUpdate(prevProps, prevState, snapshot){
        const {district,school} = this.state;
        const Auth = await JSON.parse(localStorage.getItem('admin-Auth'));
        const user = {district,school};
        if(prevState.district !== district){
            const scho = await schoolByDistrict(user, Auth.token)
            this.setState({schoolList:scho.data})
        }

        if(prevState.school !== school){
            this.setState({loading:true})
            const studentDa = await studentDataBySchool(user, Auth.token);
            const schoolDe = await schoolDetails(school, Auth.token)
            this.setState({students:studentDa.data, schools:schoolDe.data[0], }) 
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
        const { countbyclass,countTeachbySchool,school,student,schools,students, districtList,schoolList, district, loading} = this.state;
        console.log({district, school,student,schools,students,})
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
                                        Choose School
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>School</Form.Label>
                                        <Form.Control as="select" onChange={this.handleChange("school")} value={school} >
                                                <option>Select School</option>
                                                {
                                                   schoolList && schoolList.length > 0 
                                                   ?
                                                   schoolList.map((dist, id)=>{
                                                       return(
                                                        <option value={dist._id}>{dist.names}</option>
                                                       ) 
                                                   }) : <option value="0">Fails to fetch district</option>
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
                                            School category : {schools.schoolCat} <br />
                                            School ownership : {schools.ownership} <br />
                                            Established : {schools.estabYear} <br />
                                            <hr />
                                            School Contact  <br />
                                            Phone : {schools.contact[0].phone} <br />
                                            Fax : {schools.contact[0].fax} <br />
                                            Address : {schools.contact[0].address} <br />
                                            Province : {schools.contact[0].province} <br />
                                            <hr />
                                            District Details <br />
                                            Name: {schools.fromDistrict[0].names} <br />
                                            Address : {schools.fromDistrict[0].address} <br />
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
                                    <Link to="/admin/students">
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
                                  <Link to="/admin/schools">
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
                                        <h5>Student by ethnicity</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/students">
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
                                    <Link to="/admin/schools">
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
                                  <Link to="/admin/schools">
                                      {/* multiplebar chart is appropriate and should be disaggregate by gender */}
                                    <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={students.countStudentByYear} x="_id" y="count"  />
                                  </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>School by District</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/district">
                                      <NVD3Chart id="chart" height={200} type="pieChart" datum={schools.countSchoolByDistrict} x="names" y="count"  />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>School Category</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        <NVD3Chart id="chart" height={200} type="pieChart" datum={schools.countSchoolByCat} x="_id" y="count"  />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>School Education Level</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                  <Link to="/admin/schools">
                                    <NVD3Chart id="chart" height={200} type="pieChart" datum={schools.countSchoolByEduLevel} x="_id" y="count"  />
                                  </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row> */}
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
                                    <Link to="/admin/students">
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
                                    <Link to="/admin/schools">
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
                                  <Link to="/admin/schools">
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
                                    <NVD3Chart donut labelType='percent' id="barChart" type="multiBarChart" datum={countTeachbySchool} x="eduLevel" y="count" height={380} showValues groupSpacing={0.5} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Aux>
        );
    }
}

export default SchoolData;
