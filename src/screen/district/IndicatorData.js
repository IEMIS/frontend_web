import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NVD3Chart from 'react-nvd3';


//import {countStudentByGender, countStudentByClass, countSchoolByOwnership, countTeacherBySchool} from "./api"
import Aux from "../../hoc/_Aux";
import {studentIndicator} from './api';
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
            //district:'',
            //districtList:[],
            loading:false,
        }
    }

    async componentDidMount(){
        this.setState({loading:true})
      const Auth = await JSON.parse(localStorage.getItem('district-Auth'));
      const indi = await studentIndicator(Auth.token);
      console.log({indi})
    //   const dist = await districtL(Auth.token)
      this.setState({indicators:indi.data})
      //this.setState({loading:false})
    }

    async componentDidUpdate(){

    }

    async UNSAFE_componentWillUnmount(){

    }

    render() {
        const {indicators, loading} = this.state;
        console.log({indicators})
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
                                    <Link to="/district/students">
                                      { <NVD3Chart id="chart" height={200} type="pieChart" datum={indicators.grossInTake} x="_id" y="count"  /> }
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
                                    <Link to="/admin/schools">
                                        { <NVD3Chart id="chart" height={200} type="pieChart" datum={indicators.netInTake} x="_id" y="count"  /> }
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
                                  <Link to="/admin/schools">
                                     <NVD3Chart id="chart" height={200} type="pieChart" datum={indicators.aNetIntake} x="_id" y="count"  /> 
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
                                    <Card.Title as='h5'>Gross Enrolment </Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                     <NVD3Chart labelType='percent' id="barChart" type="multiBarChart" datum={indicators.grossEnroll} x="_id" y="count" height={380} showValues groupSpacing={0.5} />
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col md={6} xl={6}>
                        {/* =====NER Group by education level and display by gender======*/}
                        <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>Net Enrolment </Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                     <NVD3Chart labelType='percent' id="barChart" type="multiBarChart" datum={indicators.netEnroll} x="_id" y="count" height={380} showValues groupSpacing={0.5} /> 
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
                        <Col md={4} xl={4}>
                            {/* =====SLE ECE ======*/}
                            <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>School Life Expectancy (ECE) </Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    <NVD3Chart labelType='percent' id="barChart" type="multiBarChart" datum={indicators.SLEE} x="_id" y="count" height={380} showValues groupSpacing={0.5} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xl={4}>
                            {/* =====SLE Primary======*/}
                            <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>School Life Expectancy (Primary) </Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    <NVD3Chart labelType='percent' id="barChart" type="multiBarChart" datum={indicators.SLEP} x="_id" y="count" height={380} showValues groupSpacing={0.5} />
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col md={4} xl={4}>
                            {/* =====SLE secondary ======*/}
                            <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>School Life Expectancy (Secondary) </Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    <NVD3Chart labelType='percent' id="barChart" type="multiBarChart" datum={indicators.SLES} x="_id" y="count" height={380} showValues groupSpacing={0.5} />
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
                                        Total OOS  : 
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        <NVD3Chart id="chart" height={200} type="pieChart" datum={indicators.outOfSchool} x="_id" y="count"  />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={8} xl={8}>
                        <Card className='Recent-Users'>
                            {/* =====TR group by prep, YR8 and YR 10 =======*/}
                                <Card.Header>
                                    <Card.Title as='h5'>Transition</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                     <NVD3Chart labelType='percent' id="barChart" type="multiBarChart" datum={indicators.transition} x="_id" y="count" height={380} showValues groupSpacing={0.5} />
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
                    <Col md={12} xl={12}>
                        <Card className='Recent-Users'>
                            {/*=====SR group by Grade =======*/}
                                <Card.Header>
                                    <Card.Title as='h5'>Survival by Grade (%)</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    <NVD3Chart labelType='percent' id="barChart" type="multiBarChart" datum={indicators.survival} x="classCode" y="count" height={380} showValues groupSpacing={0.5} />
                                </Card.Body>
                            </Card>
                        </Col>
                        </Row>
                    <Row>
                        <Col md={6} xl={6}>
                        <Card className='Recent-Users'>
                            {/*=====SR group by Grade =======*/}
                                <Card.Header>
                                    <Card.Title as='h5'>Coefficient of Efficiency </Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    {<NVD3Chart labelType='percent' id="barChart" type="multiBarChart" datum={indicators.coe} x="_id" y="count" height={380} showValues groupSpacing={0.5} /> }
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={6}>
                        <Card>
                                <Card.Header>
                                <Card.Title as='h5'>Years-Input Per Graduate</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                        { <NVD3Chart labelType='percent' id="barChart" type="multiBarChart" datum={indicators.YIP} x="_id" y="count" height={380} showValues groupSpacing={0.5} /> }
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                <Row>
                <Col md={12} xl={12}>
                        <Card className='Recent-Users'>
                            {/*=====%Repeater group by education level =======*/}
                                <Card.Header>
                                    <Card.Title as='h5'>Repeater by Education Level</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    { <NVD3Chart id="barChart" type="multiBarChart" datum={indicators.repeaters} x="classCode" y="count" height={380} showValues groupSpacing={0.5} /> }
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
                                    { <NVD3Chart id="barChart" type="multiBarChart" datum={indicators.Pupils} x="_id" y="count" height={380} showValues groupSpacing={0.5} /> }
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
                                    { <NVD3Chart id="barChart" type="multiBarChart" datum={indicators.Tea} x="_id" y="count" height={380} showValues groupSpacing={0.5} /> }
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
                                        <h5>% of Teachers</h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total PFT (%) : 
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                    <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={indicators.PercenT} x="_id" y="count"  />
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
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    { <NVD3Chart id="barChart" type="multiBarChart" datum={indicators.Enroll} x="_id" y="count" height={380} showValues groupSpacing={0.5} /> }
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
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    { <NVD3Chart id="barChart" type="multiBarChart" datum={indicators.TP} x="_id" y="count" height={380} showValues groupSpacing={0.5} /> }
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
                                    <Card.Body className='px-0 py-2'>
                                    { <NVD3Chart id="barChart" type="multiBarChart" datum={indicators.SED} x="_id" y="count" height={380} showValues groupSpacing={0.5} /> }
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={SECONDARYORIENT} x="_id" y="count"  /> */}
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
                                    <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={indicators.grossInTakeLG} x="_id" y="count"  />
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
                                    <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={indicators.EgrossInTakeLG} x="_id" y="count"  />
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={EgrossInTakeLG} x="_id" y="count"  /> */}
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
                                        <h5> Gross Primary Graduaion</h5>
                                    </Card.Title>
                                    <Card.Title>
                                        Total GPGR (%) : 
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                    <NVD3Chart id="chart" height={200} type="pieChart" datum={indicators.grossPGR} x="_id" y="count"  />
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={grossInTakeLGR} x="_id" y="count"  /> */}
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
                                        Total EGPG :  
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                    <NVD3Chart id="chart" height={200} type="pieChart" datum={indicators.EGPGR} x="_id" y="count"/>
                                        {/* <NVD3Chart id="chart" height={200} type="pieChart" datum={EGPGR} x="_id" y="count"  /> */}
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
                                    <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={indicators.ECEE} x="_id" y="count"  />
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
                                    <Card.Title as='h5'>Promotion by Grade</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    {<NVD3Chart id="barChart" type="multiBarChart" datum={indicators.PromoR} x="classCode" y="count" height={380} showValues groupSpacing={0.5} />}
                                </Card.Body>
                            </Card>
                        </Col>  
                <Col md={6} xl={6}>
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
                                 <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={indicators.GERECE} x="_id" y="count"  />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={8} xl={8}>
                        <Card>
                                <Card.Header>
                                 {/*=====PERCENTAGE OF TRAINED TEACHERS Public=======*/}
                                    <Card.Title>
                                        <h5>% Trained Teacher</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                    {<NVD3Chart id="barChart" type="multiBarChart" datum={indicators.TQP} x="_id" y="count" height={380} showValues groupSpacing={0.5} />}
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