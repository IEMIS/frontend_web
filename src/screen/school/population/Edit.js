import React from 'react'
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {read, edit } from './api';
import { useParams, Redirect } from "react-router-dom";
import { isAuthenticated } from '../../Auth/admin/api';

export default function Edit() {
    let { id } = useParams();
    const [values, setValues] = React.useState({
        year:"",
        district:"",
        male1:"",
        female1:"",
        total1:"",
        male2:"",
        female2:"",
        total2:"",
        male3:"",
        female3:"",
        total3:"",
        male4:"",
        female4:"",
        total4:"",
        male5:"",
        female5:"",
        total5:"",
        male6:"",
        female6:"",
        total6:"",
        male7:"",
        female7:"",
        total7:"",
        male8:"",
        female8:"",
        total8:"",
        male9:"",
        female9:"",
        total9:"",
        male10:"",
        female10:"",
        total10:"",
        male11:"",
        female11:"",
        total11:"",
        male12:"",
        female12:"",
        total12:"",
        male13:"",
        female13:"",
        total13:"",
        male14:"",
        female14:"",
        total14:"",
        male15:"",
        female15:"",
        total15:"",
        male16:"",
        female16:"",
        total16:"",
        male17:"",
        female17:"",
        total17:"",
        male18:"",
        female18:"",
        total18:"",
        male119:"",
        female19:"",
        total19:"",
        male20:"",
        female20:"",
        total20:"",
        male21:"",
        female21:"",
        total21:"",
        male22:"",
        female22:"",
        total22:"",
        male23:"",
        female23:"",
        total23:"",
        loading:false,
        redirectToPage:false,
        error:false,
        reload:false,
        loadingBtn:false,
        districtList:[]
    })
    const {year, district, male1,female1,total1,male2, female2,total2, male3, female3,total3,male4, female4,total4,male5, female5,total5,male6, female6,total6,male7, female7,total7,male8, female8,total8,male9, female9,total9,male10, female10,total10,male11, female11,total11,male12, female12,total12,male13,female13,total13,male14, female14,total14,male15, female15,total15,male16, female16,total16,male17, female17,total17,male18, female18,total18,male19, female19,total19,male20, female20,total20,male21, female21,total21,male22, female22,total22,male23, female23,total23, loading, error,reload, redirectToPage, loadingBtn,districtList  } = values
    const handleChange = name=>event=>{
        setValues({...values, [name]:event.target.value});
    }
    const submit = event =>{
        event.preventDefault();
        setValues({...values, loadingBtn:true})
        if(year===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'year is required', 'error');
        }
        if(district===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'district is required', 'error');
        }
        if(male1===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 3 population is required', 'error');
        }
        if(female1===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 3 population is required', 'error');
        }
        if(total1===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 3 population is required', 'error');
        }
        if(male2===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 4 population is required', 'error');
        }
        if(female2===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 4 population is required', 'error');
        }
        if(total2===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 4 population is required', 'error');
        }
        if(male3===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 5 population is required', 'error');
        }
        if(female3===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 5 population is required', 'error');
        }
        if(total3===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 5 population is required', 'error');
        }
        if(male4===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 6 population is required', 'error');
        }
        if(female4===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 6 population is required', 'error');
        }
        if(total4===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 6 population is required', 'error');
        }
        if(male5===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 7 population is required', 'error');
        }
        if(female5===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 7 population is required', 'error');
        }
        if(total5===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 7 population is required', 'error');
        }
        if(male6===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 8 population is required', 'error');
        }
        if(female6===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 8 population is required', 'error');
        }
        if(total6===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 8 population is required', 'error');
        }
        if(male7===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 9 population is required', 'error');
        }
        if(female7===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 9 population is required', 'error');
        }
        if(total7===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 9 population is required', 'error');
        }
        if(male8===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 10 population is required', 'error');
        }
        if(female8===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 10 population is required', 'error');
        }
        if(total8===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 10 population is required', 'error');
        }
        if(male9===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 11 population is required', 'error');
        }
        if(female9===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 11 population is required', 'error');
        }
        if(total9===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 11 population is required', 'error');
        }
        if(male10===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 12 population is required', 'error');
        }
        if(female10===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 12 population is required', 'error');
        }
        if(total10===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 12 population is required', 'error');
        }
        if(male11===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 13 population is required', 'error');
        }
        if(female11===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 13 population is required', 'error');
        }
        if(total11===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 13 population is required', 'error');
        }
        if(male12===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 14 population is required', 'error');
        }
        if(female12===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 14 population is required', 'error');
        }
        if(total12===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 14 population is required', 'error');
        }
        if(male13===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 15 population is required', 'error');
        }
        if(female13===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 15 population is required', 'error');
        }
        if(total13===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 15 population is required', 'error');
        }
        if(male14===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 16 population is required', 'error');
        }
        if(female14===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 16 population is required', 'error');
        }
        if(total14===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 16 population is required', 'error');
        }
        if(male15===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 17 population is required', 'error');
        }
        if(female15===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 17 population is required', 'error');
        }
        if(total15===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 17 population is required', 'error');
        }
        if(male16===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 18 population is required', 'error');
        }
        if(female16===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 18 population is required', 'error');
        }
        if(total16===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 18 population is required', 'error');
        }
        if(male17===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 19 population is required', 'error');
        }
        if(female17===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 19 population is required', 'error');
        }
        if(total17===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 19 population is required', 'error');
        }
        if(male18===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 20 population is required', 'error');
        }
        if(female18===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 20 population is required', 'error');
        }
        if(total18===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 20 population is required', 'error');
        }
        if(male19===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 21 population is required', 'error');
        }
        if(female19===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 21 population is required', 'error');
        }
        if(total19===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 21 population is required', 'error');
        }
        if(male20===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 22 population is required', 'error');
        }
        if(female20===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 22 population is required', 'error');
        }
        if(total20===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 22 population is required', 'error');
        }
        if(male21===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'male age 23 population is required', 'error');
        }
        if(female21===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'female age 23 population is required', 'error');
        }
        if(total21===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'total age 23 population is required', 'error');
        }
        handleUpdate();
    }

    const handleUpdate =async ()=>{
        const user = {year, district, male1, female1,total1,male2, female2,total2, male3, female3,total3,male4, female4,total4,male5, female5,total5,male6, female6,total6,male7, female7,total7,male8, female8,total8,male9, female9,total9,male10, female10,total10,male11, female11,total11,male12, female12,total12,male13,female13,total13,male14, female14,total14,male15, female15,total15,male16, female16,total16,male17, female17,total17,male18, female18,total18,male19, female19,total19,male20, female20,total20,male21, female21,total21,male22, female22,total22,male23, female23,total23}
        const Auth = isAuthenticated();
        const data = await edit(id, user, Auth.token);
        if(!data){
            Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
            return setValues({...values, loadingBtn:false})
        }
        if(data.error){
            Swal.fire('Oops...', data.error, 'error')
            return setValues({...values, loadingBtn:false})
        }
        if(data.message){
            let Toast = Swal.mixin({
                toast: true,
                timerProgressBar: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });
            Toast.fire({
                animation: true,
                type: 'success',
                title: data.message
            })
           setValues({...values, loadingBtn:false, redirectToPage:true})
           return Swal.fire('saved...', data.message, 'success')
        }
    }

    const redirectUser = () => {
        if (redirectToPage){
            return <Redirect to="/admin/population/read" />
        }
    };

    const isLoading= () => {
        if(loading){
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
                                        <h1>Requesting for Class  data</h1>
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
                                <Card.Title as="h5">Error in reading this user .</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h1>Class data failed to read, Try again <Button variant="primary" onClick={handleReload}>Reload</Button> </h1>
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
        setValues({...values, loading:false, error:false, reload:!reload})
    }

    React.useEffect(() => {
        const bootstrap = async ()=>{
            const Auth = isAuthenticated();
            setValues(v => ({...v, loading:true}))
            const data = await read(id, Auth.token);
            if(!data){
                    Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error');
                    setValues(v => ({...v, loading:false, error:true}))  
                    return  
            }
            if(data.error){
                    Swal.fire('Oops...', data.error, 'error')
                    setValues(v => ({...v, loading:false, error:true})) 
                    return 
            }
            if(data.message){
                    setValues(v => ({...v, loading:false, error:false, year:data.data.year, district:data.data.district, male1:data.data.male1,female1:data.data.female1, total1:data.data.total1, male2:data.data.male2,female2:data.data.female2, total2:data.data.total2,male3:data.data.male3,female3:data.data.female3, total3:data.data.total3,male4:data.data.male4,female4:data.data.female4, total4:data.data.total4,male5:data.data.male5,female5:data.data.female5, total5:data.data.total5,male6:data.data.male6,female6:data.data.female6, total6:data.data.total6,male7:data.data.male7,female7:data.data.female7, total7:data.data.total7,male8:data.data.male8,female8:data.data.female8, total8:data.data.total8,male9:data.data.male9,female9:data.data.female9,total9:data.data.total9,male10:data.data.male10,female10:data.data.female10, total10:data.data.total10, male11:data.data.male11,female11:data.data.female11,total11:data.data.total11, male12:data.data.male12,female12:data.data.female12, total12:data.data.total12,male13:data.data.male13,female13:data.data.female13, total13:data.data.total13,male14:data.data.male14,female14:data.data.female14, total14:data.data.total14,male15:data.data.male15,female15:data.data.female15, total15:data.data.total15,male16:data.data.male16,female16:data.data.female16, total16:data.data.total16,male17:data.data.male17,female17:data.data.female17, total17:data.data.total17,male18:data.data.male18,female18:data.data.female18, total18:data.data.total18,male19:data.data.male19,female19:data.data.female19, total19:data.data.total19,male20:data.data.male20,female20:data.data.female20, total20:data.data.total20,male21:data.data.male21,female21:data.data.female21, total21:data.data.total21,male22:data.data.male22,female22:data.data.female22, total22:data.data.total22,male23:data.data.male23,female23:data.data.female23, total23:data.data.total23}))
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
        bootstrap()
    },[reload, id])

    return (
        <Aux>
            {redirectUser()}
            {isError()}
            {loading ? isLoading() :
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h3">Update the Class data</Card.Title>
                            </Card.Header>
                                <Card.Body>
                                <Row>
                                <Col md={4}>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Pop.Year Data</Form.Label>
                                                <Form.Control type="date" placeholder="Year data" onChange={handleChange("year")} value={year} />
                                            </Form.Group>
                                </Form>
                                </Col>
                                <Col md={4}>
                                <Form> 
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>District</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("district")} value={district}>
                                                <option>Select district</option>
                                               {
                                                   districtList && districtList.length > 0 
                                                   ?
                                                   districtList.map((dist, id)=>{
                                                       return(
                                                        <option value={dist._id}>{dist.names}</option>
                                                       ) 
                                                   }) : <option value="0">Fails to fetch district</option>
                                               }
                                            </Form.Control>
                                            </Form.Group>
                                </Form>
                                </Col>
                                </Row>
                                <Row>
                                <Col md={4}>
                                <Form>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 3</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male1")} value={male1} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 3</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female1")} value={female1} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 3</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total1")} value={total1} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 4</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male2")} value={male2} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 4</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female2")} value={female2} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 4</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total2")} value={total2} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 5</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male3")} value={male3} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 5</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female3")} value={female3} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 5</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total3")} value={total3} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 6</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male4")} value={male4} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 6</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female4")} value={female4} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 6</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total4")} value={total4} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 7</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male5")} value={male5} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 7</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female5")} value={female5} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 7</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total5")} value={total5} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 8</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male6")} value={male6} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 8</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female6")} value={female6} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 8</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total6")} value={total6} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 9</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male7")} value={male7} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 9</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female7")} value={female7} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 9</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total7")} value={total7} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 10</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male8")} value={male8} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 10</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female8")} value={female8} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 10</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total8")} value={total8} />
                                            </Form.Group>
                                </Form>
                                </Col>
                                <Col md={4}>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 11</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male9")} value={male9} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 11</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female9")} value={female9} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 11</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total9")} value={total9} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 12</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male10")} value={male10} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 12</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female10")} value={female10} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 12</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total10")} value={total10} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 13</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male11")} value={male11} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 13</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female11")} value={female11} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 13</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total11")} value={total11} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 14</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male12")} value={male12} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 14</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female12")} value={female12} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 14</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total12")} value={total12} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 15</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male13")} value={male13} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 15</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female13")} value={female13} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 15</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total13")} value={total13} />
                                            </Form.Group>   
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 16</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male14")} value={male14} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 16</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female14")} value={female14} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 16</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total14")} value={total14} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 17</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male15")} value={male15} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 17</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female15")} value={female15} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 17</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total15")} value={total15} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 18</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male16")} value={male16} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 18</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female16")} value={female16} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 18</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total16")} value={total16} />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                    <Col md={4}>
                                        <Form>
                                        <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 19</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male17")} value={male17} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 19</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female17")} value={female17} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age19</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total17")} value={total17} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 20</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male18")} value={male18} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 20</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female18")} value={female18} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 20</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total18")} value={total18} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 21</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male19")} value={male19} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 21</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female19")} value={female19} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 21</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total19")} value={total19} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 22</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male20")} value={male20} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 22</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female20")} value={female20} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 22</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total20")} value={total20} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 23</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male21")} value={male21} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 23</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female21")} value={female21} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 23</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total21")} value={total21} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 24</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male22")} value={male22} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 24</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female22")} value={female22} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age24</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total24")} value={total22} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 25</Form.Label>
                                                <Form.Control type="text" placeholder="male" onChange={handleChange("male23")} value={male23} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 25</Form.Label>
                                                <Form.Control type="text" placeholder="female" onChange={handleChange("female23")} value={female23} />
                                            </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Age 25</Form.Label>
                                                <Form.Control type="text" placeholder="total" onChange={handleChange("total23")} value={total23} />
                                            </Form.Group>
                                                {
                                                    loadingBtn ? <Button variant="outline-secondary" disabled>wait ......</Button> : <Button variant="primary" onClick={submit}  >Update Admin Data ..</Button>
                                                }
                                            </Form>
                                        </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            }
        </Aux>
    )
}
