import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NVD3Chart from 'react-nvd3';


import {countByGender, countByClass, countOwnership,} from "./api"
import Aux from "../../hoc/_Aux";
/*
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
*/

/*
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
        }
    }

    async componentDidMount(){
      const Auth = await JSON.parse(localStorage.getItem('admin-Auth'));
      //console.log({Auth});
      const countbygen = await countByGender(Auth.token)
      const countbyowner = await countOwnership(Auth.token)
      const countbyclass = await countByClass(Auth.token)
      //console.log({look:countbyowner, countbyclass})
      this.setState({countbygender:countbygen.data, countbyownership:countbyowner.data, countbyclass:countbyclass.data})
        
    }

    async componentDidUpdate(){

    }

    async UNSAFE_componentWillUnmount(){

    }

    

    render() {
        const {countbygender, countbyclass,countbyownership,} = this.state;
        console.log({countbygender, countbyownership, countbyclass})
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
                                        {/*
                                        <div className="row d-flex align-items-center">
                                            <div className="col-6">
                                                <h6>Male </h6>
                                                <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 121,420</h3>
                                            </div>
                                            <div className="col-6">
                                                <h6>Female </h6>
                                                <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 118,354</h3>
                                            </div>
                                        {/* <div className="col-3 text-right">
                                                <p className="m-b-0"> </p>
                                            </div>*
                                        </div>
                                        <br />
                                        <div className="row d-flex align-items-center">
                                            <div className="col-9">
                                                <h6 className='mb-4'>Total number of Students</h6>
                                                <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 239,774</h3>
                                            </div>
                                        </div>
                                        <div className="progress m-t-30" style={{height: '7px'}}>
                                            <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                            */}
                                    
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
                                        {/*
                                        <div className="row d-flex align-items-center">
                                                <div className="col-3">
                                                    <h6>Governemnt</h6>
                                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="f-30 m-r-5"/> 300</h3>
                                                </div>
                                                <div className="col-3">
                                                    <h6>Non-Government</h6>
                                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className=" f-30 m-r-5"/> 1,384</h3>
                                                </div>
                                                <div className="col-3">
                                                    <h6>Private</h6>
                                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className=" f-30 m-r-5"/> 120</h3>
                                                </div>
                                        </div>
                                        <br/>
                                        <div className="col-9">
                                            <h6 className='mb-4'>Total number of Schools</h6>
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 1,784</h3>
                                        </div>
                                        <div className="progress m-t-30" style={{height: '7px'}}>
                                            <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                        */}
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
               {/* </Row>  */}
            </Aux>
        );
    }
}

export default Dashboard;