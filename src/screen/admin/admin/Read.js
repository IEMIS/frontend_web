import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Aux from "../../../hoc/_Aux";
import Swal from "sweetalert2";
import { reads } from "./api";
import { Link } from "react-router-dom";
import moment from 'moment'; 
import Datatable from 'react-bs-datatable'; 
import { isAuthenticated } from "../../Auth/admin/api";

export default function Read() {
  const [datas, setDatas] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [reload, setReload] = React.useState(false);

  const isError = () => {
    if (error) {
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
                      <h1>
                        Admin data Failed to Load, you can refresh{" "}
                        <Button variant="primary" onClick={handleReload}>
                          Reload
                        </Button>{" "}
                      </h1>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Aux>
      );
    }
  };

  const isLoading = () => {
    if (loading) {
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
                      <h1>Fetching the list of Admin's </h1>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Aux>
      );
    }
  };

  const handleReload = (event) => {
    event.preventDefault();
    setError(false);
    setLoading(true);
    setReload(!reload);
  };

 

  const boot = async () => {
    setLoading(true);
    const Auth = isAuthenticated();
    const data = await reads(Auth.token);
    if (!data) {
      Swal.fire(
        "Oops...",
        "internet server error, Please, check your network connection",
        "error"
      );
      setLoading(false);
      setError(true);
      return;
    }
    if (data.error) {
      Swal.fire("Oops...", data.error, "error");
      setLoading(false);
      setError(true);
      return;
    }
    if (data.message) {
      setLoading(false);
      setError(false);
      setDatas(data.data);
      Swal.fire("Successful", data.message, "success");

      let Toast = Swal.mixin({
        toast: true,
        timerProgressBar: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });

      Toast.fire({
        showClass: true,
        type: "success",
        title: data.message,
      });
    }
  };

  const ViewData = () =>{
    return(
      <Aux>
        <h1>Manage Admin data</h1>
        <hr />
        {
          datas.length > 0 ?  
          <Datatable 
            tableHeaders={header} 
            tableBody={body(datas)} 
            //onRowClick={details}
            //initialSort={{ prop: 'date', isAscending: true }}
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
    { title: 'Admin Level', prop: 'level', filterable: true, sortable: true },
    { title: 'Designation ', prop: 'designation', filterable: true, sortable: true },
    { title: 'Created On ', prop: 'date', filterable: true, sortable: true },
    { title: 'Details', prop: 'edit', cell: row =><Link to={`/admin/users/edit/${row.edit}`} > Edit</Link>},
    { title: 'Details', prop: 'delete', cell: row =><Link to={`/admin/users/delete/${row.delete}`} > Delete </Link>},
    { title: 'Details', prop: 'detail', cell: row =><Link to={`/admin/users/read/${row.detail}`} > Detail </Link>},
  ];

  const body = (dat) => {
    return dat.map((data, index)=>{
      return{
        id:index +1,
        names:`${data.firstName} ${data.lastName}`,
        email:data.email,
        phone:data.phone,
        designation:data.designation,
        date :moment(data.created_at,"YYYY-MM-DDTHH:mm:ss.SSSSZ").format('LL'),
        level:data.level ==="2" ? "Moderator" :"Admin",
        edit:data._id,
        delete:data._id,
        detail:data._id,
      }
    })
  };

  React.useEffect(() => {
    boot();
  }, [reload]);

  return (
    <Aux>
      {error ? isError() : loading ?  isLoading() :ViewData()}
    </Aux>
  );
}
