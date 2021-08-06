import React from 'react'
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {Redirect, useParams} from 'react-router-dom'
import { read, edit, readsSchool,readsClass,readsSession} from './api';
import {isAuthenticated} from '../../Auth/admin/api'

export default function Edit() {
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
            token:''
    })
    const {school, presentClass, firstName, lastName,middleName, gender,religion,yearAdmission,HadEce,subject,province,ethnicity,  dob,country, disability,eduLevel,age,  status, session, parent,district,schoolList,parentList, classList,subjectList, sessionList,error, loading, loadingBtn, reload, redirectToPage} = values

    const handleChange = name=>event=>{
        setValues({...values, [name]:event.target.value})
    }
    

    const submit = event =>{
        event.preventDefault();
        setValues({...values, loadingBtn:true})
        if(school===""){ 
            this.setState({ loadingBtn:false})
            return Swal.fire('Oops...', 'School is required', 'error');
        }
        /*
        if(parent===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'ParentID is required', 'error');
        }
        */
        if(presentClass===""){ 
            this.setState({ loadingBtn:false})
            return Swal.fire('Oops...', 'Present Class is required', 'error');
        }
        /*
        if(stream===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'Class Stream is required', 'error');
        }
        */
        if(firstName===""){ 
            this.setState({loadingBtn:false})
            return Swal.fire('Oops...', 'First Name  is required', 'error');
        }
        if(lastName===""){ 
            this.setState({loadingBtn:false})
            return Swal.fire('Oops...', 'Last Name is required', 'error');
        }
        if(gender===""){ 
            this.setState({ loadingBtn:false})
            return Swal.fire('Oops...', 'Gender is required', 'error');
        }
        if(dob===""){ 
            this.setState({ loadingBtn:false})
            return Swal.fire('Oops...', 'Date of Birth is required', 'error');
        }
        if(country===""){ 
            this.setState({ loadingBtn:false})
            return Swal.fire('Oops...', 'Country is required', 'error');
        }
        if(disability===""){ 
            this.setState({ loadingBtn:false})
            return Swal.fire('Oops...', 'Disability is required', 'error');
        }
        if(status===""){ 
            this.setState({ loadingBtn:false})
            return Swal.fire('Oops...', 'Studentship status is required', 'error');
        }
        if(session===""){ 
            this.setState({ loadingBtn:false})
            return Swal.fire('Oops...', 'Academic session is required', 'error');
        }
        handleUpdate();
    }

    const handleUpdate =async ()=>{
        const student = {school,eduLevel, district, parent,presentClass, firstName, middleName, lastName, gender,age, religion, dob,country, disability, yearAdmission, HadEce,subject, status, session, province,ethnicity}
        const Auth = isAuthenticated();
        const data = await edit(id, student, Auth.token);
        console.log({data})
        if(!data){
            Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
            return setValues({...values, loadingBtn:false})
        }
        if(data.error){
            Swal.fire('Oops...', data.error, 'error')
            return setValues({...values, loadingBtn:false})
        }
        if(data.message){
            setValues({...values, loadingBtn:false, loading:false, redirectToPage:true})
            let Toast = Swal.mixin({
                toast: true,
                timerProgressBar: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });
            return  Toast.fire({
                animation: true,
                type: 'success',
                title: data.message
            })
        }
    }


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
                                        <h1>Requesting for student data</h1>
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
                                <Card.Title as="h5">Error in reading this student .</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h1>failed to read student data, Try again <Button variant="primary" onClick={handleReload}>Reload</Button> </h1>
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
        setValues({...values, loading:false,loadingBtn:false,  error:false, reload:!reload})
    }

   

    React.useEffect(() => {
        //let ignore = false;
        const bootstrap = async () =>{
            const Auth = isAuthenticated();
            setValues(v => ({...v, loading:true}))
            const scho = await readsSchool(Auth.token);
            const cla = await readsClass(Auth.token);
            const sess = await readsSession(Auth.token);
            // const par = await readsParent(Auth.token);
            // const subj = await readsSubject(Auth.token);
            

            const data = await read(id,Auth.token);
            //console.log({scho, cla})
           // if (!ignore){
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
                const {school, presentClass, firstName, lastName,middleName, gender,  dob,country, disability,edulevel,age,  status, session } = data.data[0];
                //const {school, presentClass, firstName, lastName, gender,  dob,country, disability, status, session } 
                //setValues(v => ({...v, loading:false, error:false, schoolList:scho.data,parentList:par.data,sessionList:sess.data,classList:cla.data,subjectList:subj.data, school:data.data.school, presentClass:data.data.presentClass, firstName:data.data.firstName, lastName:data.data.lastName, gender:data.data.gender,  dob:data.data.dob,country:data.data.country, disability:data.data.disability,eduLevel:data.data.eduLevel,age:data.data.age,  status:data.data.status, session:data.data.session }))
                //parentList:par.data,subjectList:subj.data,
                setValues(v => ({...v, loading:false, error:false, 
                    schoolList:scho.data,classList:cla.data,sessionList:sess.data,
                    school, presentClass, firstName, lastName,middleName, gender,  dob,country, disability,edulevel,age,  status, session
                }))
                setValues(v => ({...v, loading:false, error:false, }))
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
            //console.log({stud})
           // const {school, presentClass, firstName, lastName, gender,  dob,country, disability,edulevel,age,  status, session} = stud
           // setValues(v => ({...v, schoolList:scho.data, school, presentClass, firstName, lastName, gender,  dob,country, disability,edulevel,age,  status, session})); 
    }
    bootstrap()
},[reload, id])

    return (
        <Aux>
        {redirectUser()}
        {isError()}
        {loading ? isLoading() :
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h3">Update the Student data</Card.Title>
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
                                            <Form.Control as="select" onChange={handleChange("school")} value={school}>
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
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
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
                                            <Form.Label>Nationality</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("country")} value={country}>
                                                <option>Select Nationality</option>
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
                                                <option value="intellect">Intellectually Challenged</option>
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
                                                {
                                                   classList && classList.length > 0 
                                                   ?
                                                   classList.map((cla, id)=>{
                                                       return(
                                                        <option value={cla._id}>{cla.names}</option>
                                                       ) 
                                                   }) : <option value="0">Fails to fetch Class</option>
                                               }
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
                                                        <option value={sess._id}>{sess.name}</option>
                                                       ) 
                                                   }) : <option value="0">Fails to fetch Session</option>
                                               }
                                            </Form.Control>
                                            </Form.Group>
                                            {
                                                loadingBtn ? <Button variant="outline-secondary"  disable> wait.... </Button>:<Button variant = "primary" onClick={submit}  >Update Student ..</Button>
                                            }  
                                </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            }
        </Aux>
    )
}

