import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useParams, Redirect } from "react-router-dom";
import Swal from "sweetalert2";

import { read } from "./api";
import Aux from "../../../hoc/_Aux";
import { isAuthenticated } from "../../Auth/admin/api";

export default function One() {
  let { id } = useParams();

  const [values, setValues] = React.useState({
    firstName: "",
    middleName: "",
    lastName: "",
    religion: "",
    edulevel: "",
    country: "",
    ethnicity: "",
    district: "",
    loading: false,
    loadingBtn: false,
    redirectToPage: false,
    error: false,
    reload: false,
  });

  const {
    firstName,
    middleName,
    lastName,
    religion,
    edulevel,
    country,
    ethnicity,
    district,
    error,
    loading,
    reload,
    redirectToPage,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
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
                      <h1>Requesting for Student data</h1>
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
                        failed to read student data, Try again{" "}
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
  const redirectUser = () => {
    if (redirectToPage) {
      return <Redirect to="/admin/students/read" />;
    }
  };

  React.useEffect(() => {
    let ignore = false;
    const bootstrap = async () => {
      const Auth = await isAuthenticated();
      setValues((v) => ({ ...v, loading: true }));
      const data = await read(id, Auth.token);
      if (!ignore) {
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
          const {
            firstName,
            middleName,
            lastName,
            religion,
            edulevel,
            country,
            ethnicity,
            district,
          } = data.data;
          setValues((v) => ({
            ...v,
            loading: false,
            error: false,
            firstName,
            middleName,
            lastName,
            religion,
            edulevel,
            country,
            ethnicity,
            district,
          }));
          return Swal.fire("Great", data.message, "success");
        }
      }
    };
    bootstrap();
    return () => {
      ignore = true;
    };
  }, [reload, id]);

  return (
    <Aux>
      {redirectUser()}
      {isError()}
      {loading ? (
        isLoading()
      ) : (
        <>
          <Row>
            <Col>
              <Card.Header>
                <Card.Title>
                  <Link to="/admin/students/read"> Read Student </Link>
                </Card.Title>
              </Card.Header>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title as="h3">Single Student Details</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={6}>
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            value={firstName}
                            disabled
                          />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Middle Name</Form.Label>
                          <Form.Control
                            type="text"
                            value={middleName}
                            disabled
                          />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Last Name </Form.Label>
                          <Form.Control type="text" value={lastName} disabled />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Religion</Form.Label>
                          <Form.Control type="text" value={religion} disabled />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Education Level </Form.Label>
                        <Form.Control type="text" value={edulevel} disabled />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" value={country} disabled />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Ethnicity </Form.Label>
                        <Form.Control type="text" value={ethnicity} disabled />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>District</Form.Label>
                        <Form.Control type="text" value={district} disabled />
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Aux>
  );
}
