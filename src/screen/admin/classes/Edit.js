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
        classCode:"",
        names:"",
        loading:false,
        redirectToPage:false,
        error:false,
        reload:false,
        loadingBtn:false,
    })
    const {classCode, names, error, loading, reload, redirectToPage, loadingBtn } = values
    const handleChange = name=>event=>{
        setValues({...values, [name]:event.target.value});
    }
    const submit = event =>{
        event.preventDefault();
        setValues({...values, loadingBtn:true})
        if(classCode===""){ 
            setValues({...values, loadingBtn:false})
            return Swal.fire('Oops...', 'class code  is required', 'error');
        }
        if(names===""){ 
            setValues({...values, loadingBtn:false})
            return Swal.fire('Oops...', 'Class Name is required', 'error');
        }
        handleUpdate();
    }

    const handleUpdate =async ()=>{
        const user = {classCode, names}
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
            return <Redirect to="/admin/class/read" />
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
                                        <h1>Requesting for Class  data</h1>
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
                                        <h1>Class data failed to read, Try again <Button variant="primary" onClick={handleReload}>Reload</Button> </h1>
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
        const bootstrap = async ()=>{
            const Auth = isAuthenticated();
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
                    setValues(v => ({...v, loading:false, error:false, classCode:data.data.classCode, names:data.data.names}))
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
                                <Card.Title as="h3">Update the Class data</Card.Title>
                            </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col md={6}>
                                            <Form>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Class name</Form.Label>
                                                    <Form.Control type="text" placeholder="First name" onChange={handleChange("names")} value={names} />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Class Code</Form.Label>
                                                    <Form.Control type="text" placeholder="Middle name" onChange={handleChange("classCode")} value={classCode} />
                                                </Form.Group>

                                                {
                                                    loadingBtn ? <Button variant="outline-secondary" disabled>wait ......</Button> : <Button variant="primary" onClick={submit}  >Update Class Data</Button>
                                                }
                                            </Form>
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
