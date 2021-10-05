import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useParams, Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import moment from 'moment';
import { read } from "./api";
import Aux from "../../../hoc/_Aux";
import { isAuthenticated } from "../../Auth/admin/api";

export default function One() {
  let { id } = useParams();

  const [values, setValues] = React.useState({
    studentCode: "",
    cohortA: "",
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
    datas:'',
  });

  const {
    error,
    loading,
    reload,
    redirectToPage,
    datas
  } = values;

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
      return <Redirect to="/district/students/read" />;
    }
  };

  React.useEffect(() => {
    const bootstrap = async () => {
      const Auth = await isAuthenticated();
      setValues((v) => ({ ...v, loading: true }));
      const data = await read(id, Auth.token);
        if (!data) {
          Swal.fire(
            "Oops...",
            "internet server error, Please, check your network connection",
            "error"
          );
          return setValues((v) => ({ ...v, loading: false, error: true }));
        }
        if (data.error) {
          Swal.fire("Oops...", data.error, "error");
          return setValues((v) => ({ ...v, loading: false, error: true }));
        }

        if (data.message) {
          const {
            studentCode,
            cohortA,
            firstName,
            middleName,
            lastName,
            religion,
            edulevel,
            country,
            ethnicity,
            district,
          } = data.data[0];
          //const load = Object.assign({}, data.data)
          //console.log(load)
          setValues((v) => ({
            ...v,
            loading: false,
            error: false,
            studentCode,
            cohortA,
            firstName,
            middleName,
            lastName,
            religion,
            edulevel,
            country,
            ethnicity,
            district,
            datas:data.data
          }));
          //return Swal.fire("Great", data.message, "success");
        }
    };
    bootstrap();
  }, [reload, id]);

  console.log({datas})

  if(loading){
    return isLoading()
  }
  const isEmpty = (empty) =>{
    return Object.keys(empty).length === 0 && empty.constructor === Object
  }
  const ViewData = () =>{
    if(datas && datas.length > 0){
      let dat = datas[0];
      return isEmpty(dat) ? "" :
      (
        <>
          <Row>
            <Col>
              <Card.Header>
                <Card.Title>
                  <Link to="/district/students/read"> Read Student  </Link>
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
                            <Form.Label>Student Code </Form.Label>
                            <Form.Control type="text" value={dat.studentCode} disabled />
                          </Form.Group>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                            type="text"
                            value={dat.firstName}
                            disabled
                            />
                          </Form.Group>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control
                              type="text"
                              value={dat.middleName}
                              disabled
                            />
                          </Form.Group>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Last Name </Form.Label>
                            <Form.Control type="text" value={dat.lastName} disabled />
                          </Form.Group>
                          <Form.Group controlId="formBasicPassword">
                            <Form.Label>Religion</Form.Label>
                            <Form.Control type="text" value={dat.religion} disabled />
                          </Form.Group>
                          <Form.Group controlId="formBasicPassword">
                            <Form.Label>Class</Form.Label>
                            <Form.Control type="text" value={dat.fromClass.length > 0 ?  dat.fromClass[0].names : ""} disabled />
                          </Form.Group>
                          <Form.Group controlId="formBasicPassword">
                            <Form.Label>School</Form.Label>
                            <Form.Control type="text" value={dat.fromSchool.length > 0 ? dat.fromSchool[0].names : ""} disabled />
                          </Form.Group>
                          <Form.Group controlId="formBasicPassword">
                            <Form.Label>School Owner</Form.Label>
                            <Form.Control type="text" value={dat.fromSchool.length > 0 ? dat.fromSchool[0].ownership:""} disabled />
                          </Form.Group>
                          <Form.Group controlId="formBasicPassword">
                            <Form.Label>School Type</Form.Label>
                            <Form.Control type="text" value={dat.fromSchool.length > 0 ? dat.fromSchool[0].schoolType : ""} disabled />
                          </Form.Group>
                          <Form.Group controlId="formBasicPassword">
                            <Form.Label>School Category </Form.Label>
                            <Form.Control type="text" value={dat.fromSchool.length > 0 ? dat.fromSchool[0].schoolCat: ""} disabled />
                          </Form.Group>
                          <Form.Group controlId="formBasicEmail">
                          <Form.Label>Education Level </Form.Label>
                          <Form.Control type="text" value={dat.edulevel} disabled />
                        </Form.Group>
                        </Form>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Nationality</Form.Label>
                          <Form.Control type="text" value={dat.country} disabled />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>Ethnicity </Form.Label>
                          <Form.Control type="text" value={dat.ethnicity} disabled />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>Studentship </Form.Label>
                          <Form.Control type="text" value={dat.status} disabled />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>District</Form.Label>
                          <Form.Control type="text" value={dat.fromDistrict.length > 0 ?  dat.fromDistrict[0].names : ""} disabled />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>Date of Birth</Form.Label>
                          <Form.Control type="text" value={moment(dat.dob,"YYYY-MM-DDTHH:mm:ss.SSSSZ").format('LL')} disabled />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>Age</Form.Label>
                          <Form.Control type="text" value={dat.age} disabled />
                        </Form.Group>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Cohort  </Form.Label>
                            <Form.Control type="text" value={dat.cohortA} disabled />
                          </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>District Phone</Form.Label>
                            <Form.Control type="text" value={dat.fromDistrict.length > 0 ? dat.fromDistrict[0].phone : ""} disabled />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>District Address</Form.Label>
                            <Form.Control type="text" value={dat.fromDistrict.length > 0 ? dat.fromDistrict[0].address : " "} disabled />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Creation Time </Form.Label>
                          <Form.Control type="text" value={moment(dat.created_at,"YYYY-MM-DDTHH:mm:ss.SSSSZ").format('LL')} disabled />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Last Update</Form.Label>
                          <Form.Control type="text" value={moment(dat.updated_at,"YYYY-MM-DDTHH:mm:ss.SSSSZ").format('LL')} disabled />
                        </Form.Group>
                      </Col>
                      <hr />
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
          </Row>
        </>
      )
    }
    return ''
  }

  return (
    <Aux>
      {redirectUser()}
      {isError()}
      {loading ? isLoading() : ViewData()}
    </Aux>
  );
}
