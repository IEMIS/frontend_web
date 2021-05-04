
import React from 'react';
import {Row, Col, Card, Button, Table} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import { reads} from './api';
import { Link } from 'react-router-dom';


export default function Read() {
    const [datas, setDatas] = React.useState([]);
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [reload, setReload] = React.useState(false)

    /*
    const [values, setValues] = React.useState({
        datas:[],
        loading: false,
        error:false,
        reload:false,
    })
    */

    //const {datas,loading, error, reload } = values;
    /*
    const bootrap = async () =>{
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
    */

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
        setError(false)
        setLoading(true)
        setReload(!reload) 
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
                                                return(
                                                    <tbody key={i}>
                                                        <tr key={i}>
                                                            <th scope="row">{data.firstName}</th>
                                                            <td>{data.lastName}</td>
                                                            <td>{data.email}</td>
                                                            <td>{data.phone}</td>
                                                            <td ><Link to={`/admin/users/edit/${data._id}`}>Edit</Link></td>
                                                            <td  variant="primary"><Link to={`/admin/users/read/${data._id}`}>Detail</Link></td>
                                                            <td  variant="danger"><Link to={`/admin/users/delete/${data._id}`}>Delete</Link></td>
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

    const boot = async () => {
        //setValues({...values, loading:true})
        setLoading(true)
        const data = await reads();
        if(!data){
            Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
            setLoading(false)
            setError(true)
            //return setValues({...values, loading:false, error:true})
            return 
        }
        if(data.error){
            Swal.fire('Oops...', data.error, 'error')
            setLoading(false)
            setError(true)
            return
            //return setValues({...values, loading:false, error:true})
        }
        if(data.message){
            setLoading(false)
            setError(false)
            setDatas(data.data)
            Swal.fire('Successful', data.message, 'success')
            //return
            //setValues({...values, datas:data.data, loading:false, error:false})
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

    React.useEffect(() => {
        boot()
        return () => {
            boot()
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
