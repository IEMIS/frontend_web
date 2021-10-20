import React from 'react';
import {Row, Col, Card,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NVD3Chart from 'react-nvd3';


//import {countStudentByGender, countStudentByClass, countSchoolByOwnership, countTeacherBySchool} from "./api"
import Aux from "../../hoc/_Aux";
import { studentIndicator } from './api';
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
            loading:false,
        }
    }

    async componentDidMount(){
        this.setState({loading:true})
        const Auth = await JSON.parse(localStorage.getItem('schools-Auth'));
      const indi = await studentIndicator(Auth.token);
    //   console.log({indi})
    //   const dist = await districtL(Auth.token)
      this.setState({indicators:indi.data})
      this.setState({loading:false})
    }

    async componentDidUpdate(){

    }

    async UNSAFE_componentWillUnmount(){

    }

   

    

    render() {
        const {indicators,loading} = this.state;
        //console.log({indicators})
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
                                        <h5>Gross Intake </h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total GI  : 
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/students">
                                       <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={indicators.grossInTake} x="_id" y="count"  /> 
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>Net Intake </h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total NI  : 
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/schools">
                                        { <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={indicators.netInTake} x="_id" y="count"  /> }
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5>Adjusted Net Intake </h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total ANI  : 
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                  <Link to="/schools">
                                     <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={indicators.aNetIntake} x="_id" y="count"  /> 
                                  </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} xl={4}>
                        {/* ===== GER Group by education level and display by gender======*/}
                        <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>Gross Enrolment </Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={indicators.grossEnroll} x="_id" y="count"  /> 
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col md={4} xl={4}>
                        {/* =====Transition======*/}
                        <Card className='Recent-Users'>
                                <Card.Header>
                                <Card.Title as='h5'>% of Graduate by Gender</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={indicators.transition} x="_id" y="count"  />   
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col md={4} xl={4}>
                        <Card className='Recent-Users'>
                            {/*=====PROMOTION RATE BY GRADE (PR) =======*/}
                                <Card.Header>
                                <Card.Title as='h5'>Promotion by Grade</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                {<NVD3Chart id="barChart" type="multiBarChart" datum={indicators.PromoR} x="classCode" y="count" height={380} showValues groupSpacing={0.5} />}
                                </Card.Body>
                            </Card>
                        </Col>  
                            </Row>
                   
                    <Row>
                        <Col md={12} xl={12}>
                            {/* =====ASER group by Age and display by gender ======*/}
                            <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>Age Specific Enrolment </Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    <NVD3Chart labelType='percent' id="barChart" type="multiBarChart" datum={indicators.ageSpec} x="_id" y="count" height={380} showValues groupSpacing={0.5} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} xl={12}>
                        <Card className='Recent-Users'>
                            {/*=====RR group by Grade =======*/}
                                <Card.Header>
                                    <Card.Title as='h5'>Repetition by Grade</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                     <NVD3Chart labelType='percent' id="barChart" type="multiBarChart" datum={indicators.repetition} x="classCode" y="count" height={380} showValues groupSpacing={0.5} />
                                </Card.Body>
                            </Card>
                        </Col>
                        </Row>
               <Row>
                <Col md={4} xl={4}>
                        <Card className='Recent-Users'>
                            {/*=====DROPOUT RATE BY GRADE (DR) =======*/}
                                <Card.Header>
                                    <Card.Title as='h5'>Drop Out</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                 <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={indicators.DropoutR} x="_id" y="count"  />
                                </Card.Body>
                            </Card>
                        </Col> 
                        <Col md={4} xl={4}>
                        {/* =====Percentage of teachers======*/}
                        <Card className='Recent-Users'>
                                <Card.Header>
                                <Card.Title as='h5'>Percentage of Teachers</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={indicators.PercenT} x="_id" y="count"  />   
                                </Card.Body>
                            </Card>
                            </Col> 
                        <Col md={4} xl={4}>
                        <Card className='Recent-Users'>
                            {/*=====Trained Teachers =======*/}
                                <Card.Header>
                                    <Card.Title as='h5'>Percentage of Trained Teachers</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                 <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={indicators.TTrained} x="_id" y="count"  />
                                </Card.Body>
                            </Card>
                        </Col>  
                </Row>
            </Aux>
        );
    }
}

export default IndicatorData;