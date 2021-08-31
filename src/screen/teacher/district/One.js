import React from 'react'
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import {Link, useParams, Redirect} from 'react-router-dom'
import Swal from 'sweetalert2'

import { read } from './api';
import Aux from "../../../hoc/_Aux";
import { isAuthenticated } from '../../Auth/admin/api';

export default function One() {
    let { id } = useParams();

    const [values, setValues] = React.useState({
        code:"",
        names:"",
        phone:"",
        address:"",
        email:"",
        status:true,
        loading:false,
        loadingBtn:false,
        redirectToPage:false,
        error:false,
        reload:false,   
    })

    const {code, names, phone, email, address, error, loading, reload, redirectToPage,} = values

    const handleChange = name=>event=>{
        setValues({...values, [name]:event.target.value})
    }

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
                                        <h1>Requesting for District  data</h1>
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
                                        <h1>failed to read district data, Try again <Button variant="primary" onClick={handleReload}>Reload</Button> </h1>
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
    const redirectUser = () => {
        if (redirectToPage){
            return <Redirect to="/admin/districts/read" />
        }
    };

    React.useEffect(() => {
        const bootstrap = async ()=>{
            const Auth = await isAuthenticated()
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
                    const {code, names, email, phone,address } = data.data;
                    setValues(v => ({...v, loading:false, error:false, code, phone,email,names, address }))
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
        bootstrap()
    },[reload, id])

    return (
        <Aux>
            {redirectUser()}
            {isError()}
            {
                loading ? isLoading() :
                <>
                    <Row>
                        <Col>
                            <Card.Header>
                                <Card.Title><Link to="/admin/districts/read" > Read Districts </Link></Card.Title>
                            </Card.Header>
                        </Col>
                    </Row>
                    <Row>
                            <Col>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h3">Single District Details</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col md={6}>
                                                <Form>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>District Code</Form.Label>
                                                        <Form.Control type="text" placeholder="district code" onChange={handleChange("code")} value={code} disabled />
                                                    </Form.Group>

                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>District Name</Form.Label>
                                                        <Form.Control type="text" placeholder="district name" onChange={handleChange("names")} value={names} />
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Phone </Form.Label>
                                                        <Form.Control type="text" placeholder="district phone" onChange={handleChange("phone")} value={phone} />
                                                    </Form.Group>
                                                </Form>
                                            </Col>
                                            <Col md={6}>
                                            <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Address </Form.Label>
                                                        <Form.Control type="text" placeholder="building/house name, city" onChange={handleChange("address")} value={address} />
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Officer-in- charge</Form.Label>
                                                        <Form.Control type="text" placeholder="Education District ID" />
                                                    </Form.Group>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>email </Form.Label>
                                                    <Form.Control type="email" placeholder="email" onChange={handleChange("email")} value={email}/>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                    </Row>
                </>
            } 
        </Aux>
    )
}
