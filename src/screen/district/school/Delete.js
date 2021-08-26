import React from 'react'
import {Row, Col, Card, Button,} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import { remove} from './api';
import { useParams, Redirect } from "react-router-dom";
import { isAuthenticated } from '../../Auth/district/api';

export default function Delete(props) {
    let { id } = useParams();
    const [reload, setreload] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [error, seterror] = React.useState(false)
    const [redirectToPage, setRedirectToPage] = React.useState(false)

    const redirectUser = () => {
        if (redirectToPage){
            return <Redirect to="/district/schools/read" />
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
                                <Card.Title as="h3">Error in Deleting School .</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h1>School data failed to delete, Try again <Button variant="primary" onClick={handleReload}>Reload</Button> </h1>
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

    const isLoading = () => {
        if (loading){
            return (
                <Aux>
                    <Row>
                        <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h3">Wait loading data ...</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                    <h1>Wait !!! </h1>
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
        seterror(false)
        setLoading(true)
        setreload(!reload)
    }

    
    React.useEffect(() => {
        const bootstrap = async ()=>{
            setLoading(true)
            const Auth = await isAuthenticated()
            const data = await remove(id, Auth.token);
            if(!data){
                Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
                seterror(true)
                setLoading(false)
                return
            }
            if(data.error){
                Swal.fire('Oops...', data.error, 'error')
                seterror(true)
                setLoading(false)
                return
            }
    
            if(data.message){
                //Swal.fire('Successful', data.message, 'success')
                setRedirectToPage(true);
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
        bootstrap();
    },[reload, id])

    return (
        <Aux>
            {redirectUser()}
            {isLoading()}
            {isError()}
        </Aux>
    )
}