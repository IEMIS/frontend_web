import React from 'react'
import {Row, Col, Card, Form, Button} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {Redirect} from 'react-router-dom'
import { create } from './api';


export default function Create() {

    const [values, setValues] = React.useState({
        code:"",
        names:"",
        phone:"",
        address:"",
        email:"",
        status:"",
        password:"",
        password2:"",
        loading:false,
        redirectToPage:false,
    })
    const {code, names, phone, email, password, password2, address, status, loading, redirectToPage} = values

    const handleChange = name=>event=>{
        setValues({...values, [name]:event.target.value})
    }

    const submit = event =>{
        event.preventDefault();
        setValues({...values, loading:true})
        if(code===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'District code is required', 'error');
        }
        if(names===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'District name is required', 'error');
        }
        if(phone===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'District Phone number is required', 'error');
        }
        if(address===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'District address is required', 'error');
        }
        if(email===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'District email is required', 'error');
        }
        if(password===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Password can not be an empty value', 'error');
        }

        if(password !== password2) {
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Password must match each other', 'error');
        }

        handleCreate();
    }

    const handleCreate =async ()=>{
        const user = {code, names, phone, email, password, password2, address, status}
        const data = await create(user);
        console.log(data);
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
            setValues({...values, loading:false, redirectToPage:true});

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
            return <Redirect to="/admin/districts/create" />
        }
    };

    React.useEffect(() => {
        const getDistrictCode = async () =>{
            //call the endpoint for code 
            let dcode = 'DS001'
            setValues(v=>({...v, code:dcode}))
        }
        getDistrictCode();
        /*
        return () => {
            //cleanup
        }
        */
    }, [])

    return (
        <Aux>
            {redirectUser()}
            <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h3">Add New District</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>District Code</Form.Label>
                                                <Form.Control type="text" placeholder="district code" onChange={handleChange("code")} value={code} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>District Name</Form.Label>
                                                <Form.Control type="text" placeholder="district name" onChange={handleChange("names")} value={names} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Phone </Form.Label>
                                                <Form.Control type="text" placeholder="district phone" onChange={handleChange("phone")} value={phone} />
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
                                    <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Address </Form.Label>
                                                <Form.Control type="text" placeholder="building/house name, city" onChange={handleChange("address")} value={address} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Officer-in- charge</Form.Label>
                                                <Form.Control type="text" placeholder="Education District ID" onChange={handleChange("status")} value={status} />
                                            </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>email </Form.Label>
                                            <Form.Control type="email" placeholder="email" onChange={handleChange("email")} value={email}/>
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
