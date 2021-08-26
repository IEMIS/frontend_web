import React, { Component } from 'react'
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {Redirect} from 'react-router-dom'
import { create, readsClass, readsSchool, readsSession } from './api';
import {isAuthenticated} from '../../Auth/admin/api'

export default class Create extends Component {
    constructor(props){
        super(props);
        this.state ={
            studentCode:"",
            cohortA:"",
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
            redirectToPage:false,
            schoolList:[],
            parentList:[],
            subjectList:[],
            sessionList:[],
            classList:[],
        }
    }

    async componentDidMount(){
        const Auth = await isAuthenticated()
        const scho = await readsSchool(Auth.token);
        const sessionL = await readsSession(Auth.token);
        const classL = await readsClass(Auth.token);
        this.setState({schoolList:scho.data, sessionList:sessionL.data,  classList:classL.data});
    }

    async componentDidUpdate(prevProps, prevState, snapshot){
        const {school, schoolList, dob} = this.state;
        if(prevState.school !== school){
            schoolList.map((scho, id)=>{
                if(scho._id===school){
                    this.setState({edulevel:scho.eduLevel, district:scho.fromDistrict[0]._id})
                }
                return true
            })
        }
        if(prevState.dob !== dob){
            return this.getAge(dob); 
        }
    }

    getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return this.setState({age})
    }

