import React, { Component } from 'react'
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {Redirect} from 'react-router-dom'
import { create, readsDistrict } from './api';
import {isAuthenticated} from '../../Auth/admin/api'


export default class Create extends Component {
    constructor(props){
        super(props);
        this.state ={
        code:"",
        district:"",
        names:"",
        address:"",
        email:"",
        fax:"",
        mailBox:"",
        phone:"",
        province:"",
        eduLevel:"",
        ownership:"",
        estabYear:"",
        schoolCat:"",
        schoolType:"",
        //headID:"",
        password:"",
        password2:"",
        loading:false,
        redirectToPage:false,
        districtList:[],
        }
    }
    
    async componentDidMount(){
        const Auth = await isAuthenticated()
        const dist = await readsDistrict(Auth.token);
        //const sessionL = await readsSession(Auth.token);
       // const classL = await readsClass(Auth.token);
        this.setState({districtList:dist.data});
    }

    async componentDidUpdate(){

    }

   // const {code, names,district, phone, email, password, password2, address,fax,mailBox,province,eduLevel,ownership,estabYear,schoolCat,schoolType,headID, loading, redirectToPage, districtList} = values

     handleChange = name=>event=>{
        //setValues({...values, [name]:event.target.value})
        this.setState({[name]: event.target.value});
    }

