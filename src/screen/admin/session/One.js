import React from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {read} from './api';
import { useParams, Redirect } from "react-router-dom";
import { isAuthenticated } from '../../Auth/admin/api';

export default function One() {
    let { id } = useParams();
    const [values, setValues] = React.useState({
        name:"",
        slung:"",
        loading:false,
        redirectToPage:false,
        error:false,
        reload:false,
        loadingBtn:false,
    })
    const {name, slung, error, loading, reload, redirectToPage } = values

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
                setValues(v => ({...v, loading:false, error:false, name:data.data.name, slung:data.data.slung, }))
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

    const Back = async ()=>{
        setValues({...values, redirectToPage:true })
    }
    return (
        <Aux>
            {redirectUser()}
            {isError()}
            {isLoading()}
            <Row>
                <Col>
                    <Card.Header>
                        <Card.Title><Button variant="outline-primary" onClick={Back}>Back..</Button>  </Card.Title>
                    </Card.Header>
                </Col>
            </Row>
            <Row>
                <Card.Body>
                <div class="form-row">
            <div class="form-group col-md-6">
              <label for="Session">Session Name</label>
              <input
                type="text"
                class="form-control"
                value={name}
                readOnly
              />
            </div>
            <div class="form-group col-md-6">
              <label for="description">Session Description</label>
              <input
                type="text"
                class="form-control"
                value={slung}
                readOnly
              />
            </div>
          </div>
                </Card.Body>
            </Row>
        </Aux>
    )
}