/* ========================================================TO DO=============================
implement cohort generation presentClass-yearAdmission e.g (Y1-2020) 
*/
    
    handleChange = name=>event=>{
        this.setState({[name]: event.target.value});
    }

    submit = event =>{
        event.preventDefault();
        const { studentCode,school, presentClass, firstName, lastName, gender,  dob,country, disability, status, session } = this.state;
        this.setState({loading:true})
        if(studentCode===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'Student Birth Certificate|Passport Number is required', 'error');
        }
        if(school===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'School is required', 'error');
        }
        /*
        if(parent===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'ParentID is required', 'error');
        }
        */
        if(presentClass===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'Present Class is required', 'error');
        }
        /*
        if(stream===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'Class Stream is required', 'error');
        }
        */
        if(firstName===""){ 
            this.setState({loading:false})
            return Swal.fire('Oops...', 'First Name  is required', 'error');
        }
        if(lastName===""){ 
            this.setState({loading:false})
            return Swal.fire('Oops...', 'Last Name is required', 'error');
        }
        if(gender===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'Gender is required', 'error');
        }
        if(dob===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'Date of Birth is required', 'error');
        }
        if(country===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'Country is required', 'error');
        }
        if(disability===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'Disability is required', 'error');
        }
        if(status===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'Studentship status is required', 'error');
        }
        if(session===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'Academic session is required', 'error');
        }
        this.handleCreate();
    }

    handleCreate =async ()=>{
        const Auth = await isAuthenticated();
        const { studentCode, cohortA, school, district, parent, firstName, middleName, lastName, gender,edulevel,age, religion, dob,country, disability, yearAdmission, HadEce,subject, presentClass, status, session, province,ethnicity, loading} = this.state;
        const student = { studentCode, cohortA, school,edulevel, district, parent,presentClass, firstName, middleName, lastName, gender,age, religion, dob,country, disability, yearAdmission, HadEce,subject, status, session, province,ethnicity, loading} 
        const data = await create(student, Auth.token);
        if(!data){
            Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
            return this.setState({loading:false})
        }
        if(data.error){
            Swal.fire('Oops...', data.error, 'error')
            return this.setState({ loading:false})
        }
        if(data.message){
            Swal.fire('Saved...', data.message, 'success')
           this.setState({ loading:false, redirectToPage:true})
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

    redirectUser = () => {
        let {redirectToPage} = this.state;
        if (redirectToPage){
            return <Redirect to="/district/students/create" />
        }
    };


    render() {
        //const { school, parent,presentClass,classList, stream, firstName, middleName, lastName, gender, religion, dob,country, disability, yearAdmission, HadEce,subject, status, session, province,ethnicity, loading, schoolList,parentList,subjectList,sessionList} = this.state;
        const { studentCode, cohortA, school, parent,presentClass,classList, firstName, middleName, lastName,edulevel,age, gender, religion, dob,country, disability, yearAdmission, HadEce,subject, status, session, province,ethnicity,district, loading, schoolList,parentList,subjectList,sessionList} = this.state;
        console.log({sessionList, classList, schoolList,edulevel,age,cohortA, district})
        return (
            <Aux>
            {this.redirectUser()}
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
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Student Code</Form.Label>
                                                <Form.Control type="text" placeholder="Birth Cert or Passport Number" onChange={this.handleChange("studentCode")} value={studentCode} />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>School</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange("school")} value={school}>
                                                <option>Select school</option>
                                               {
                                                   schoolList && schoolList.length > 0 
                                                   ?
                                                   schoolList.map((scho, id)=>{
                                                       //this.setState({edulevel:scho.edulevel, district:scho.district})
                                                       return(
                                                        <option value={scho._id}>{scho.names}</option>
                                                       ) 
                                                   }) : <option value="0">Fails to fetch school</option>
                                               }
                                            </Form.Control>
                                            </Form.Group>
                                             {/* ============Let tthis field auto fill based on school selected to ease indicator generation from student model============
                                             <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Education Level</Form.Label>
                                                <Form.Control type="text" placeholder="Level" onChange={handleChange("eduLevel")} value={edulevel} disabled/>
                                            </Form.Group>*/}
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>parent</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange("parent")} value={parent}>
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
                                                <Form.Control type="text" placeholder="First Name" onChange={this.handleChange("firstName")} value={firstName} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" placeholder="Surname" onChange={this.handleChange("lastName")} value={lastName} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label> Middle Name</Form.Label>
                                                <Form.Control type="text" placeholder="Middle Name" onChange={this.handleChange("middleName")} value={middleName} />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Religion</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange("religion")} value={religion}>
                                                <option>Select Religion</option>
                                                <option value="Christainity">Christainity</option>
                                                <option value="Hinduism">Hinduism</option>
                                                <option value="Islam">Islam</option>
                                                <option value="Tradition">Tradition</option>
                                            </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Date of Birth </Form.Label>
                                                <Form.Control type="date" placeholder="date of birth on certificate" onChange={this.handleChange("dob")} value={dob} />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Gender</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange("gender")} value={gender}>
                                                <option>Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Province</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange("province")} value={province}>
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
                                            <Form.Label>Nationality</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange("country")} value={country}>
                                                <option>Nationality</option>
                                                <option value="Fijian">Fijian Citizen</option>
                                                <option value="International">International</option>
                                                <option value="Regional">Regional</option>
                                            </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Ethnicity</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange("ethnicity")} value={ethnicity}>
                                                <option>Select Ethnicity</option>
                                                <option value="Indo-Fijian">Indo Fijian</option>
                                                <option value="itaukei">Itaukei</option>
                                                <option value="others">Others</option>
                                            </Form.Control>
                                            </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Disability</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange("disability")} value={disability}>
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
                                                <Form.Control type="date" placeholder="Admission Year" onChange={this.handleChange("yearAdmission")} value={yearAdmission} />
                                            </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Present Class</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange("presentClass")} value={presentClass}>
                                                <option>Select Present Class</option>
                                                {
                                                   classList && classList.length > 0 
                                                   ?
                                                   classList.map((cla, id)=>{
                                                       return(
                                                        <option value={cla._id}>{cla.names}</option>
                                                       ) 
                                                   }) : <option value="0">Fails to fetch Class</option>
                                               }

                                                {
                                                /*
                                                //create class from Admin Dashboard

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
                                                <option value="voc2">Voc YR2</option>*/
                                                }   
                                            </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Had ECE</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange("HadEce")} value={HadEce}>
                                                <option>Select</option>
                                                <option value="Yes">Yes </option>
                                                <option value="No">No</option>
                                    </Form.Control>
                                    </Form.Group>
                                     <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange("subject")} value={subject}>
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
                                            <Form.Control as="select" onChange={this.handleChange("status")} value={status}>
                                                <option>Select student status</option>
                                                <option value="promotee">Promoted</option>
                                                <option value="dropout">Drop-out</option>
                                                <option value="repeater">Repeater</option>
                                                <option value="deceased">Deceased</option>
                                                <option value="relocate">Overseas Relocation</option>
                                                <option value="graduate">Graduated</option>
                                            </Form.Control>
                                     </Form.Group>
                                     <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Session</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange("session")} value={session}>
                                                <option>Select Session</option>
                                               {
                                                   sessionList && sessionList.length > 0 
                                                   ?
                                                  sessionList.map((sess, id)=>{
                                                       return(
                                                        <option value={sess._id}>{sess.name}</option>
                                                       ) 
                                                   }) : <option value="0">Fails to fetch Session</option>
                                               }
                                            </Form.Control>
                                            </Form.Group>
                                        
                                            {
                                                loading ? "loading ..." : <Button variant="primary" onClick={this.submit}  >Create ..</Button>
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
}
