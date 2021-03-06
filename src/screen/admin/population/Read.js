import React from 'react';
import {Row, Col, Card, Button } from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import { reads} from './api';
import { Link } from 'react-router-dom';
import SortableTbl from "react-sort-search-table";
import styled from "styled-components";
import { isAuthenticated } from '../../Auth/admin/api';

export default function Read() {
    const [datas, setDatas] = React.useState([]);
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [reload, setReload] = React.useState(false)

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
                                        <h1>Projected Population data Failed to Load, you can refresh <Button variant="primary" onClick={handleReload}>Reload</Button> </h1>
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
                                <Card.Title as="h5">Wait loading data ...</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                    <h1>Fetching the Population List </h1>
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

    let columun = [
        "year",
        "district",
        "male3",
        "female3",
        "total3",
        "male4",
        "female4",
        "total4",
        "edit",
        "detail",
        "delete",
    ];
    let tableHead = [
        "Pop. Year",
        "District",
        "Age 5 (M)",
        "Age 5 (F)",
        "Age 5 (T)",
        "Age 6 (M)",
        "Age 6 (F)",
        "Age 6 (T)",
        "Edit",
        "Details",
        "Delete",
    ];
    const BtnEdit = styled(Link)`
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 3px;
        background-color: #f0ad4e;
        color: #fff;
    `;
    const BtnDetail = styled(Link)`
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 3px;
        background-color: #3F4D67;
        color: #fff;
    `;

    const BtnDelete = styled(Link)`
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 3px;
        background-color: #d43f3a;
        color: #fff;
    `;

    const DetailsComponent = (props) => {
        const { rowData} = props;
        return (
            <td  variant="primary"><BtnDetail to={`/admin/population/read/${rowData._id}`}> Details </BtnDetail></td>
        );
    };

    const DeleteComponent = (props) => {
        const { rowData} = props;
        return (
            <td variant="danger"><BtnDelete to={`/admin/population/delete/${rowData._id}`}>Delete</BtnDelete></td>
        );
    };

    const EditComponent = (props) => {
        const { rowData} = props;
        return (
            <td ><BtnEdit to={`/admin/population/edit/${rowData._id}`}>Edit</BtnEdit></td>
        );
    };

    const ViewData = () =>{
        if(datas && datas.length > 0){
            return(
                <Aux>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h5">Projected Population Data</Card.Title>
                                    <span className="d-block m-t-5">manage  <code>the </code> Class data here</span>
                                </Card.Header>
                                <Card.Body>
                                    <SortableTbl
                                        tblData={datas}
                                        tHead={tableHead}
                                        customTd={[
                                            { custd: DetailsComponent, keyItem: "detail" },
                                            { custd: EditComponent, keyItem: "edit" },
                                            { custd: DeleteComponent, keyItem: "delete" },
                                        ]}
                                        dKey={columun}
                                        search={true}
                                    />
                                
                                </Card.Body>
                                
                            </Card>
                        </Col>
                    </Row>
                </Aux>
            )        
        }
    }

    const boot = async () => {
        setLoading(true)
        const Auth = isAuthenticated();
        const data = await reads(Auth.token);
        console.log({Auth, data})
        if(!data){
            Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
            setLoading(false)
            setError(true)
            return 
        }
        if(data.error){
            Swal.fire('Oops...', data.error, 'error')
            setLoading(false)
            setError(true)
            return
        }
        if(data.message){
            setLoading(false)
            setError(false)
            setDatas(data.data)
            Swal.fire('Successful', data.message, 'success');
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
        }
       
    }

    React.useEffect(() => {
        boot()
    },[reload])


    return (
        <Aux>
            {isLoading()}
            {isError()}
            {ViewData()}
        </Aux>
    )
}


