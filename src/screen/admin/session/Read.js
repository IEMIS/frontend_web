import React from 'react';
import {Row, Col, Card, Button } from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import { reads} from './api';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Datatable from 'react-bs-datatable'; 
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
                                        <h1>Session data Failed to Load, you can refresh <Button variant="primary" onClick={handleReload}>Reload</Button> </h1>
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
                                    <h1>Fetching the list of Session</h1>
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

    const boot = async () => {
        setLoading(true)
        const Auth = isAuthenticated();
        const data = await reads(Auth.token);
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

    const ViewData = () =>{
        return(
          <Aux>
            <h1>Manage Session data</h1>
            <hr />
            {
              datas.length > 0 ?  
              <Datatable 
                tableHeaders={header} 
                tableBody={body(datas)} 
                rowsPerPage={10}
                rowsPerPageOption={[5, 10, 15, 20, 30, 40, 50, 100]}
              />
              : <h1>No Data </h1>
            }
          </Aux>
        )
      }


      const header = [
        { title: 'SN', prop: 'id', filterable: true, sortable: true, },
        { title: 'Session', prop: 'name', filterable: true, sortable: true, },
        { title: 'Session Description', prop: 'slung', filterable: true, sortable: true, },
        { title: 'Details', prop: 'edit', cell: row =><BtnEdit to={`/admin/session/edit/${row.edit}`} > Edit</BtnEdit>},
        { title: 'Details', prop: 'delete', cell: row =><BtnDelete to={`/admin/session/delete/${row.delete}`} > Delete </BtnDelete>},
        { title: 'Details', prop: 'detail', cell: row =><BtnDetail to={`/admin/session/read/${row.detail}`} > Detail </BtnDetail>},
      ];
    
      const body = (dat) => {
        return dat.map((data, index)=>{
          return{
            id:index +1,
            name:data.name,
            slung:data.slung,
            edit:data._id,
            delete:data._id,
            detail:data._id,
          }
        })
      };


    return (
        <Aux>
            {error ? isError() : loading ?  isLoading() :ViewData()}
        </Aux>
    )
}


