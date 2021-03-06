import React from 'react'
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import Swal from 'sweetalert2'
import { useParams, Redirect, Link } from "react-router-dom";

import { edit, read } from './api';
import Aux from "../../../hoc/_Aux";
import { isAuthenticated } from '../../Auth/admin/api';


export default function Edit() {
    let { id } = useParams();

    const [values, setValues] = React.useState({
        code:"",
        names:"",
        phone:"",
        address:"",
        email:"",
        staffs:"",
        status:"",
        loading:false,
        loadingBtn:false,
        redirectToPage:false,
        error:false,
        reload:false,
        token:'00033'
        
    })

    const {code, names, phone, email,staffs, address, status, error, loading, loadingBtn, reload, redirectToPage} = values

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

    const submit = event =>{
        event.preventDefault();
        setValues({...values, loadingBtn:true})
        if(code===""){ 
            setValues({...values, loadingBtn:false})
            return Swal.fire('Oops...', 'District code is required', 'error');
        }
        if(names===""){ 
            setValues({...values, loadingBtn:false})
            return Swal.fire('Oops...', 'District name is required', 'error');
        }
        if(phone===""){ 
            setValues({...values, loadingBtn:false})
            return Swal.fire('Oops...', 'District Phone number is required', 'error');
        }
        if(address===""){ 
            setValues({...values, loadingBtn:false})
            return Swal.fire('Oops...', 'District address is required', 'error');
        }
        if(email===""){ 
            setValues({...values, loadingBtn:false})
            return Swal.fire('Oops...', 'District email is required', 'error');
        }
        handleUpdate();
    }

    const handleUpdate =async ()=>{
        const user = {code, names, staffs, phone, email, address, status}
        const Auth = isAuthenticated()
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
            Swal.fire('Saved...', data.message, 'success')
            setValues({...values, loadingBtn:false, redirectToPage:true});
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

    const redirectUser = () => {
        if (redirectToPage){
            return <Redirect to="/admin/districts/read" />
        }
    };

    React.useEffect(() => {
        let ignore = false;
        const bootstrap = async ()=>{
            const Auth = await isAuthenticated()
            setValues(v => ({...v, loading:true}))
            const data = await read(id,Auth.token);
            if (!ignore){
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
                        showClass: true,
                        type: 'success',
                        title: data.message
                    })
                } 
            }
        }
        bootstrap()
        return () => { ignore = true };
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
                            <Card.Title><Link to="/admin/districts/read" > Read Districts (Go Back) </Link></Card.Title>
                        </Card.Header>
                    </Col>
                </Row>
                <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h3">Update the District</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col md={6}>
                                            <Form>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>District Code</Form.Label>
                                                    <Form.Control type="text" placeholder="district code" onChange={handleChange("code")} value={code}  />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>District Name</Form.Label>
                                                    <Form.Control type="text" placeholder="district name" onChange={handleChange("names")} value={names} />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Phone </Form.Label>
                                                    <Form.Control type="text" placeholder="district phone" onChange={handleChange("phone")} value={phone} />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Address </Form.Label>
                                                    <Form.Control type="text" placeholder="building/house name, city" onChange={handleChange("address")} value={address} />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                        <Col md={6}>
                                        <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Status </Form.Label>
                                                    <Form.Control type="text" placeholder="School Census Status" onChange={handleChange("status")} value={status} />
                                                    {/*===only admin can select staff list here and it should be done with edit section===== */}
                                                </Form.Group>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Officer-in- charge</Form.Label>
                                                    <Form.Control type="text" placeholder="Education District officer" onChange={handleChange("staffs")} value={staffs} />
                                                </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Label>email </Form.Label>
                                                <Form.Control type="email" placeholder="email" onChange={handleChange("email")} value={email}/>
                                            </Form.Group>
                                            {
                                                   
                                                    loadingBtn ? <Button variant="outline-secondary" disabled>wait ......</Button> : <Button variant="primary" onClick={submit}  >Update District Data ..</Button> 
                                                    
                                                    //loadingBtn ? "loading ..." : <Button variant="primary" onClick={submit}  >Update..</Button>
                                                }
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
