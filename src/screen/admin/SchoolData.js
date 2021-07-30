
import React from 'react';
import {Row, Col, Card,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NVD3Chart from 'react-nvd3';


import { countStudentByClass, countTeacherBySchool, studentData, schoolData, districtL, studentDataByDistrict, schoolDataByDistrict} from "./api"
import Aux from "../../hoc/_Aux";

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
            school:'',
            student:'',
            district:"",
            districtList:[],
            loading:false,
        }
    }

    async componentDidMount(){
        this.setState({loading:true})
        const Auth = await JSON.parse(localStorage.getItem('admin-Auth'));
        const countbyclass = await countStudentByClass(Auth.token)
        const countTeachbySchoolResp = await countTeacherBySchool(Auth.token)
        const studentDa = await studentData(Auth.token);
        const schoolDa = await schoolData(Auth.token);
        const distirct = await districtL(Auth.token)
        this.setState({student:studentDa.data, school:schoolDa.data, countbyclass:countbyclass.data, countTeachbySchool:countTeachbySchoolResp.data, districtList:distirct.data }) 
        this.setState({loading:false}) 
    }

    async componentDidUpdate(prevProps, prevState, snapshot){
        const {district} = this.state;
        const user = {district};
        if(prevState.district !== district){
            this.setState({loading:true})
            const Auth = await JSON.parse(localStorage.getItem('admin-Auth'));
            const countbyclass = await countStudentByClass(Auth.token)
            const countTeachbySchoolResp = await countTeacherBySchool(Auth.token)
            const studentDa = await studentDataByDistrict(user, Auth.token);
            const schoolDa = await schoolDataByDistrict(user, Auth.token);
            //console.log({schoolDa})
            //const dist = await districtL(Auth.token); districtList:distirct.data
            this.setState({student:studentDa.data, school:schoolDa.data, countbyclass:countbyclass.data, countTeachbySchool:countTeachbySchoolResp.data,  }) 
            this.setState({loading:false}) 
        }

    }

    async UNSAFE_componentWillUnmount(){

    }

    handleChange = name=>event=>{
        this.setState({[name]:event.target.value})
    }

    

    render() {
        const { countbyclass,countTeachbySchool,school,student, districtList, district, loading} = this.state;
        //console.log({district})
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
                                        Choose District
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>District</Form.Label>
                                        <Form.Control as="select" onChange={this.handleChange("district")} value={district} >
                                                <option>Select district</option>
                                               {
                                                  
                                                   districtList && districtList.length > 0 
                                                   ?
                                                   districtList.map((dist, id)=>{
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
                        <Col md={4} xl={4}>
                            {/*<Card>
                                <Card.Header>
                                    <Card.Title>
                                        Choose Session
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Session</Form.Label>
                                        <Form.Control as="select">
                                                <option>select session </option>
                                                <option>2020 Academic Session</option>
                                                <option>2019 Academic Session</option>
                                               {
                                                
                                                //    sessionList && sessionList.length > 0 
                                                //    ?
                                                //    sessionList.map((sess, id)=>{
                                                //        return(
                                                //         <option value={sess._id}>{sess.names}</option>
                                                //        ) 
                                                //    }) : <option value="0">Fails to fetch session</option>
                                                 
                                               }
                                        </Form.Control>
                                    </Form.Group>
                                </Card.Body>
                            </Card>*/}
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
                                        Total students : {student.countStudent}
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/students">
                                      <NVD3Chart id="chart" height={200} type="pieChart" datum={student.countStudentByGender} x="_id" y="count"  />
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
// <<<<<<< dev
                                        Total Schools :  {school.countSchool }
// =======
//                                         Total Teachers :  {
//                                      true ? countbyownership.map((data, i)=>{
//                                         let total = 0;
//                                         total += data.count
//                                         return total
//                                     }):"data not available" }
// >>>>>>> master
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        <NVD3Chart id="chart" height={200} type="pieChart" datum={school.countSchoolByownership} x="_id" y="count"  />
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
                                    <NVD3Chart id="chart" height={200} type="pieChart" datum={student.countStudentByReligion} x="_id" y="count"  />
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
                                      <NVD3Chart id="chart" height={200} type="pieChart" datum={student.countStudentByEthnicity} x="_id" y="count"  />
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
                                        <NVD3Chart id="chart" height={200} type="pieChart" datum={student.countStudentByProvince} x="_id" y="count"  />
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
                                    <NVD3Chart id="chart" height={200} type="pieChart" datum={student.countStudentByYear} x="_id" y="count"  />
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
                                      <NVD3Chart id="chart" height={200} type="pieChart" datum={school.countSchoolByDistrict} x="names" y="count"  />
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
                                        <NVD3Chart id="chart" height={200} type="pieChart" datum={school.countSchoolByCat} x="_id" y="count"  />
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
                                    <NVD3Chart id="chart" height={200} type="pieChart" datum={school.countSchoolByEduLevel} x="_id" y="count"  />
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
                                        <h5>Student by Session</h5>
                                    </Card.Title>
                                    <Card.Title>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/students">
                                      <NVD3Chart id="chart" height={200} type="pieChart" datum={student.countStudentBySession} x="name" y="count"  />
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
                                        <NVD3Chart id="chart" height={200} type="pieChart" datum={student.countStudentByStatus} x="_id" y="count"  />
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
                                    <NVD3Chart id="chart" height={200} type="pieChart" datum={student.countStudentByCountry} x="_id" y="count"  />
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
