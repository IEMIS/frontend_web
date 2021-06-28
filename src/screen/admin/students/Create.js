import React from 'react'
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {Redirect} from 'react-router-dom'
import { create, readsSchool } from './api';
import {isAuthenticated} from '../../Auth/admin/api'


export default function Create() {
    const [values, setValues] = React.useState({
        studentCode:"",
        schoolId:"",
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
        loading:false,
        redirectToPage:false,
        schoolList:[],
        parentList:[],
        subjectList:[],
        sessionList:[]
    })
    const {studentCode, schoolId, parent, presentClass,stream, firstName, middleName, lastName, gender, religion, dob,country, disability, yearAdmission, HadEce,subject, status, session, province,ethnicity, loading, redirectToPage, schoolList,parentList,subjectList,sessionList} = values

    const handleChange = name=>event=>{
        setValues({...values, [name]:event.target.value})
    }

    const submit = event =>{
        event.preventDefault();
        setValues({...values, loading:true})
        if(studentCode===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Student code is required', 'error');
        }
        if(schoolId===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'School is required', 'error');
        }
        if(parent===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'ParentID is required', 'error');
        }
        if(presentClass===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Present Class is required', 'error');
        }
        if(stream===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Class Stream is required', 'error');
        }
        if(firstName===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'First Name  is required', 'error');
        }
        if(lastName===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Last Name is required', 'error');
        }
        if(gender===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Gender is required', 'error');
        }
        if(dob===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Date of Birth is required', 'error');
        }
        if(country===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Country is required', 'error');
        }
        if(disability===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Disability is required', 'error');
        }
        if(status===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Studentship status is required', 'error');
        }
        if(session===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Academic session is required', 'error');
        }
        handleCreate();
    }

    const handleCreate =async ()=>{
        const Auth = await isAuthenticated();
        const student = {studentCode, schoolId, parent, presentClass, stream, firstName, middleName, lastName, gender, religion, dob, country, disability, yearAdmission, HadEce, subject, province}
        const data = await create(student, Auth.token);
        if(!data){
            Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
            return setValues({...values, loading:false})
        }
        if(data.error){
            Swal.fire('Oops...', data.error, 'error')
            return setValues({...values, loading:false})
        }
        if(data.message){
            Swal.fire('Saved...', data.message, 'success')
           setValues({...values, loading:false, redirectToPage:true})
           let Toast = Swal.mixin({
            toast: true,
            timerProgressBar: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
            });

            return Toast.fire({
                animation: true,
                type: 'success',
                title: 'Request is successful'
            })
        }
    }

    const redirectUser = () => {
        if (redirectToPage){
            return <Redirect to="/admin/schools/create" />
        }
    };

    React.useEffect(() => {
        const bootstrap = async () =>{
            const Auth = await isAuthenticated()
            const scho = await readsSchool(Auth.token);
            let studentCode = `SCH${`0012`}`;
            setValues(v => ({...v, schoolList:scho.data, studentCode})); 
        }
        bootstrap()
    }, [])

    return (
        <Aux>
            {redirectUser()}
            <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h3">Add New Student</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                            {/*<Form.Group controlId="formBasicEmail">
                                                <Form.Label>Student Code</Form.Label>
                                                <Form.Control type="text" placeholder="school code" onChange={handleChange("studentCode")} value={studentCode} />
                                            </Form.Group>*/}
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>School</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("schoolId")} value={schoolId}>
                                                <option>Select school</option>
                                               {
                                                   schoolList && schoolList.length > 0 
                                                   ?
                                                   schoolList.map((scho, id)=>{
                                                       return(
                                                        <option value={scho._id}>{scho.names}</option>
                                                       ) 
                                                   }) : <option value="0">Fails to fetch school</option>
                                               }
                                            </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>parent</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("parent")} value={parent}>
                                                <option>Select Parent</option>
                                               {
                                                   parentList && parentList.length > 0 
                                                   ?
                                                   schoolList.map((par, id)=>{
                                                       return(
                                                        <option value={par._id}>{par.school}</option>
                                                       ) 
                                                   }) : <option value="0">Fails to fetch Parent</option>
                                               }
                                            </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label> First Name</Form.Label>
                                                <Form.Control type="text" placeholder="First Name" onChange={handleChange("firstName")} value={firstName} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" placeholder="Surname" onChange={handleChange("lastName")} value={lastName} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label> Middle Name</Form.Label>
                                                <Form.Control type="text" placeholder="Middle Name" onChange={handleChange("middleName")} value={middleName} />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Religion</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("religion")} value={religion}>
                                                <option>Select Religion</option>
                                                <option value="Christainity">Christainity</option>
                                                <option value="Hinduism">Hinduism</option>
                                                <option value="Islam">Islam</option>
                                                <option value="Tradition">Tradition</option>
                                            </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Date of Birth </Form.Label>
                                                <Form.Control type="date" placeholder="date of birth on certificate" onChange={handleChange("dob")} value={dob} />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Gender</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("gender")} value={gender}>
                                                <option>Select Gender</option>
                                                <option value="M">Male</option>
                                                <option value="F">Female</option>
                                            </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Province</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("province")} value={province}>
                                                <option>Select Province</option>
                                                <option value="Ba">Ba</option>
                                                <option value="Bua">Bua</option>
                                                <option value="Cakaudrove">Cakaudrove</option>
                                                <option value="Kadavu">Kadavu</option>
                                                <option value="Lau">Lau</option>
                                                <option value="Laomaiviti">Laomaiviti</option>
                                                <option value="Macuaa">Macuaa</option>
                                                <option value="Nadroga">Nadroga-Navosa</option>
                                                <option value="Naitasiri">Naitasiri</option>
                                                <option value="Namosi">Namosi</option>
                                                <option value="Ra">Ra</option>
                                                <option value="Rewa">Rewa</option>
                                                <option value="Serua">Serua</option>
                                                <option value="Tailevu">Tailevu</option>
                                            </Form.Control>
                                     </Form.Group>
                                            
                                        </Form>
                                    </Col>
                                    <Col md={6}>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Country</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("country")} value={country}>
                                                <option>Select Country</option>
                                                <option value="Fijian">Fijian Citizen</option>
                                                <option value="International">International</option>
                                                <option value="Regional">Regional</option>
                                            </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Ethnicity</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("ethnicity")} value={ethnicity}>
                                                <option>Select Ethnicity</option>
                                                <option value="Indo-Fijian">Indo Fijian</option>
                                                <option value="itaukei">Itaukei</option>
                                                <option value="others">Others</option>
                                            </Form.Control>
                                            </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Disability</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("disability")} value={disability}>
                                                <option>Select Disability</option>
                                                <option value="albinism">Albinism</option>
                                                <option value="behaviour">Behavioural Disoder</option>
                                                <option value="hearing">Hearing/Auditory Challenged</option>
                                                <option value="intellect">Visually Challenged</option>
                                                <option value="learning">Learning</option>
                                                <option value="mobility">Mobility Restricted</option> 
                                                <option value="speech">Speech</option>
                                                <option value="visual">Visually Challenged</option>
                                                <option value="none">None</option>
                                            </Form.Control>
                                            </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Admission Year </Form.Label>
                                                <Form.Control type="date" placeholder="Admission Year" onChange={handleChange("yearAdmission")} value={yearAdmission} />
                                            </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Present Class</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("presentClass")} value={presentClass}>
                                                <option>Select Present Class</option>
                                                <option value="Preprimary">Pre-Primary</option>
                                                <option value="Y1">Year 1</option>
                                                <option value="Y2">Year 2</option>
                                                <option value="Y3">Year 3</option>
                                                <option value="Y4">Year 4</option>
                                                <option value="Y5">Year 5</option>
                                                <option value="Y6">Year 6</option>
                                                <option value="Y7">Year 7</option>
                                                <option value="Y8">Year 8</option>
                                                <option value="Y9">Year 9</option>
                                                <option value="Y10">Year 10</option>
                                                <option value="Y11">Year 11</option>
                                                <option value="Y12">Year 12</option>
                                                <option value="Y13">Year 13</option>
                                                <option value="voc1">Voc YR1</option>
                                                <option value="voc2">Voc YR2</option>   
                                            </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Had ECE</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("HadEce")} value={HadEce}>
                                                <option>Select</option>
                                                <option value="Yes">Yes </option>
                                                <option value="No">No</option>
                                    </Form.Control>
                                    </Form.Group>
                                     <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("subject")} value={subject}>
                                                <option>Select subject</option>
                                               {
                                                   subjectList && subjectList.length > 0 
                                                   ?
                                                  subjectList.map((subj, id)=>{
                                                       return(
                                                        <option value={subj._id}>{subj.subject}</option>
                                                       ) 
                                                   }) : <option value="0">Fails to fetch subject</option>
                                               }
                                            </Form.Control>
                                            </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Studentship</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("status")} value={status}>
                                                <option>Select student status</option>
                                                <option value="promoter">Promoted</option>
                                                <option value="dropout">Drop-out</option>
                                                <option value="repeater">Repeater</option>
                                                <option value="deceased">Deceased</option>
                                                <option value="relocate">Overseas Relocation</option>
                                                <option value="graduate">Graduated</option>
                                            </Form.Control>
                                     </Form.Group>
                                     <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Session</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("session")} value={session}>
                                                <option>Select Session</option>
                                               {
                                                   sessionList && sessionList.length > 0 
                                                   ?
                                                  sessionList.map((sess, id)=>{
                                                       return(
                                                        <option value={sess._id}>{sess.session}</option>
                                                       ) 
                                                   }) : <option value="0">Fails to fetch Session</option>
                                               }
                                            </Form.Control>
                                            </Form.Group>
                                        
                                        {
                                                loading ? "loading ..." : <Button variant="primary" onClick={submit}  >Create ..</Button>
                                            }
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </Aux>
    )
}