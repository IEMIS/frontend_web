import React from 'react'
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {Redirect, useParams} from 'react-router-dom'
import { readsSchool, read, edit } from './api';
import { isAuthenticated } from '../../Auth/district/api';

export default function Edit() {
    let { id } = useParams();
    const [values, setValues] = React.useState({
        teacherCode:"",
        school:"",
        firstName:"",
        middleName:"",
        lastName:"",
        title:"",
        gender:"",
        dob:"",
        nationality:"",
        qualification:"",
        email:"",
        phone:"",
        subjectTaught:"",
        classTaking:"",
        subjectSpecialisation:"",
        level:"",
        typeOfstaff:"",
        firstappt:"",
        lastPosting:"",
        contractYears:"",
        retirementyear:"",
        gradeLevel:"",
        designation:"",
        serviceStatus:"",
        teachingTypes:"",
        teachingPeriodWK:"",
        Engagement:"",
        session:"",
        lastWorkshop:"",
        password:"",
        password2:"",
        loading:true,
        loadingBtn:false,
        error:false,
        reload:false,
        redirectToPage:false,
        schoolList:[],
        subjectList:[]
    })
    const {teacherCode, reload, error, loadingBtn, school,firstName, middleName,lastName,title,gender,dob,nationality,qualification,email, phone,subjectTaught, classTaking,subjectSpecialisation,level,typeOfstaff, firstappt, lastPosting, contractYears, retirementyear, designation,serviceStatus,teachingTypes,teachingPeriodWK,Engagement,session,gradeLevel, lastWorkshop, password, password2, loading, redirectToPage, schoolList,subjectList} = values

    const handleChange = name=>event=>{
        setValues({...values, [name]:event.target.value})
    }

    const submit = event =>{
        event.preventDefault();
        setValues({...values, loading:true})
        
        // if(teacherCode===""){ 
        //     setValues({...values, loading:false})
        //     return Swal.fire('Oops...', 'Teacher code is required', 'error');
        // }
        
        if(school===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'School Name is required', 'error');
        }
        if(firstName===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'First Name is required', 'error');
        }
        if(lastName===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Last Name is required', 'error');
        }
        if(title===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'title is required', 'error');
        }
        if(gender===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Gender is required', 'error');
        }
        if(dob===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Date of birth is required', 'error');
        }
        if(nationality===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'National is required', 'error');
        }
        if(qualification===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Qualification is required', 'error');
        }
        if(email===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Email is required', 'error');
        }
        if(phone===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Phone number is required', 'error');
        }
        // if(subjectTaught===""){ 
        //     setValues({...values, loading:false})
        //     return Swal.fire('Oops...', 'Subject taught is required', 'error');
        // }
        // if(classTaking===""){ 
        //     setValues({...values, loading:false})
        //     return Swal.fire('Oops...', 'Classes taken is required', 'error');
        // }
        if(subjectSpecialisation===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Subject Specialisation is required', 'error');
        }
        if(level===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Role is required', 'error');
        }
        if(typeOfstaff===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Staff type is required', 'error');
        }
        if(firstappt===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Date of First appointment is required', 'error');
        }
        if(gradeLevel===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Grade Level is required', 'error');
        }
        if(designation===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Designation is required', 'error');
        }
        if(serviceStatus===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Service Status is required', 'error');
        }
        if(teachingTypes===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Teaching Type is required', 'error');
        }
        if(session===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Session is required', 'error');
        }

        handleUpdate();
    }

    const handleUpdate =async ()=>{
        const Auth = await isAuthenticated()
        setValues({...values, loadingBtn:true})
        const teacher = {teacherCode, school,firstName, middleName,lastName,title,gender,dob,nationality,qualification,email, phone,classTaking,subjectSpecialisation,level,typeOfstaff, firstappt, lastPosting, contractYears, retirementyear, designation,serviceStatus,teachingTypes,teachingPeriodWK,Engagement,session, lastWorkshop, password, password2}
        const data = await edit(id, teacher, Auth.token);
        if(!data){
            Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
            return setValues({...values, loadingBtn:false})
        }
        if(data.error){
            Swal.fire('Oops...', data.error, 'error')
            return setValues({...values, loadingBtn:false})
        }

        if(data.message){
           setValues({...values, loadingBtn:false, redirectToPage:true})
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
                title: data.message
            })
        }
    }

    const redirectUser = () => {
        if (redirectToPage){
            return <Redirect to="/district/teachers/read" />
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
        setValues({...values, error:false, reload:!reload, loading:true})
        // seterror(false)
        // setreload(!reload)
    }

    React.useEffect(() => {
        const bootstrap = async () =>{
            //setValues(v => ({...v, loading:false,}))  
            const Auth = await isAuthenticated()
            const scho = await readsSchool(Auth.token);
            const data = await read(id, Auth.token)
           // console.log({data})
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
                const { teacherCode,firstName, middleName,lastName,title,gender,dob,nationality,qualification,email, phone,
                     subjectSpecialisation,level,typeOfstaff, firstappt, lastPosting, contractYears,
                     retirementyear, designation,serviceStatus,teachingTypes,teachingPeriodWK,Engagement,session,gradeLevel, 
                     lastWorkshop, } = data.data;
                setValues(v => ({...v, loading:false, error:false, schoolList:scho.data, 
                    teacherCode, firstName, middleName,lastName,title,gender,dob,nationality,
                    qualification,email, phone,subjectSpecialisation,
                    level,typeOfstaff, firstappt, lastPosting, contractYears, retirementyear, 
                    designation,serviceStatus,teachingTypes,teachingPeriodWK,Engagement,session,
                    gradeLevel, lastWorkshop,
                    school:data.data.school._id,
                }));
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
    }, [id, reload])

    return (
        <Aux>
            {redirectUser()}
            {isError()}
            {
                loading ? isLoading() : 
                <Row>
                    <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h3">Add New Teacher</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={6}>
                                    <Form>
                                        {/*<Form.Group controlId="formBasicEmail">
                                            <Form.Label>Teacher Code</Form.Label>
                                            <Form.Control type="text" placeholder="Teacher Code" onChange={handleChange("teacherCode")} value={teacherCode} disabled />
                                        </Form.Group>*/}
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control as="select" onChange={handleChange("title")} value={title}>
                                            <option>Select</option>
                                            <option value="Mr.">Mr.</option>
                                            <option value="Mrs.">Mrs.</option>
                                            <option value="Ms.">Ms.</option>
                                            <option value="Miss.">Miss.</option>
                                            <option value="Dr.">Dr.</option>
                                        </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="text" placeholder="First Name" onChange={handleChange("firstName")} value={firstName} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Middle Name</Form.Label>
                                            <Form.Control type="text" placeholder="Middle Name" onChange={handleChange("middleName")} value={middleName} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="text" placeholder="Last Name" onChange={handleChange("lastName")} value={lastName} />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>School</Form.Label>
                                        <Form.Control as="select" onChange={handleChange("school")} value={school}>
                                            <option>Select School</option>
                                           {
                                               schoolList && schoolList.length > 0 
                                               ?
                                               schoolList.map((scho, id)=>{
                                                   return(
                                                    <option key={id} value={scho._id}>{scho.names}</option>
                                                   ) 
                                               }) : <option value="0">Fails to fetch school</option>
                                           }
                                        </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Date of Birth </Form.Label>
                                            <Form.Control type="date" placeholder="dob" onChange={handleChange("dob")} value={dob} />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control as="select" onChange={handleChange("gender")} value={gender}>
                                            <option>Select </option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Nationality</Form.Label>
                                        <Form.Control as="select" onChange={handleChange("nationality")} value={nationality}>
                                            <option>Select </option>
                                            <option value="Fijian">Male</option>
                                            <option value="Regional">Female</option>
                                            <option value="Foreigner">Foreigner</option>
                                        </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Qualification </Form.Label>
                                            <Form.Control type="text" placeholder="NCE, B.Ed, B.Sc, M.Ed, M.Sc etc" onChange={handleChange("qualification")} value={qualification} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Phone </Form.Label>
                                            <Form.Control type="text" placeholder="phone number" onChange={handleChange("phone")} value={phone} />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control as="select" onChange={handleChange("subjectTaught")} value={subjectTaught}>
                                            <option>Select subject</option>
                                           {
                                               subjectList && subjectList.length > 0 
                                               ?
                                              subjectList.map((subj, idx)=>{
                                                   return(
                                                    <option key={idx} value={subj._id}>{subj.subject}</option>
                                                   ) 
                                               }) : <option value="0">Fails to fetch subject</option>
                                           }
                                        </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>subject Specialisation</Form.Label>
                                            <Form.Control type="text" placeholder="English, Biochemistry" onChange={handleChange("subjectSpecialisation")} value={subjectSpecialisation} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" placeholder="email" onChange={handleChange("email")} value={email} />
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col md={6}>
                                <Form.Group controlId="formBasicEmail">
                                            <Form.Label>First Appointment </Form.Label>
                                            <Form.Control type="date" placeholder="23/12/2020" onChange={handleChange("firstappt")} value={firstappt} />
                                        </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Last Posting </Form.Label>
                                            <Form.Control type="date" placeholder="date" onChange={handleChange("lastPosting")} value={lastPosting} />
                                        </Form.Group>
                                 <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Contract Years </Form.Label>
                                            <Form.Control type="number" placeholder="years" onChange={handleChange("contractYears")} value={contractYears} />
                                        </Form.Group>
                                 <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Grade Level </Form.Label>
                                            <Form.Control type="text" placeholder="GL.10" onChange={handleChange("gradeLevel")} value={gradeLevel} />
                                        </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Service Status</Form.Label>
                                        <Form.Control as="select" onChange={handleChange("serviceStatus")} value={serviceStatus}>
                                            <option>Select </option>
                                            <option value="Active">Active</option>
                                            <option value="Maternity">Maternity-Leave</option>
                                            <option value="study">Study-Leave</option>
                                            <option value="sick">Sick-Leave</option>
                                            <option value="disengaged">disengaged</option>
                                            <option value="retired">retired</option>
                                         </Form.Control>  
                                </Form.Group> 
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Designation </Form.Label>
                                    <Form.Control type="text" placeholder="Senior Master" onChange={handleChange("designation")} value={designation} />
                                </Form.Group>         
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Administrative</Form.Label>
                                        <Form.Control as="select" onChange={handleChange("Engagement")} value={Engagement}>
                                            <option>Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </Form.Control>
                                 </Form.Group>
        
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Session</Form.Label>
                                        <Form.Control type="text" placeholder="YYYY" onChange={handleChange("session")} value={session}/>
                                    </Form.Group>
                        
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Teaching Type</Form.Label>
                                        <Form.Control as="select" onChange={handleChange("teachingTypes")} value={teachingTypes}>
                                            <option>Select </option>
                                            <option value="1">Full-Time</option>
                                            <option value="2">Part-Time</option>
                                        </Form.Control>
                                        </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Teaching Period WK</Form.Label>
                                        <Form.Control type="number" placeholder="42 periods per week" onChange={handleChange("teachingPeriodWK")} value={teachingPeriodWK}/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Last Workshop</Form.Label>
                                        <Form.Control type="date" placeholder="most recent" onChange={handleChange("lastWorskshop")} value={lastWorkshop}/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Role</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("level")} value={level}>
                                                <option>Select </option>
                                                <option value="1">Class Teacher</option>
                                                <option value="2">Subject Teacher</option>
                                                <option value="3">Ass. Teacher</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Staff Type</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("typeOfstaff")} value={typeOfstaff}>
                                                <option>Select </option>
                                                <option value="1">Government</option>
                                                <option value="2">PTA </option>
                                                <option value="2">Private </option>
                                            </Form.Control>
                                        </Form.Group>
                                    {
                                        loadingBtn ? "loading ..." : <Button variant="primary" onClick={submit}  >Update ..</Button>
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
