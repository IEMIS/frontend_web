import React from 'react'
import {Row, Col, Card, Button} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import { useParams, Redirect, Link } from "react-router-dom";
import { read} from './api';
import { isAuthenticated } from '../../Auth/admin/api';

export default function One() {
    let { id } = useParams();

    const [values, setValues] = React.useState({
        loading:false,
        redirectToPage:false,
        error:false,
        reload:false,
        load:[]
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
                setValues(v => ({...v, loading:false, error:false, load:data.data}));
                return Swal.fire('Great', data.message, 'success');
            } 
        }
        bootstrap()
    }, [id])

    return (
        <Aux>
            {redirectUser()}
            {isLoading()}
            {isError()}
            <Row>
                <Col>
                    <Card.Header>
                        <Card.Title><Link to="/admin/schools/read" > Read School </Link></Card.Title>
                    </Card.Header>
                </Col>
            </Row>
            <Row>
                {
                    load.names
                }
            </Row>

        </Aux>
    )
}
