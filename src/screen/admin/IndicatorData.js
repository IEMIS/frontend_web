import React from 'react';
import {Row, Col, Card,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NVD3Chart from 'react-nvd3';


//import {countStudentByGender, countStudentByClass, countSchoolByOwnership, countTeacherBySchool} from "./api"
import Aux from "../../hoc/_Aux";
import { districtL, studentIndicator } from './api';
/*
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
*/

class IndicatorData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            indicators:'',
            district:'',
            districtList:[],
            loading:false,
        }
    }

    async componentDidMount(){
        this.setState({loading:true})
      const Auth = await JSON.parse(localStorage.getItem('admin-Auth'));
      const indi = await studentIndicator(Auth.token);
      console.log({indi})
      const dist = await districtL(Auth.token)
      this.setState({indicators:indi.data, districtList:dist.data})
      this.setState({loading:false})
    }

    async componentDidUpdate(){

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
        const {indicators, districtList, district, loading} = this.state;
        console.log({indicators, district})
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
                        {/* <Col md={4} xl={4}>
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
                                                <option>select session </option>
                                                <option>2020 Academic Session</option>
                                                <option>2019 Academic Session</option>
                                               {
                                                  
                                                   sessionList && sessionList.length > 0 
                                                   ?
                                                   sessionList.map((sess, id)=>{
                                                       return(
                                                        <option value={sess._id}>{sess.names}</option>
                                                       ) 
                                                   }) : <option value="0">Fails to fetch session</option>
                                                   
                                               }
                                        </Form.Control>
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                        </Col> */}
                    </Row>
                    <Row>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>Gross Intake Ratio</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/students">
                                      {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={countbygender} x="_id" y="count"  /> */}
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>Net Intake Ratio</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  /> */}
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>Adjusted Net Intake Ratio</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                  <Link to="/admin/schools">
                                    {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  /> */}
                                  </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} xl={6}>
                        {/* ===== GER Group by education level and display by gender======*/}
                        <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>Gross Enrolment Ratio</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    {/* <NVD3Chart id="barChart" type="multiBarChart" datum={countTeachbySchool} x="eduLevel" y="count" height={380} showValues groupSpacing={0.5} /> */}
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col md={6} xl={6}>
                        {/* =====NER Group by education level and display by gender======*/}
                        <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>Net Enrolment Ratio (%)</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    {/* <NVD3Chart id="barChart" type="multiBarChart" datum={countTeachbySchool} x="eduLevel" y="count" height={380} showValues groupSpacing={0.5} /> */}
                                </Card.Body>
                            </Card>
                            </Col>
                            </Row>
                   
                    <Row>
                        <Col md={12} xl={12}>
                            {/* =====ASER group by Age and display by gender ======*/}
                            <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>Age Specific Enrolment Ratio (%)</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    <NVD3Chart id="barChart" type="multiBarChart" datum={indicators.ageSpec} x="_id" y="count" height={380} showValues groupSpacing={0.5} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>Out of School Children</h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total OOS (%) : 
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  /> */}
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                         {/* =====SLE group by Age and display by gender ======*/}
                        <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>School Life Expectancy (%)</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    {/* <NVD3Chart id="barChart" type="multiBarChart" datum={countTeachbySchool} x="eduLevel" y="count" height={380} showValues groupSpacing={0.5} /> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                        <Card className='Recent-Users'>
                            {/* =====TR group by prep, YR8 and YR 10 =======*/}
                                <Card.Header>
                                    <Card.Title as='h5'>Transition Rate (%)</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    {/* <NVD3Chart id="barChart" type="multiBarChart" datum={countTeachbySchool} x="eduLevel" y="count" height={380} showValues groupSpacing={0.5} /> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} xl={12}>
                        <Card className='Recent-Users'>
                            {/*=====RR group by Grade =======*/}
                                <Card.Header>
                                    <Card.Title as='h5'>Repetition Rate by Grade (%)</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    {/* <NVD3Chart id="barChart" type="multiBarChart" datum={countTeachbySchool} x="eduLevel" y="count" height={380} showValues groupSpacing={0.5} /> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        </Row>
                    <Row>
                    <Col md={12} xl={12}>
                        <Card className='Recent-Users'>
                            {/*=====SR group by Grade =======*/}
                                <Card.Header>
                                    <Card.Title as='h5'>Survival Rate by Grade (%)</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    {/* <NVD3Chart id="barChart" type="multiBarChart" datum={countTeachbySchool} x="eduLevel" y="count" height={380} showValues groupSpacing={0.5} /> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        </Row>
                    <Row>
                        <Col md={4} xl={4}>
                        <Card className='Recent-Users'>
                            {/*=====SR group by Grade =======*/}
                                <Card.Header>
                                    <Card.Title as='h5'>Survival Rate by Grade (%)</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    {/* <NVD3Chart id="barChart" type="multiBarChart" datum={countTeachbySchool} x="eduLevel" y="count" height={380} showValues groupSpacing={0.5} /> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                        <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>Years-Input Per Graduate</h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total YIPG (%) :  
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  /> */}
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                        <Card className='Recent-Users'>
                            {/*=====%Repeater group by education level =======*/}
                                <Card.Header>
                                    <Card.Title as='h5'>% of Repeater by Education Level by Gender</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    {/* <NVD3Chart id="barChart" type="multiBarChart" datum={countTeachbySchool} x="eduLevel" y="count" height={380} showValues groupSpacing={0.5} /> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                <Row>
                <Col md={6} xl={6}>
                        <Card className='Recent-Users'>
                            {/*=====Pupil-Teacher Ratio by Education Level Public School =======*/}
                                <Card.Header>
                                    <Card.Title as='h5'>Pupil-Teacher Ratio</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    {/* <NVD3Chart id="barChart" type="multiBarChart" datum={countTeachbySchool} x="eduLevel" y="count" height={380} showValues groupSpacing={0.5} /> */}
                                </Card.Body>
                            </Card>
                        </Col>  
                        <Col md={6} xl={6}>
                        <Card className='Recent-Users'>
                            {/*====Enrolment by public and private by Education level =======*/}
                                <Card.Header>
                                    <Card.Title as='h5'>Pupil-Teacher Ratio</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    {/* <NVD3Chart id="barChart" type="multiBarChart" datum={countTeachbySchool} x="eduLevel" y="count" height={380} showValues groupSpacing={0.5} /> */}
                                </Card.Body>
                            </Card>
                        </Col>  
                </Row>
                <Row>
                <Col md={4} xl={4}>
                        <Card>
                                <Card.Header>
                                 {/*=====Pupil-Teacher Ratio by Education Level Private Schools =======*/}
                                    <Card.Title>
                                        <h5>% of Female Teachers</h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total PFT (%) : 
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  /> */}
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                        <Card>
                                <Card.Header>
                                 {/*=====Private Enrolment by Education Level =======*/}
                                    <Card.Title>
                                        <h5>% of Private Enrolment</h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total PE (%) : 
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  /> */}
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                        <Card>
                                <Card.Header>
                                 {/*=====PERCENTAGE OF TEACHING STAFF IN PRIVATE EDUCATIONAL INSTITUTION=======*/}
                                    <Card.Title>
                                        <h5>% of Private Teachers by Education Level</h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total PE (%) : 
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  /> */}
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                </Row>
                <Row>
                <Col md={4} xl={4}>
                        <Card>
                                <Card.Header>
                                 {/*=====PERCENTAGE DISTRIBUTION OF ENROLMENT IN SECONDARY EDUCATION BY ORIENTATION=======*/}
                                    <Card.Title>
                                        <h5>% of Secondary Enrolment distribtion by Orientation </h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total PDES (%) :  
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  /> */}
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                        <Card>
                                <Card.Header>
                                 {/*=====GROSS INTAKE RATIO IN THE LAST GRADE OF PRIMARY=======*/}
                                    <Card.Title>
                                        <h5>Gross Intake Ratio in YR8 </h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total GIRLG (%) :  
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  /> */}
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                        <Card>
                                <Card.Header>
                                 {/*=====EXPECTED GROSS INTAKE RATIO IN THE LAST GRADE OF PRIMARY (EGIRLG)=======*/}
                                    <Card.Title>
                                        <h5>Expected Gross Intake Ratio in YR8 </h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total EGIRLG (%) :  
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  /> */}
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={4} xl={4}>
                        <Card>
                                <Card.Header>
                                 {/*=====GROSS PRIMARY GRADUATION RATIO (GPGR)=======*/}
                                    <Card.Title>
                                        <h5> Gross Primary Graduaion Ratio </h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total GPGR (%) :  
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  /> */}
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                        <Card>
                                <Card.Header>
                                 {/*=====EXPECTED GROSS PRIMARY GRADUATION RATIO (EGPGR)=======*/}
                                    <Card.Title>
                                        <h5>Expected Gross Primary Graduation Ratio </h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total EGPGR (%) :  
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  /> */}
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                        <Card>
                                <Card.Header>
                                 {/*=====PERCENTAGE OF NEW ENTRANTS TO PRIMARY EDUCATION WITH ECCE EXPERIENCE=======*/}
                                    <Card.Title>
                                        <h5>% ECCE Experience  </h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total EGPGR (%) :  
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  /> */}
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        </Row>
                        <Row>
                <Col md={6} xl={6}>
                        <Card className='Recent-Users'>
                            {/*=====PROMOTION RATE BY GRADE (PR) =======*/}
                                <Card.Header>
                                    <Card.Title as='h5'>Promotion Rate by Grade</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    {/* <NVD3Chart id="barChart" type="multiBarChart" datum={countTeachbySchool} x="eduLevel" y="count" height={380} showValues groupSpacing={0.5} /> */}
                                </Card.Body>
                            </Card>
                        </Col>  
                <Col md={6} xl={6}>
                        <Card className='Recent-Users'>
                            {/*=====DROPOUT RATE BY GRADE (DR) =======*/}
                                <Card.Header>
                                    <Card.Title as='h5'>Drop Out Rate by Grade</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    {/* <NVD3Chart id="barChart" type="multiBarChart" datum={countTeachbySchool} x="eduLevel" y="count" height={380} showValues groupSpacing={0.5} /> */}
                                </Card.Body>
                            </Card>
                        </Col>  
                </Row>
                <Row>
                <Col md={4} xl={4}>
                        <Card>
                                <Card.Header>
                                 {/*=====GROSS ENROLMENT RATIO IN EARLY CHILDHOOD CARE AND EDUCATION (GER/ECCE)=======*/}
                                    <Card.Title>
                                        <h5>% GER (ECCE) </h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total EGPGR (%) :  
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  /> */}
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                        <Card>
                                <Card.Header>
                                 {/*=====PERCENTAGE OF TRAINED TEACHERS Public=======*/}
                                    <Card.Title>
                                        <h5>% Trained Teacher (Public) </h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total Trained Teacher-Public (%) : 
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  /> */}
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                        <Card>
                                <Card.Header>
                                 {/*=====PERCENTAGE OF TRAINED TEACHERS Public=======*/}
                                    <Card.Title>
                                        <h5>% Trained Teacher (Private) </h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total Trained Teacher-Private (%) :  
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={countbyownership} x="_id" y="count"  /> */}
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                </Row>
            </Aux>
        );
    }
}

export default IndicatorData;