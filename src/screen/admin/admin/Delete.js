import React from 'react'
import {Row, Col, Card, Button,} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {  remove} from './api';
//import { Redirect,  useParams} from 'react-router-dom';
import { useParams, Redirect } from "react-router-dom";

export default function Delete(props) {

    let { id } = useParams();

    const [values, setValues] = React.useState({
        redirectToPage:false,
        reload:false,
        error:false
    })
    const {redirectToPage, reload, error} = values;

    const bootstrap = async ()=>{
        const data = await remove(id);
        if(!data){
            Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
            return setValues({...values, loading:false, error:true})
        }

        if(data.error){
            Swal.fire('Oops...', data.error, 'error')
            return setValues({...values, loading:false, error:true})
        }

        if(data.message){
            Swal.fire('Oops...', data.message, 'success')
            return setValues({...values, redirectToPage:true, loading:false, error:false})
        }
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
                                <Card.Title as="h3">Error in Delete user .</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h1>Admin data Failed to delete, Try again <Button variant="primary" onClick={handleReload}>Reload</Button> </h1>
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
        setValues({...values, error:false, reload:!reload})  
    }
    React.useEffect(() => {
        bootstrap()
        //effect
        return () => {
            //bootstrap()
            //cleanup
        }
    },[])
    return (
        <Aux>
            {redirectUser()}
            {isError()}
        </Aux>
    )
}