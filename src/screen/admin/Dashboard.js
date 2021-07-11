import React from 'react';
import {Row, Col, Card,} from 'react-bootstrap';
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
        ///console.log({countbygender, countbyownership, countbyclass, countTeachbySchool})
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
                                        <h5>School by Ownership</h5>
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
                        <Col md={12} xl={12}>
                            <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>Students Per Class Summary</Card.Title>
                                </Card.Header>
                                <Card.Body className='px-0 py-2'>
                                    <NVD3Chart id="barChart" type="multiBarChart" datum={countbyclass} x="names" y="count" height={380} showValues groupSpacing={0.5} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} xl={12}>
                            <Card className='Recent-Users'>
                                <Card.Header>
                                    <Card.Title as='h5'>The summary data of the Teachers</Card.Title>
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