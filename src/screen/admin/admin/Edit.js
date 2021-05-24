import React from 'react'
import {Row, Col, Card, Form, Button} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {read, edit } from './api';
import { useParams, Redirect } from "react-router-dom";

export default function Edit() {

    let { id } = useParams();

    const [values, setValues] = React.useState({
        firstName:"",
        lastName:"",
        middleName:"",
        phone:"",
        email:"",
        password:"",
        password2:"",
        level:"",
        loading:false,
        redirectToPage:false,
    })

    const {firstName, lastName, middleName, phone, email, password, password2, level, loading, redirectToPage} = values

    const handleChange = name=>event=>{
        setValues({...values, [name]:event.target.value})
    }

    const submit = event =>{
        event.preventDefault();
        setValues({...values, loading:true})
        if(firstName===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Admin first Name is required', 'error');
        }
        if(middleName===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Admin Middle Name is required', 'error');
        }
        if(lastName===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Admin Last Name is required', 'error');
        }
        if(email===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Email is required', 'error');
        }
        if(phone===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Phone Number is required', 'error');
        }

        if(password !== password2) {
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Password must match each other', 'error');
        }

        handleCreate();
    }

    const handleCreate =async ()=>{
        const user = {firstName, lastName, middleName, phone, email, password, password2, level}
        console.log({user})
        const data = await edit(user);
        
        if(!data){
            Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
            return setValues({...values, loading:false})
        }

        if(data.error){
            Swal.fire('Oops...', data.error, 'error')
            return setValues({...values, loading:false})
        }

        if(data.message){
            Swal.fire('saved...', data.message, 'success')
            let Toast = Swal.mixin({
                toast: true,
                timerProgressBar: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });
    
            Toast.fire({
                animation: true,
                type: 'success',
                title: 'Request is successful'
            })
           return setValues({...values, loading:false, redirectToPage:true})
        }
    }

    const redirectUser = () => {
        if (redirectToPage){
            return <Redirect to="/admin/users/read" />
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
                                        <h1>Requesting for Admin  data</h1>
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
                                <Card.Title as="h5">Error in reading this user .</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h1>Admin data failed to read, Try again <Button variant="primary" onClick={handleReload}>Reload</Button> </h1>
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

    const bootstrap = async ()=>{
        setloading(true)
        const data = await read(id);
        if(!data){
            Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error');
            setValues({...values, loading:false, error:true})   
        }
        if(data.error){
            Swal.fire('Oops...', data.error, 'error')
            setValues({...values, loading:false, error:true})
        }

        if(data.message){
            let Toast = Swal.mixin({
                toast: true,
                timerProgressBar: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });
            Toast.fire({
                showClass: true,
                type: 'success',
                title: data.message
            })
            setValues({...values, loading:false, error:false, firstName:data.firstName, lastName:data.lastName, phone:data.phone})
            return Swal.fire('Great', data.message, 'success');
        }  
    }

    React.useEffect(() => {
        bootstrap()
    },[reload, id])

    return (
        <Aux>
            {redirectUser()}
            {isLoading()}
            {isError()}
            <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h3">Add New Admin user</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>First name</Form.Label>
                                                <Form.Control type="text" placeholder="First name" onChange={handleChange("firstName")} value={firstName} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Middle Name</Form.Label>
                                                <Form.Control type="text" placeholder="Middle name" onChange={handleChange("middleName")} value={middleName} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Phone </Form.Label>
                                                <Form.Control type="text" placeholder="phone" onChange={handleChange("phone")} value={phone} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" onChange={handleChange("password")} value={password} />
                                            </Form.Group>

                                            {
                                                loading ? "loading ..." : <Button variant="primary" onClick={submit}  >Create ..</Button>
                                            }
                                        </Form>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Last name</Form.Label>
                                            <Form.Control type="text" placeholder="Last name" onChange={handleChange("lastName")} value={lastName} />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>email </Form.Label>
                                            <Form.Control type="email" placeholder="email" onChange={handleChange("email")} value={email}/>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Admin Role </Form.Label>
                                            <Form.Control as="select" onChange={handleChange("level")} value={level}>
                                                <option>Select Role</option>
                                                <option value="1">Admin</option>
                                                <option value="2">Moderator</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password Confirmation</Form.Label>
                                            <Form.Control type="password" placeholder="Password Confirmation" onChange={handleChange("password2")} value={password2} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </Aux>
    )
}
