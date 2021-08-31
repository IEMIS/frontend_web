import React from 'react'
import {Row, Col, Card, Button,} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import { remove } from './api';
import { useParams, Redirect } from "react-router-dom";
import { isAuthenticated } from '../../Auth/admin/api';

export default function Delete(props) {
    let { id } = useParams();
    const [reload, setreload] = React.useState(false)
    const [error, seterror] = React.useState(false)
    const [loading, setloading] = React.useState(true)
    const [redirectToPage, setRedirectToPage] = React.useState(false)

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
                                        <h1>Deleting Class </h1>
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
                                <Card.Title as="h5">Error in Deleting user .</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h1>Class data failed to delete, Try again <Button variant="primary" onClick={handleReload}>Reload</Button> </h1>
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
        setloading(true)
        setreload(!reload)
    }

    React.useEffect(() => {
        const bootstrap = async ()=>{
            const Auth = await isAuthenticated();
            setloading(true)
            const data = await remove(id, Auth.token);
            if(!data){
                Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
                setloading(false)
                return seterror(true)  
            }
            if(data.error){
                Swal.fire('Oops...', data.error, 'error')
                setloading(false)
                return seterror(true)
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
                    showClass: true,
                    type: 'success',
                    title: data.message
                })
                setloading(false)
                setRedirectToPage(true)
                return Swal.fire('Great', data.message, 'success');
            }  
        }

        Swal.fire({
            title: 'Do you sure to delete this user?',
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
            Swal.fire('Delete confirm', '', 'success');
            bootstrap()
            } else if (result.isDenied) {
            Swal.fire('Action canceled', '', 'info');
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
