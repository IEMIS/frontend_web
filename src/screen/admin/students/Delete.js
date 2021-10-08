import React from 'react'
import {Row, Col, Card, Button,} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {  remove} from './api';
import { useParams, Redirect } from "react-router-dom";
import { isAuthenticated } from '../../Auth/admin/api';

export default function Delete(props) {
    let { id } = useParams();
    const [reload, setreload] = React.useState(false)
    const [error, seterror] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [redirectToPage, setRedirectToPage] = React.useState(false)

    const redirectUser = () => {
        if (redirectToPage){
            return <Redirect to="/admin/students/read" />
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

    const handleReload = event =>{
        event.preventDefault();
        seterror(false)
        setreload(!reload)
    }
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

    
    React.useEffect(() => {
        const bootstrap = async ()=>{
            const Auth = await isAuthenticated()
            const data = await remove(id, Auth.token);
            //console.log({data})
            if(!data){
                Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
                setLoading(false)
                return seterror(true)   
            }
            if(data.error){
                Swal.fire('Oops...', data.error, 'error')
                setLoading(false)
                return seterror(true)
                
            }
            if(data.message){
                setLoading(false)
                setRedirectToPage(true);
                Swal.fire('Successful', data.message, 'success')
            }
        }

        Swal.fire({
            title: 'Are you sure you want to permanently delete this selected record?',
            allowOutsideClick:false,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Yes`,
            denyButtonText: `No`,
            customClass: {
                cancelButton: 'order-1 right-gap',
                confirmButton: 'order-2',
                denyButton: 'order-3',
            }
        }).then((result) => {
            if (result.isConfirmed) {
            //Swal.fire('Delete confirm', '', 'success');
            bootstrap()
            } else if (result.isDenied) {
            //Swal.fire('Action canceled', '', 'info');
            setRedirectToPage(true)
            }
        })
    },[reload, id])

    return (
        <Aux>
            {redirectUser()}
            {isError()}
            {isLoading()}
        </Aux>
    )
}