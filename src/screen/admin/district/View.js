
import React from 'react';
import {Row, Col, Card, Button } from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import { reads } from './api';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Datatable from 'react-bs-datatable'; 
import { isAuthenticated } from '../../Auth/admin/api';


export default function Read() {
    const [datas, setDatas] = React.useState([]);
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [reload, setReload] = React.useState(false)
    
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
                                    <h1>District List is loading </h1>
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
                                        <h1>Districts data Failed to Load, you can refresh <Button variant="primary" onClick={handleReload}>Reload</Button> </h1>
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

    const boot = async () => {
        setLoading(true)
        const Auth = await isAuthenticated()
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
            //return Swal.fire('Successful....', data.message, 'success')
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

    const ViewData = () =>{
        return(
          <Aux>
            <h1>Manage District data</h1>
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
        { title: 'Full Names', prop: 'names', filterable: true, sortable: true, },
        { title: 'Email', prop: 'email', filterable: true, sortable: true, },
        { title: 'Phone Number', prop: 'phone', filterable: true, sortable: true },
        { title: 'Address', prop: 'level', filterable: true, sortable: true },
        { title: 'Status', prop: 'status', filterable: true, sortable: true },
        { title: 'District Head', prop: 'staffs', filterable: true, sortable: true },
        { title: 'Last Update ', prop: 'date', filterable: true, sortable: true },
        { title: 'Details', prop: 'edit', cell: row =><Link to={`/admin/districts/edit/${row.edit}`} > Edit</Link>},
        { title: 'Details', prop: 'delete', cell: row =><Link to={`/admin/districts/delete/${row.delete}`} > Delete </Link>},
        { title: 'Details', prop: 'detail', cell: row =><Link to={`/admin/districts/read/${row.detail}`} > Detail </Link>},
      ];
    
      const body = (dat) => {
        return dat.map((data, index)=>{
          return{
            id:index +1,
            names:data.names,
            email:data.email,
            phone:data.phone,
            level:data.address,
            staffs:data.staffs,
            status:data.status,
            date :moment(data.updateAt,"YYYY-MM-DDTHH:mm:ss.SSSSZ").format('LLLL'),
            edit:data._id,
            delete:data._id,
            detail:data._id,
          }
        })
      };

    React.useEffect(() => {
        boot();
    },[reload])

    return (
        <Aux>
            {error ? isError() : loading ?  isLoading() :ViewData()}
        </Aux>
    )
}
