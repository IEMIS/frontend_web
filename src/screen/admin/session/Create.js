
import React from 'react'
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {Redirect} from 'react-router-dom'
import { create } from './api';
import { isAuthenticated } from '../../Auth/admin/api';


export default function Create() {
    const [values, setValues] = React.useState({
        name:"",
        slung:"",
        loading:false,
        redirectToPage:false,
    })
    const {name, slung, loading, redirectToPage} = values

    const handleChange = nave=>event=>{
        setValues({...values, [nave]:event.target.value})
    }

    const submit = event =>{
        event.preventDefault();
        setValues({...values, loading:true})
        if(name===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Session is required', 'error');
        }
        if(slung===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Session Description', 'error');
        }
        handleCreate();
    }

    const handleCreate =async ()=>{
        const user = {name, slung}
        const Auth = isAuthenticated()
        const data = await create(user, Auth.token);
        console.log({data, user})
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
            return <Redirect to="/admin/session/create" />
        }
    };

    return (
        <Aux>
            {redirectUser()}
            <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h3">Add New Session user</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Session </Form.Label>
                                                <Form.Control type="text" placeholder="session" onChange={handleChange("name")} value={name} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Session  Description</Form.Label>
                                                <Form.Control type="text" placeholder="Session Description name" onChange={handleChange("slung")} value={slung} />
                                            </Form.Group>

                                            {
                                                loading ? <Button variant="outline-secondary" disabled >Loading ..</Button>: <Button variant="primary" onClick={submit}  >Create ..</Button>
                                            }
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </Aux>
    )
}
