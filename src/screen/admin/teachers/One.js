import React from 'react'
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import moment from 'moment';
import { useParams, Redirect,} from "react-router-dom";
import {  read } from './api';
import { isAuthenticated } from '../../Auth/admin/api';

export default function One() {
    let { id } = useParams();
    const [values, setValues] = React.useState({
        load:{},
        loading:true,
        loadingBtn:false,
        error:false,
        reload:false,
        redirectToPage:false,
    })
    const {loading, reload, error, load,redirectToPage} = values


    const redirectUser = () => {
        if (redirectToPage){
            return <Redirect to="/admin/teachers/create" />
        }
    };

    const isError = () => {
        if(error){
            return (
                <Aux>
                    <Row>
                        <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h3">Error in Deleting School .</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h1>School data failed to delete, Try again <Button variant="primary" onClick={handleReload}>Reload</Button> </h1>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Aux>
            )
        }
    };

    const isLoading = () => {
        if (loading){
            return (
                <Aux>
                    <Row>
                        <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h3">Wait loading data ...</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                    <h1>Wait !!! </h1>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Aux>
            )
        }
    };

    const handleReload = event =>{
        event.preventDefault();
        setValues(v => ({...v, error:false, reload:!reload,loading:false}));
    }

    React.useEffect(() => {
        const bootstrap = async () =>{
            const Auth = await isAuthenticated()
            const data = await read(id, Auth.token)
            if(!data){
                Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error');
                setValues(v => ({...v, loading:false, error:true}))  
                return  
            }
            if(data.error){
                Swal.fire('Oops...', data.error, 'error')
                setValues(v => ({...v, loading:false, error:true})) 
                return 
            }
            if(data.message){
                setValues(v => ({...v, loading:false, error:false, load:data.data}));
                let Toast = Swal.mixin({
                    toast: true,
                    timerProgressBar: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                return Toast.fire({
                    showClass: true,
                    type: 'success',
                    title: data.message
                })
            }  
        }
        bootstrap()
    }, [id])

    const isEmpty = (empty) =>{
        return Object.keys(empty).length === 0 && empty.constructor === Object
    }

    return (
        <Aux>
            {redirectUser()}
            {isError()}
            {
                loading ? isLoading() : 
                <Row>
                    {
                        isEmpty(load) ? "" : 
                        <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h3">Teacher Details</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Teacher Code</Form.Label>
                                                <Form.Control type="text" placeholder="Teacher Code" value={load.teacherCode} readOnly />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Title</Form.Label>
                                                <Form.Control type="text"  value={load.title} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type="text" placeholder="First Name"  value={load.firstName} readOnly />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Middle Name</Form.Label>
                                                <Form.Control type="text" placeholder="Middle Name"  value={load.middleName}readOnly />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" placeholder="Last Name"  value={load.lastName} readOnly/>
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>School</Form.Label>
                                            <Form.Control type="text"  value={load.school.names} readOnly/>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Date of Birth </Form.Label>
                                                <Form.Control type="text" placeholder="dob"  value={moment(load.dob,"YYYY-MM-DDTHH:mm:ss.SSSSZ").format('LL')}readOnly />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Gender</Form.Label>
                                            <Form.Control type="text"  value={load.gender} readOnly />
                                            
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Nationality</Form.Label>
                                            <Form.Control type="text" value={load.nationality}readOnly />
                                                
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Qualification </Form.Label>
                                                <Form.Control type="text" placeholder="NCE, B.Ed, B.Sc, M.Ed, M.Sc etc"  value={load.qualification}readOnly />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Phone </Form.Label>
                                                <Form.Control type="text" placeholder="phone number"  value={load.phone}readOnly />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control type="text" value={load.subjectTaught}readOnly />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>subject Specialisation</Form.Label>
                                                <Form.Control type="text" placeholder="English, Biochemistry"  value={load.subjectSpecialisation}readOnly />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="text" placeholder="email" value={load.email}readOnly />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Role</Form.Label>
                                            <Form.Control type="text" value={load.level}readOnly />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                    <Col md={6}>
                                    <Form.Group controlId="formBasicEmail">
                                                <Form.Label>First Appointment </Form.Label>
                                                <Form.Control type="text" placeholder="23/12/2020"  value={moment(load.firstappt,"YYYY-MM-DDTHH:mm:ss.SSSSZ").format('LLLL')}readOnly />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Staff Type</Form.Label>
                                            <Form.Control type="text" value={load.typeOfstaff}readOnly />
                                               
                                            </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Last Posting </Form.Label>
                                                <Form.Control type="text" placeholder="date"  value={moment(load.lastPosting,"YYYY-MM-DDTHH:mm:ss.SSSSZ").format('LLLL')}readOnly />
                                            </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Contract Years </Form.Label>
                                                <Form.Control type="number" placeholder="years" value={load.contractYears}readOnly />
                                            </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Grade Level </Form.Label>
                                                <Form.Control type="text" placeholder="GL.10"  value={load.gradeLevel}readOnly />
                                            </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Service Status</Form.Label>
                                            <Form.Control type="text" value={load.serviceStatus}readOnly />
                 
                                    </Form.Group> 
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Designation </Form.Label>
                                        <Form.Control type="text" placeholder="Senior Master" value={load.designation} readOnly/>
                                    </Form.Group>         
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Administrative</Form.Label>
                                            <Form.Control type="text" value={load.Engagement}readOnly />
                        
                                    </Form.Group>
            
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Session</Form.Label>
                                            <Form.Control type="text" placeholder="YYYY"  value={load.session}readOnly/>
                                        </Form.Group>
                                    
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Teaching Type</Form.Label>
                                            <Form.Control type="text"  value={load.teachingTypes}readOnly />
                                            
                                            </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Teaching Period WK</Form.Label>
                                            <Form.Control type="number" placeholder="42 periods per week"  value={load.teachingPeriodWK}readOnly/>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Last Workshop</Form.Label>
                                            <Form.Control type="text" placeholder="most recent"   value={moment(load.lastWorkshop,"YYYY-MM-DDTHH:mm:ss.SSSSZ").format('LL')}readOnly />
                                        </Form.Group>
   
                                        <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Creation Time </Form.Label>
                                        <Form.Control type="text" value={moment(load.createdAt,"YYYY-MM-DDTHH:mm:ss.SSSSZ").format('LLLL')} readOnly />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Last Update</Form.Label>
                                        <Form.Control type="text" value={moment(load.updatedAt,"YYYY-MM-DDTHH:mm:ss.SSSSZ").format('LLLL')} readOnly />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    }
                </Row>
            }
        </Aux>
    )
}
