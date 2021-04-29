
import React from 'react';
import {Row, Col, Card, Button, Table} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import { reads} from './api';


export default function Read() {
    const [values, setValues] = React.useState({
        datas:[],
        loading: false,
        error:false,
        reload:false,
    })

    const {datas,loading, error, reload } = values;

    const bootstrap = async () =>{
        setValues({...values, loading:true})
        const data = await reads();
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
            setValues({...values, datas:data.data, loading:false, error:false})
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
                                    <h1>Admin data is loading </h1>
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
                                <Card.Title as="h3">Error in Loading Data.</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h1>Admin data Failed to Load, you can refresh <Button variant="primary" onClick={handleReload}>Reload</Button> </h1>
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
        setValues({...values, reload:!reload})  
    }

    const ViewData = () =>{
        if(datas && datas.length > 0){
            return(
                <Aux>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h5">Admin users</Card.Title>
                                    <span className="d-block m-t-5">manage  <code>the </code> Admin data here</span>
                                </Card.Header>
                                <Card.Body>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Edit</th>
                                                <th>Detail</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        {
                                            datas.map((data, i)=>{
                                                console.log(data)
                                                return(
                                                    <tbody>
                                                        <tr key={i}>
                                                            <th scope="row">{data.firstName}</th>
                                                            <td>{data.lastName}</td>
                                                            <td>{data.email}</td>
                                                            <td>{data.phone}</td>
                                                            <td>Edit</td>
                                                            <td>Details</td>
                                                            <td>Delete</td>
                                                        </tr>
                                                    </tbody>

                                                )
                                            })
                                        }
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Aux>
            )        
        }else{
            /*
            return (
                <Aux>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h5">No record</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Aux>
            )
            */
        }
    }

    React.useEffect(() => {
        bootstrap()
        return () => {
            bootstrap()
        }
    },[reload])

    return (
        <Aux>
            {isLoading()}
            {isError()}
            {ViewData()}
        </Aux>
    )
}
