import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Aux from "../../../hoc/_Aux";
import Swal from "sweetalert2";
import moment from 'moment'; 
import { read } from "./api";
import { useParams, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../Auth/admin/api";

export default function One() {
  let { id } = useParams();
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    middleName: "",
    phone: "",
    email: "",
    password: "",
    password2: "",
    level: "",
    designation: "",
    loading: false,
    redirectToPage: false,
    error: false,
    reload: false,
    loadingBtn: false,
  });
  const {
    firstName,
    lastName,
    middleName,
    phone,
    email,
    designation,
    level,
    createdAt,
    updatedAt,
    error,
    loading,
    reload,
    redirectToPage,
  } = values;

  const redirectUser = () => {
    if (redirectToPage) {
      return <Redirect to="/admin/users/read" />;
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
                  <Card.Title as="h5">Wait !!!.</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col>
                      <h1>Requesting for Admin data</h1>
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

  const isError = () => {
    if (error) {
      return (
        <Aux>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title as="h5">Error in reading this user .</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col>
                      <h1>
                        Admin data failed to read, Try again{" "}
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

  const handleReload = (event) => {
    event.preventDefault();
    setValues({ ...values, loading: false, error: false, reload: !reload });
  };

  React.useEffect(() => {
    const bootstrap = async () => {
      const Auth = isAuthenticated();
      setValues((v) => ({ ...v, loading: true }));
      const data = await read(id, Auth.token);
      if (!data) {
        Swal.fire(
          "Oops...",
          "internet server error, Please, check your network connection",
          "error"
        );
        setValues((v) => ({ ...v, loading: false, error: true }));
        return;
      }
      if (data.error) {
        Swal.fire("Oops...", data.error, "error");
        setValues((v) => ({ ...v, loading: false, error: true }));
        return;
      }
      if (data.message) {
        setValues((v) => ({
          ...v,
          loading: false,
          error: false,
          firstName: data.data.firstName,
          lastName: data.data.lastName,
          phone: data.data.phone,
          middleName: data.data.middleName,
          email: data.data.email,
          designation: data.data.designation,
          level: data.data.level,
          createdAt: data.data.createdAt,
          updatedAt: data.data.updatedAt, 
        }));
        let Toast = Swal.mixin({
          toast: true,
          timerProgressBar: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
        return Toast.fire({
          showClass: true,
          type: "success",
          title: data.message,
        });
      }
    };
    bootstrap();
  }, [reload, id]);

  const Back = async () => {
    setValues({ ...values, redirectToPage: true });
  };
  return (
    <Aux>
      {redirectUser()}
      {isError()}
      {isLoading()}
      <Row>
        <Col>
          <Card.Header>
            <Card.Title>
              <Button variant="outline-primary" onClick={Back}>
                Back..
              </Button>{" "}
            </Card.Title>
          </Card.Header>
        </Col>
      </Row>
      <Row>
        <Card.Body>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="first_name">First Name</label>
              <input
                type="text"
                class="form-control"
                value={firstName}
                readOnly
              />
            </div>
            <div class="form-group col-md-6">
              <label for="middle_name">Middle Name</label>
              <input
                type="text"
                class="form-control"
                value={middleName}
                readOnly
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="last_name">Last Name</label>
              <input
                type="text"
                class="form-control"
                value={lastName}
                readOnly
              />
            </div>
            <div class="form-group col-md-6">
              <label for="phone">Phone Number</label>
              <input type="text" class="form-control" value={phone} readOnly />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="level">Level</label>
              <input type="text" class="form-control" value={level===1 ? "Admin" : "Moderator"} readOnly />
            </div>
            <div class="form-group col-md-6">
              <label for="email">Email</label>
              <input type="text" class="form-control" value={email} readOnly />
            </div>
            </div>
            <div class="form-row">
            <div class="form-group col-md-6">
              <label for="email">Designation</label>
              <input type="text" class="form-control" value={designation} readOnly />
            </div>
            <div class="form-group col-md-6">
              <label for="level">Creation Time</label>
              <input type="text" class="form-control" value={moment(createdAt,"YYYY-MM-DDTHH:mm:ss.SSSSZ").format('LLLL')} readOnly />
            </div>
            </div>
            <div class="form-row">
            <div class="form-group col-md-6">
              <label for="email">Last Update</label>
              <input type="text" class="form-control" value={moment(updatedAt,"YYYY-MM-DDTHH:mm:ss.SSSSZ").format('LLLL')} readOnly />
            </div>
          </div>
        </Card.Body>
      </Row>
    </Aux>
  );
}
