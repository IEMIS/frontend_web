import React from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import { read} from './api';
import { useParams, Redirect } from "react-router-dom";
import { isAuthenticated } from '../../Auth/admin/api';

export default function One() {
    let { id } = useParams();
    const [values, setValues] = React.useState({
           studentCode:"",
            school:"",
            parent:"",
            stream:"",
            firstName:"",
            middleName:"",
            lastName:"",
            religion:"",
            gender:"",
            dob:"",
            country:"",
            ethnicity:"",
            disability:"",
            yearAdmission:"",
            presentClass:"",
            HadEce:"",
            subject:"",
            status:"",
            session:"",
            province:"",
            class:"",
            edulevel:"",
            age:"",
            district:"",
            loading:false,
            loadingBtn:false,
            error:false,
            reload:false,
            redirectToPage:false,
            schoolList:[],
            parentList:[],
            subjectList:[],
            sessionList:[],
            classList:[],
    })
    const {school, parent, presentClass, firstName, lastName,middleName, gender,religion,ethnicity,yearAdmission,subject,province, dob,country, disability,eduLevel,age,  status, session,  error, loading, reload, redirectToPage} = values

    const redirectUser = () => {
        if (redirectToPage){
            return <Redirect to="/admin/students/read" />
        }
    };

    const isLoading= () => {
        if(loading){
            return (
                <Aux>
                    <Row>
                        <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Wait !!!.</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h1>Requesting for Sttudent  data</h1>
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

    const isError = () => {
        if(error){
            return (
                <Aux>
                    <Row>
                        <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Error in reading this student</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h1>Student data failed to read, Try again <Button variant="primary" onClick={handleReload}>Reload</Button> </h1>
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
        setValues({...values, loading:false, error:false, reload:!reload})
    }

    React.useEffect(() => {
        const bootstrap = async ()=>{
            const Auth = isAuthenticated();
            setValues(v => ({...v, loading:true}))
            const data = await read(id, Auth.token);
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
                setValues(v => ({...v, loading:false, error:false, firstName:data.data.firstName, lastName:data.data.lastName, phone:data.data.phone, middleName:data.data.middleName, email:data.data.email, level:data.data.level}))
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
    },[reload, id])

    const Back = async ()=>{
        setValues({...values, redirectToPage:true })
    }
    return (
        <Aux>
            {redirectUser()}
            {isError()}
            {isLoading()}
            <Row>
                <Col>
                    <Card.Header>
                        <Card.Title><Button variant="outline-primary" onClick={Back}>Back..</Button>  </Card.Title>
                    </Card.Header>
                </Col>
            </Row>
            <Row>
                <Card.Body>
                <Col>School Name : {school}</Col><Col>Parent : {parent}</Col><Col>Present Class : {presentClass}</Col> 
                <Col>First Name : {firstName}</Col><Col>Middle Name : {middleName}</Col><Col>Last Name : {lastName}</Col>
                <Col>Religion : {religion}</Col><Col>Gender {gender}</Col><Col>Date of Birth : {dob}</Col>
                <Col>Ethnicity : {ethnicity}</Col><Col>Nationality : {country}</Col><Col>Disability : {disability}</Col>
                <Col>Admission Year : {yearAdmission}</Col><Col>Subject : {subject}</Col><Col>Studentship : {status}</Col>
                <Col>Age : {age}</Col><Col>Education Level : {eduLevel}</Col><Col>Province: {province}</Col>
                <Col>Academic Session: {session}</Col>
                </Card.Body>
            </Row>
        </Aux>
    )
}
