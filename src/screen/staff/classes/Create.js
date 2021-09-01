
import React from 'react'
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {Redirect} from 'react-router-dom'
import { create } from './api';
import { isAuthenticated } from '../../Auth/admin/api';


export default function Create() {
    const [values, setValues] = React.useState({
        classCode:"",
        names:"",
        loading:false,
        redirectToPage:false,
    })
    const {classCode, names, loading, redirectToPage} = values

    const handleChange = name=>event=>{
        setValues({...values, [name]:event.target.value})
    }

    const submit = event =>{
        event.preventDefault();
        setValues({...values, loading:true})
        if(classCode===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Class code required', 'error');
        }
        if(names===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Class name required', 'error');
        }
        handleCreate();
    }

    const handleCreate =async ()=>{
        const user = {classCode, names}
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
                title: data.message,
            })
        }
    }

    const redirectUser = () => {
        if (redirectToPage){
            return <Redirect to="/admin/class/create" />
        }
    };

    return (
        <Aux>
            {redirectUser()}
            <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h3">Add New Class</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Class Code</Form.Label>
                                                <Form.Control type="text" placeholder="First name" onChange={handleChange("classCode")} value={classCode} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Class Name</Form.Label>
                                                <Form.Control type="text" placeholder="Middle name" onChange={handleChange("names")} value={names} />
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
