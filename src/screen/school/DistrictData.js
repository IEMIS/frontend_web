
import React from 'react';
import {Row, Col, Card,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NVD3Chart from 'react-nvd3';


import { countStudentByClass, countTeacherBySchool, studentData, schoolData, districtL, studentDataByDistrict, schoolDataByDistrict} from "./api"
import Aux from "../../hoc/_Aux";

class DistrictData extends React.Component {
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
                                      <NVD3Chart donut labelType='percent' id="chart" height={200} type="pieChart" datum={student.countStudentByGender} x="_id" y="count"  />
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
                                        Total Schools :  {school.countSchool }
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
                                        <h5>Student by Religion</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                  <Link to="/admin/schools">
                                    <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={student.countStudentByReligion} x="_id" y="count"  />
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
                                      <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={student.countStudentByEthnicity} x="_id" y="count"  />
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
                                        <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={student.countStudentByProvince} x="_id" y="count"  />
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
                                      {/**The spaces are small, I used another method */}
                                    <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={student.countStudentByYear} x="_id" y="count"  />
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
                                        <h5>School by District </h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link to="/admin/district">
                                      <NVD3Chart donut labelType='percent' id="chart" height={200} type="pieChart" datum={school.countSchoolByDistrict} x="names" y="count"  />
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
                                    <NVD3Chart donut labelType='percent' id="chart" height={200} type="pieChart" datum={school.countSchoolByEduLevel} x="_id" y="count"  />
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
                                      <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={student.countStudentBySession} x="name" y="count"  />
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
                                        <NVD3Chart donut labelType='percent' id="chart" height={200} type="pieChart" datum={student.countStudentByStatus} x="_id" y="count"  />
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
                                    <NVD3Chart donut labelType='percent'  id="chart" height={200} type="pieChart" datum={student.countStudentByCountry} x="_id" y="count"  />
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
                                    <Card.Title as='h5'>Teachers summary data by Education Level </Card.Title>
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

export default DistrictData;







/*

import React from 'react';
import {Row, Col, Card,Table, Form} from 'react-bootstrap';
import NVD3Chart from 'react-nvd3';

import Aux from "../../hoc/_Aux";
import { Link } from 'react-router-dom';


const datum = [
    {
        key: "Male",
        color: "#FE8A7D",
        values: [
            {
                "label" : "ECE" ,
                "value" : 17422
              } ,
              {
                "label" : "YR1" ,
                "value" : 15067
              } ,
              {
                "label" : "YR2" ,
                "value" : 10441
              },
              {
                "label" : "YR3" ,
                "value" : 10255
              },
              {
                "label" : "YR4" ,
                "value" : 10496
              } ,
              {
                "label" : "YR5" ,
                "value" : 10346
              } ,
              {
                "label" : "YR6" ,
                "value" : 9356
              },
              {
                "label" : "YR7" ,
                "value" : 9245
              },
              {
                "label" : "YR8" ,
                "value" : 8945
              } ,
              {
                "label" : "YR9" ,
                "value" : 8542
              },
              {
                "label" : "YR10" ,
                "value" : 7555
              },
              {
                "label" : "YR11" ,
                "value" : 6548
              } ,
              {
                "label" : "YR12" ,
                "value" : 5698
              } ,
              {
                "label" : "YR13" ,
                "value" : 3579
              },
              {
                "label" : "Voc Y1 " ,
                "value" : 512
              },
              {
                "label" : "Voc Y2 " ,
                "value" : 166
              }
        
        ]
      },
    {
    key: "Female",
    color: '#1de9b6',
    values: [
        {
            "label" : "ECE" ,
            "value" : 8227
          } ,
          {
            "label" : "YR1" ,
            "value" : 9639
          } ,
          {
            "label" : "YR2" ,
            "value" : 9712
          },
          {
            "label" : "YR3" ,
            "value" : 9602
          },
          {
            "label" : "YR4" ,
            "value" : 9553
          } ,
          {
            "label" : "YR5" ,
            "value" : 9666
          } ,
          {
            "label" : "YR6" ,
            "value" : 8634
          },
          {
            "label" : "YR7" ,
            "value" : 8529
          },
          {
            "label" : "YR8" ,
            "value" : 8771
          } ,
          {
            "label" : "YR9" ,
            "value" : 8339
          },
          {
            "label" : "YR10" ,
            "value" : 7877
          },
          {
            "label" : "YR11" ,
            "value" : 7432
          } ,
          {
            "label" : "YR12" ,
            "value" : 7156
          } ,
          {
            "label" : "YR13" ,
            "value" : 4884
          },
          {
            "label" : "Voc Y1 " ,
            "value" : 307
          },
          {
            "label" : "Voc Y2 " ,
            "value" : 56
          }
    
    ]
  },
  {
    key: "Total",
    color: "#3ebfea",
    values: [
      {
        "label" : "ECE" ,
        "value" : 17422
      } ,
      {
        "label" : "YR1" ,
        "value" : 21430
      } ,
      {
        "label" : "YR2" ,
        "value" : 23456
      },
      {
        "label" : "YR3" ,
        "value" : 20672
      },
      {
        "label" : "YR4" ,
        "value" : 19956
      } ,
      {
        "label" : "YR5" ,
        "value" : 20345
      } ,
      {
        "label" : "YR6" ,
        "value" : 17527
      },
      {
        "label" : "YR7" ,
        "value" : 17832
      },
      {
        "label" : "YR8" ,
        "value" : 17122
      } ,
      {
        "label" : "YR9" ,
        "value" : 16632
      },
      {
        "label" : "YR10" ,
        "value" : 15232
      },
      {
        "label" : "YR11" ,
        "value" : 13323
      } ,
      {
        "label" : "YR12" ,
        "value" : 12345
      } ,
      {
        "label" : "YR13" ,
        "value" : 7432
      },
      {
        "label" : "Voc Y1 " ,
        "value" : 819
      },
      {
        "label" : "Voc Y2 " ,
        "value" : 222
      }
    ]
  }
];



class DistrictData extends React.Component {
    render() {

        return (
            <Aux>
                    <Row>
                        <Col md={4} xl={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        Select District
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
                                                   
                                               }
                                        </Form.Control>
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5} xl={5}>
                            <Card>
                                <Card.Body>
                                    <Link to="/admin/students">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-6">
                                                <h6>Male </h6>
                                                <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 1,600</h3>
                                            </div>
                                            <div className="col-6">
                                                <h6>Female </h6>
                                                <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 1,420</h3>
                                            </div>
                                        {/* <div className="col-3 text-right">
                                                <p className="m-b-0"> </p>
                                            </div>*
                                        </div>
                                        <br />
                                        <div className="row d-flex align-items-center">
                                            <div className="col-9">
                                                <h6 className='mb-4'>Total number of Students</h6>
                                                <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 3,020</h3>
                                            </div>
                                        </div>
                                        <div className="progress m-t-30" style={{height: '7px'}}>
                                            <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={7} xl={7}>
                            <Card>
                                <Card.Body>
                                    <Link to="/admin/schools">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-3">
                                                <h6>Community </h6>
                                                <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="f-30 m-r-5"/> 1,600</h3>
                                            </div>
                                                <div className="col-3">
                                                    <h6>Governemnt</h6>
                                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="f-30 m-r-5"/> 1,420</h3>
                                                </div>
                                                <div className="col-3">
                                                    <h6>Faith Base</h6>
                                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className=" f-30 m-r-5"/> 1,420</h3>
                                                </div>
                                                <div className="col-3">
                                                    <h6>Privatet</h6>
                                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className=" f-30 m-r-5"/> 1,420</h3>
                                                </div>
                                        </div>
                                        <br/>
                                        <div className="col-9">
                                            <h6 className='mb-4'>Total number of Schools</h6>
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 40</h3>
                                        </div>
                                        <div className="progress m-t-30" style={{height: '7px'}}>
                                            <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} xl={9}>
                            <Row>
                                <Card className='Recent-Users'>
                                    <Card.Header>
                                        <Card.Title as='h5'>Students per class Summary</Card.Title>
                                    </Card.Header>
                                    <Card.Body className='px-0 py-2'>
                                        <NVD3Chart id="barChart" type="multiBarChart" datum={datum} x="label" y="value" height={380} showValues groupSpacing={0.5} />
                                    </Card.Body>
                                </Card>
                                <Col md={6} xl={6}>
                                    <Card className='card-social'>
                                        <Card.Header>
                                            <Card.Title as='h5'>Teaching Staff </Card.Title>
                                        </Card.Header>
                                        <Card.Body className='border-bottom'>
                                        <Table responsive striped bordered hover>
                                            <thead>
                                                <tr>
                                                <th> </th>
                                                <th>ECE</th>
                                                <th>PRY</th>
                                                <th>SEC</th>
                                                <th>TVET</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td>Male</td>
                                                <td>120</td>
                                                <td>450</td>
                                                <td>452</td>
                                                <td>15</td>
                                                </tr>
                                                <tr>
                                                <td>Female</td>
                                                <td>158</td>
                                                <td>782</td>
                                                <td>651</td>
                                                <td>80</td>
                                                </tr>
                                                <tr>
                                                <td>Total</td>
                                                <td>278</td>
                                                <td>1232</td>
                                                <td>1103</td>
                                                <td>95</td>
                                                </tr>
                                            </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} xl={6}>
                                    <Card className='card-social'>
                                        <Card.Header>
                                            <Card.Title as='h5'>Non-Teaching Staff </Card.Title>
                                        </Card.Header>
                                        <Card.Body className='border-bottom'>
                                        <Table responsive striped bordered hover>
                                            <thead>
                                                <tr>
                                                <th> </th>
                                                <th>ECE</th>
                                                <th>PRY</th>
                                                <th>SEC</th>
                                                <th>TVET</th>
                                                <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td>Male</td>
                                                <td>120</td>
                                                <td>450</td>
                                                <td>452</td>
                                                <td>15</td>
                                                <td>1037</td>
                                                </tr>
                                                <tr>
                                                <td>Female</td>
                                                <td>158</td>
                                                <td>782</td>
                                                <td>651</td>
                                                <td>80</td>
                                                <td>16040</td>
                                                </tr>
                                                <tr>
                                                <td>Total</td>
                                                <td>278</td>
                                                <td>1232</td>
                                                <td>1103</td>
                                                <td>95</td>
                                                <td>40398</td>
                                                </tr>
                                            </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12} xl={3}>
                            <Card className='card-event'>
                                <Card.Body>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col">
                                            <h5 className="m-0">Upcoming Event</h5>
                                        </div>
                                        <div className="col-auto">
                                            <label className="label theme-bg2 text-white f-14 f-w-400 float-right">34%</label>
                                        </div>
                                    </div>
                                    <h2 className="mt-2 f-w-300">Data<sub className="text-muted f-14">Management</sub></h2>
                                    <h6 className="text-muted mt-3 mb-0">You can participate in event </h6>
                                    <i className="fa fa-angellist text-c-purple f-50"/>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body className='border-bottom'>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-auto">
                                            <i className="feather icon-zap f-30 text-c-green"/>
                                        </div>
                                        <div className="col">
                                            <h3 className="f-w-300">20</h3>
                                            <span className="d-block text-uppercase">Student transfer Request</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                    </Row>

             
            </Aux>
        );
    }
}
*/

