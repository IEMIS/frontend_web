import React from 'react'
import {Row, Col, Card, Form, Button} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";

export default function Create() {

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
    })
    const {firstName, lastName, middleName, phone, email, password, password2, level} = values

    const handleChange = name=>event=>{
        setValues({...values, [name]:event.target.value})
        //setValues({ ...values, error: false, [name]: event.target.value });
    }

    const submit = event =>{
        event.preventDefault()

        handleCreate();
    }

    const handleCreate = ()=>{
        const user = {firstName, lastName, middleName, phone, email, password, password2, level}
        console.log({user})
    }

    return (
        <Aux>
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
                                                <Form.Control type="text" placeholder="Middle name" onChange={handleChange("phone")} value={phone} />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" onChange={handleChange("password")} value={password} />
                                            </Form.Group>
                                        
                                            <Button variant="primary" onClick={submit}  >
                                                Submit
                                            </Button>
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
