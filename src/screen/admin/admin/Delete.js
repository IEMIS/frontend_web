import React from 'react'
import {Row, Col, Card, Button,} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {  remove} from './api';
//import { Redirect,  useParams} from 'react-router-dom';
import { useParams, Redirect } from "react-router-dom";

export default function Delete(props) {

    let { id } = useParams();
    const [reload, setreload] = React.useState(false)
    const [error, seterror] = React.useState(false)
    const [redirectToPage, setRedirectToPage] = React.useState(false)

    /*
    const [values, setValues] = React.useState({
        redirectToPage:false,
        reload:false,
        error:false
    })
    */
    //const {redirectToPage, reload, error} = values;

 

    const redirectUser = () => {
        if (redirectToPage){
            return <Redirect to="/admin/users/read" />
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
                                        <h1>Admin data failed to delete, Try again <Button variant="primary" onClick={handleReload}>Reload</Button> </h1>
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

    const bootstrap = async ()=>{
        const data = await remove(id);
        if(!data){
            Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
            seterror(true)  
        }

        if(data.error){
            Swal.fire('Oops...', data.error, 'error')
            seterror(true)
            //return
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
            setRedirectToPage(true)
            return Swal.fire('Great', data.message, 'success');
        }  
    }

    
    React.useEffect(() => {
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
        </Aux>
    )
}
