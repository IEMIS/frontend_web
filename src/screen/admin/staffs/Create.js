import React from 'react'
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {Redirect} from 'react-router-dom'
import { create, readsDistrict } from './api';


export default function Create() {

    const [values, setValues] = React.useState({
        staffCode:"",
        district:"",
        firstName:"",
        title:"",
        email:"",
        lastName:"",
        gender:"",
        middleName:"",
        phone:"",
        dob:"",
        role:"",
        nationality:"",
        designation:"",
        password:"",
        password2:"",
        loading:false,
        redirectToPage:false,
        districtList:[]
    })
    const {staffCode, firstName,district, phone, email, password, password2,role, lastName,middleName,title,gender,dob, nationality,designation,loading, redirectToPage, districtList} = values

    const handleChange = name=>event=>{
        setValues({...values, [name]:event.target.value})
    }

    const submit = event =>{
        event.preventDefault();
        setValues({...values, loading:true})
        if(staffCode===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Staff code is required', 'error');
        }
        if(district===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'District is required', 'error');
        }
        if(firstName===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'First Name is required', 'error');
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
        if(nationality===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'School ownership is required', 'error');
        }
        if(email===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Email is required', 'error');
        }
        if(phone===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Phone number is required', 'error');
        }

        if(password==="") {
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Password must empty', 'error');
        }

        if(password !== password2) {
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Password must match each other', 'error');
        }
        handleCreate();
    }

    const handleCreate =async ()=>{
        //const user = {code, names,district, phone, email, password, password2, address,fax,mailBox,province,eduLevel,ownership,estabYear,schoolCat,schoolType,headID, loading, redirectToPage, districtList}
        const staff = {staffCode, firstName, district, email, middleName, role, lastName, title, gender, dob, designation, password}
        const data = await create(staff);
        console.log(data)
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
            return <Redirect to="/admin/staffs/create" />
        }
    };

    React.useEffect(() => {
        const bootstrap = async () =>{
            const dist = await readsDistrict();
            let code = `MOE${`0012`}`;
            setValues(v => ({...v, districtList:dist.data, code})); 
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
                                <Card.Title as="h3">Add New Staff</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Staff Code</Form.Label>
                                                <Form.Control type="text" placeholder="Staff code" onChange={handleChange("staffCode")} value={staffCode} disabled />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>District</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("district")} value={district}>
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
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Phone </Form.Label>
                                                <Form.Control type="text" placeholder="official school phone number" onChange={handleChange("phone")} value={phone} />
                                            </Form.Group>
                                              <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" onChange={handleChange("password")} value={password} />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                    <Col md={6}>
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
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Role</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("role")} value={role}>
                                                <option>Select </option>
                                                <option value="Read1">Read-Only</option>
                                                <option value="Read2">Read-Write</option>
                                            </Form.Control>
                                            </Form.Group>
                                       <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Designation</Form.Label>
                                                <Form.Control type="text" placeholder="Senior Education Officer" onChange={handleChange("designatioon")} value={designation} />
                                            </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>email </Form.Label>
                                            <Form.Control type="email" placeholder="email" onChange={handleChange("email")} value={email}/>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password Confirmation</Form.Label>
                                            <Form.Control type="password" placeholder="Password Confirmation" onChange={handleChange("password2")} value={password2} />
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