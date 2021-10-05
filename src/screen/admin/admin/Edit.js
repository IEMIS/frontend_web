import React from 'react'
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {read, edit } from './api';
import { useParams, Redirect } from "react-router-dom";
import { isAuthenticated } from '../../Auth/admin/api';

export default function Edit() {
    let { id } = useParams();
    const [values, setValues] = React.useState({
        firstName:"",
        lastName:"",
        middleName:"",
        phone:"",
        email:"",
        designation:"",
        level:"",
        loading:false,
        redirectToPage:false,
        error:false,
        reload:false,
        loadingBtn:false,
        token:"",
    })
    const {firstName, designation, lastName, middleName, phone, email, level, error, loading, reload, redirectToPage, loadingBtn } = values
    const handleChange = name=>event=>{
        setValues({...values, [name]:event.target.value});
    }
    const submit = event =>{
        event.preventDefault();
        setValues({...values, loadingBtn:true})
        if(firstName===""){ 
            setValues({...values, loadingBtn:false})
            return Swal.fire('Oops...', 'Admin first Name is required', 'error');
        }
        if(lastName===""){ 
            setValues({...values, loadingBtn:false})
            return Swal.fire('Oops...', 'Admin Last Name is required', 'error');
        }
        if(email===""){ 
            setValues({...values, loadingBtn:false})
            return Swal.fire('Oops...', 'Email is required', 'error');
        }
        if(phone===""){ 
            setValues({...values, loadingBtn:false})
            return Swal.fire('Oops...', 'Phone Number is required', 'error');
        }
        handleUpdate();
    }

    const handleUpdate =async ()=>{
        const user = {firstName, lastName, designation, middleName, phone, email, level}
        const Auth = isAuthenticated();
        const data = await edit(id, user, Auth.token);
        if(!data){
            Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
            return setValues({...values, loadingBtn:false})
        }
        if(data.error){
            Swal.fire('Oops...', data.error, 'error')
            return setValues({...values, loadingBtn:false})
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
                animation: true,
                type: 'success',
                title: data.message
            })
           setValues({...values, loadingBtn:false, redirectToPage:true})
           return Swal.fire('saved...', data.message, 'success')
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

    React.useEffect(() => {
        //let ignore = false;
        const bootstrap = async ()=>{
            const Auth = isAuthenticated();
            setValues(v => ({...v, loading:true}))
            const data = await read(id, Auth.token);
            ///if (!ignore){
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
                    setValues(v => ({...v, loading:false, error:false, firstName:data.data.firstName, lastName:data.data.lastName, phone:data.data.phone, middleName:data.data.middleName, email:data.data.email, level:data.data.level, designation:data.data.designation}))
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
            //}
         
        }
        bootstrap()
        //return () => { ignore = true };
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
                                <Card.Title as="h3">Update the admin data</Card.Title>
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
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Designation </Form.Label>
                                                    <Form.Control type="text" placeholder="Director of Teacher Education" onChange={handleChange("designation")} value={designation} />
                                                </Form.Group>  
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
                                            {
                                                    loadingBtn ? <Button variant="outline-secondary" disabled>wait ......</Button> : <Button variant="primary" onClick={submit}  >Update Admin Data ..</Button>
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