   /* const submit = event =>{
        event.preventDefault();
        setValues({...values, loading:true})
    */
        submit = event =>{
            event.preventDefault();
            //const { school, presentClass, firstName, lastName, gender,  dob,country, disability,eduLevel,age,status, session } = this.state;
            const {names, district, phone, email, password, password2, address,fax,mailBox,province,eduLevel,ownership,estabYear,schoolCat,schoolType} = this.state;
            this.setState({loading:true})
       /* if(code===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'School code is required', 'error');
        }
        */
        if(district===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'District is required', 'error');
        }
        if(names===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'School Name is required', 'error');
        }
        if(schoolType===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'School Type is required', 'error');
        }
        if(schoolCat===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'School Category is required', 'error');
        }
        if(estabYear===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'Establishment Year is required', 'error');
        }
        if(ownership===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'School ownership is required', 'error');
        }
        if(eduLevel===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'Education Level is required', 'error');
        }
        if(province===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'School locality is required', 'error');
        }
        if(mailBox===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'School mailBox is required', 'error');
        }
        if(fax===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'Fax is required', 'error');
        }
        if(phone===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'Phone number is required', 'error');
        }
        if(address===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'District address is required', 'error');
        }
        if(email===""){ 
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'District email is required', 'error');
        }

        if(password==="") {
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'Password must empty', 'error');
        }

        if(password !== password2) {
            this.setState({ loading:false})
            return Swal.fire('Oops...', 'Password must match each other', 'error');
        }
        this.handleCreate();
    }

        handleCreate =async ()=>{
        const Auth = await isAuthenticated()
        const {code, names, district, phone, email, password, password2, address,fax,mailBox,province,eduLevel,ownership,estabYear,schoolCat,schoolType, loading} = this.state;
        const school = {code, names, district, email, contact:[{phone, fax, mailBox, province, address}],eduLevel, ownership, estabYear, schoolCat, schoolType, password, password2, loading,}
        const data = await create(school, Auth.token);
        if(!data){
            Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
            return this.setState({loading:false})
        }
        if(data.error){
            Swal.fire('Oops...', data.error, 'error')
            return this.setState({loading:false})
        }
        if(data.message){
            Swal.fire('Saved...', data.message, 'success')
            this.setState({ loading:false, redirectToPage:true})
           let Toast = Swal.mixin({
            toast: true,
            timerProgressBar: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
            });

            return Toast.fire({
                animation: true,
                type: 'success',
                title: 'Request is successful'
            })
        }
    }

    redirectUser = () => {
        let {redirectToPage} = this.state;
        if (redirectToPage){
            return <Redirect to="/admin/schools/create" />
        }
    };

   /* React.useEffect(() => {
        const bootstrap = async () =>{
            const Auth = await isAuthenticated()
            const dist = await readsDistrict(Auth.token);
            let code = `SCH${`0013`}`;
            setValues(v => ({...v, districtList:dist.data, code})); 
        }
        bootstrap()
    }, [])
    */
    render() {
        const {names,district, districtList, phone, email, password, password2, address,fax,mailBox,province,eduLevel,ownership,estabYear,schoolCat,schoolType, loading} = this.state;
    return (
        <Aux>
            {this.redirectUser()}
            <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h3">Add New School</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                            {/*<Form.Group controlId="formBasicEmail">
                                                <Form.Label>School Code</Form.Label>
                                                <Form.Control type="text" placeholder="school code" onChange={handleChange("code")} value={code} disabled />
                                            </Form.Group>*/}

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>School Name</Form.Label>
                                                <Form.Control type="text" placeholder="school name" onChange={this.handleChange("names")} value={names} />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>District</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange("district")} value={district}>
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
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Address </Form.Label>
                                                <Form.Control type="text" placeholder="location, province e.g Veisaru Road, Savusavu" onChange={this.handleChange("address")} value={address} />
                                            </Form.Group>
                                           
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Locality</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange("province")} value={province}>
                                                <option>Select locality</option>
                                                <option value="Metropolian">City Metropolian</option>
                                                <option value="Surburban">City Surburban</option>
                                                <option value="Urban">Peri Urban</option>
                                                <option value="Remote">Remote</option>
                                                <option value="Rural">Rural</option>
                                                <option value="Town">Town</option>
                                                <option value="Very-Remote">Very Remote</option>
                                            </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Mailing Address </Form.Label>
                                                <Form.Control type="text" placeholder="P.O BOX 123, Tavua" onChange={this.handleChange("mailBox")} value={mailBox} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Phone </Form.Label>
                                                <Form.Control type="text" placeholder="official school phone number" onChange={this.handleChange("phone")} value={phone} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Fax</Form.Label>
                                                <Form.Control type="text" placeholder="school fax" onChange={this.handleChange("fax")} value={fax} />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Education Level</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange("eduLevel")} value={eduLevel}>
                                                <option>Select Education Level</option>
                                                <option value="ECE">ECE</option>
                                                <option value="Primary">Primary</option>
                                                <option value="Secondary">Secondary</option>
                                                <option value="TVET">TVET</option>
                                            </Form.Control>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                    <Col md={6}>
                                    <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Estab. Year </Form.Label>
                                                <Form.Control type="date" placeholder="year founded" onChange={this.handleChange("estabYear")} value={estabYear} />
                                            </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Ownership</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange("ownership")} value={ownership}>
                                                <option>Select School Ownership</option>
                                                <option value="Government">Government</option>
                                                <option value="Non-Government">Non-Government</option>
                                                <option value="Private">Private</option>
                                                
                                            </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>School Category</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange("schoolCat")} value={schoolCat}>
                                                <option>Select School Category</option>
                                                <option value="Regular">Regular</option>
                                                <option value="Special">Special</option>
                                            </Form.Control>
                                     </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>School Type</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange("schoolType")} value={schoolType}>
                                                <option>Select School Type</option>
                                                <option value="Day">Day</option>
                                                <option value="Boarding1">Registered Boarding</option>
                                                <option value="Boarding2">Unregistered Boarding</option>
                                            </Form.Control>
                                     </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>email </Form.Label>
                                            <Form.Control type="email" placeholder="email" onChange={this.handleChange("email")} value={email}/>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" onChange={this.handleChange("password")} value={password} />
                                            </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password Confirmation</Form.Label>
                                            <Form.Control type="password" placeholder="Password Confirmation" onChange={this.handleChange("password2")} value={password2} />
                                        </Form.Group>
                                        {
                                                loading ? "loading ..." : <Button variant="primary" onClick={this.submit}  >Create ..</Button>
                                            }
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </Aux>
    )
}
}