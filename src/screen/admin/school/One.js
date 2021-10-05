import React from 'react'
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import { useParams, Redirect, Link } from "react-router-dom";
import moment from 'moment'; 
import { read} from './api';
import { isAuthenticated } from '../../Auth/admin/api';

export default function One() {
    let { id } = useParams();

    const [values, setValues] = React.useState({
        loading:true,
        redirectToPage:false,
        error:false,
        reload:false,
        load:{},
    })
    const { loading, error, reload, redirectToPage, load } = values

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
            return <Redirect to="/admin/schools/read" />
        }
    };
 

    React.useEffect(() => {
        const bootstrap = async () =>{
            const Auth = await isAuthenticated();
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
                setValues(v => ({...v, loading:false, error:false, load:data.data[0]}));
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
    }, [id])

    const isEmpty = (empty) =>{
        return Object.keys(empty).length === 0 && empty.constructor === Object
    }

    return (
        <Aux>
            {redirectUser()}
            { 
                loading ? isLoading() : 
                (<>
                    <Row>
                        <Col>
                            <Card.Header>
                                <Card.Title><Link to="/admin/schools/read"> Read School (Go Back) </Link></Card.Title>
                            </Card.Header>
                        </Col>
                    </Row>
                    <Row>
                        {
                            isEmpty(load) ? "" :
                            (
                                <Col>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h3">School detail</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col md={6}>
                                                <Form>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>School Code</Form.Label>
                                                        <Form.Control type="text" placeholder="school code" value={load.code} disabled />
                                                    </Form.Group>

                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>School Name</Form.Label>
                                                        <Form.Control type="text" placeholder="school name"  value={load.names} />
                                                    </Form.Group>
                                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                                        <Form.Label>District</Form.Label>
                                                        <Form.Control type="text"  value={load.fromDistrict[0].names} />
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Address </Form.Label>
                                                        <Form.Control type="text" placeholder="location, province e.g Veisaru Road, Savusavu"  value={load.contact[0].address} />
                                                    </Form.Group>
                                                
                                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                                        <Form.Label>Locality</Form.Label>
                                                        <Form.Control type="text"  value={load.contact[0].province} />
                                                            
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Mailing Address </Form.Label>
                                                        <Form.Control type="text" placeholder="P.O BOX 123, Tavua"  value={load.contact[0].mailBox} />
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Fax</Form.Label>
                                                        <Form.Control type="text" placeholder="school fax"  value={load.contact[0].fax} />
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>School Head</Form.Label>
                                                        <Form.Control type="text" placeholder="staff ID"  value={load.headID} />
                                                    </Form.Group>
                                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Education Level</Form.Label>
                                                <Form.Control type="text" value={load.eduLevel} />
                                            </Form.Group>
                                                </Form>
                                            </Col>
                                            <Col md={6}>
                                            <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Estab. Year </Form.Label>
                                                        <Form.Control type="text"  value={moment(load.estabYear,"YYYY-MM-DDTHH:mm:ss.SSSSZ").format('LL')} />
                                                    </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                    <Form.Label>Ownership</Form.Label>
                                                    <Form.Control type="text" value={load.ownership} />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                    <Form.Label>School Category</Form.Label>
                                                    <Form.Control type="text" value={load.schoolCat} />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                    <Form.Label>School Type</Form.Label>
                                                    <Form.Control type="text"  value={load.schoolType}>
                                                    </Form.Control>
                                            </Form.Group>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>email </Form.Label>
                                                    <Form.Control type="email" placeholder="email"  value={load.email}/>
                                                </Form.Group>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Phone </Form.Label>
                                                    <Form.Control type="text" placeholder="official school phone number"  value={load.contact[0].phone} />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Creation time</Form.Label>
                                                    <Form.Control type="text" placeholder="Created on"  value={moment(load.createdAt,"YYYY-MM-DDTHH:mm:ss.SSSSZ").format('LLLL')} />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Last Update</Form.Label>
                                                    <Form.Control type="text" placeholder="Last update"  value={moment(load.updatedAt,"YYYY-MM-DDTHH:mm:ss.SSSSZ").format('LLLL')} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            )
                        }
                    </Row>
                </>)
            }
            {isError()}

        </Aux>
    )
}
