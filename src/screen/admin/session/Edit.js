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
        name:"",
        slung:"",
        loading:false,
        redirectToPage:false,
        error:false,
        reload:false,
        loadingBtn:false,
        token:"",
    })
    const {name, slung, error, loading, reload, redirectToPage, loadingBtn } = values
    const handleChange = nave =>event=>{
        setValues({...values, [nave]:event.target.value});
    }
    const submit = event =>{
        event.preventDefault();
        setValues({...values, loadingBtn:true})
        if(name===""){ 
            setValues({...values, loadingBtn:false})
            return Swal.fire('Oops...', 'Session is required', 'error');
        }
        if(slung===""){ 
            setValues({...values, loadingBtn:false})
            return Swal.fire('Oops...', 'Session description is required', 'error');
        }
        handleUpdate();
    }

    const handleUpdate =async ()=>{
        const user = {name, slung,}
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
            return <Redirect to="/admin/session/read" />
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
                                        <h1>Requesting for Session  data</h1>
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
                                        <h1>Session data failed to read, Try again <Button variant="primary" onClick={handleReload}>Reload</Button> </h1>
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
                    setValues(v => ({...v, loading:false, error:false, name:data.data.name, slung:data.data.slung }))
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
                                <Card.Title as="h3">Update the Session data</Card.Title>
                            </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col md={6}>
                                            <Form>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Session</Form.Label>
                                                    <Form.Control type="text" placeholder="Session" onChange={handleChange("name")} value={name} />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Session Description</Form.Label>
                                                    <Form.Control type="text" placeholder="Session Description" onChange={handleChange("slung")} value={slung} />
                                                </Form.Group>
                                                {
                                                    loadingBtn ? <Button variant="outline-secondary" disabled>wait ......</Button> : <Button variant="primary" onClick={submit}  >Update Session Data ..</Button>
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
