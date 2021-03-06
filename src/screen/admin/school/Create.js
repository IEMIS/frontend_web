import React from 'react'
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {Redirect, Link} from 'react-router-dom'
import { create, readsDistrict } from './api';
import {isAuthenticated} from '../../Auth/admin/api'


export default function Create() {
    const [values, setValues] = React.useState({
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
        headID:"",
        password:"",
        password2:"",
        loading:false,
        redirectToPage:false,
        districtList:[]
    })
    const {names,district,code, phone, email, password, password2, address,fax,mailBox,province,eduLevel,ownership,estabYear,schoolCat,schoolType,headID, loading, redirectToPage, districtList} = values

    const handleChange = name=>event=>{
        setValues({...values, [name]:event.target.value})
    }

    const submit = event =>{
        event.preventDefault();
        setValues({...values, loading:true})
        if(code===""){ 
           setValues({...values, loading:false})
          return Swal.fire('Oops...', 'School code is required', 'error');
        }
        if(district===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'District is required', 'error');
        }
        if(names===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'School Name is required', 'error');
        }
        if(schoolType===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'School Type is required', 'error');
        }
        if(schoolCat===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'School Category is required', 'error');
        }
        if(estabYear===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Establishment Year is required', 'error');
        }
        if(ownership===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'School ownership is required', 'error');
        }
        if(eduLevel===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Education Level is required', 'error');
        }
        if(province===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'School locality is required', 'error');
        }
        if(mailBox===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'School mailBox is required', 'error');
        }
        if(fax===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Fax is required', 'error');
        }
        if(phone===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Phone number is required', 'error');
        }
        if(address===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'School address is required', 'error');
        }
        if(email===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'School email is required', 'error');
        }

        if(password==="") {
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Password must empty', 'error');
        }

        if(password !== password2) {
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Password must match each other', 'error');
        }
        handleCreate();
    }

    const handleCreate =async ()=>{
        const school = {code, names, district, email, contact:[{phone, fax, mailBox, province, address}],eduLevel, ownership, estabYear, schoolCat, schoolType, headID, password}
        const Auth = await isAuthenticated()
        const data = await create(school, Auth.token);
        if(!data){
            Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
            return setValues({...values, loading:false})
        }
        if(data.error){
            Swal.fire('Oops...', data.error, 'error')
            return setValues({...values, loading:false})
        }
        if(data.message){
            Swal.fire('Saved...', data.message, 'success')
           setValues({...values, loading:false, redirectToPage:true})
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

    const redirectUser = () => {
        if (redirectToPage){
            return <Redirect to="/admin/schools/create" />
        }
    };

    React.useEffect(() => {
        const bootstrap = async () =>{
            const Auth = await isAuthenticated()
            const dist = await readsDistrict(Auth.token);
            //let code = `SCH${`0013`}`;
            //code
            setValues(v => ({...v, districtList:dist.data})); 
        }
        bootstrap()
    }, [])
    

    return (
        <Aux>
            {redirectUser()}
            <div className="container">
                <h1>Add new School</h1> 
                <hr />
                <h2> <Link to="/admin/schools/read" > Read Schools </Link></h2>
                <hr />
                <div className="row">
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">School Name </label>
                            <input type="text" placeholder="school name" onChange={handleChange("names")} value={names} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">District </label>
                            <select onChange={handleChange("district")} value={district} className="form-control">
                                <option >Select district</option>
                                {
                                    districtList && districtList.length > 0 
                                    ?
                                    districtList.map((dist, id)=>{
                                        return(
                                            <option value={dist._id}>{dist.names}</option>
                                        ) 
                                    }) : <option value="0">wait | reload the page</option>
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Address </label>
                            <input type="text" placeholder="location, province e.g Veisaru Road, Savusavu" onChange={handleChange("address")} value={address}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Locality</label>
                            <select onChange={handleChange("province")} value={province}  className="form-control">
                                <option>Select locality</option>
                                <option value="Metropolian">City Metropolian</option>
                                <option value="Surburban">City Surburban</option>
                                <option value="Urban">Peri Urban</option>
                                <option value="Remote">Remote</option>
                                <option value="Rural">Rural</option>
                                <option value="Town">Town</option>
                                <option value="Very-Remote">Very Remote</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">P.O Box </label>
                            <input  type="text" placeholder="P.O BOX 123, Tavua" onChange={handleChange("mailBox")} value={mailBox} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Phone number  </label>
                            <input type="text" placeholder="official school phone number" onChange={handleChange("phone")} value={phone}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Fax number </label>
                            <input type="text" placeholder="school fax" onChange={handleChange("fax")} value={fax} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"> Education Level </label>
                            <select onChange={handleChange("eduLevel")} value={eduLevel}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                <option>Select Education Level</option>
                                <option value="ECE">ECE</option>
                                <option value="Primary">Primary</option>
                                <option value="Secondary">Secondary</option>
                                <option value="TVET">TVET</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Year Estab. </label>
                            <input type="date" placeholder="year founded" onChange={handleChange("estabYear")} value={estabYear} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"> School Ownership</label>
                            <select onChange={handleChange("ownership")} value={ownership}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                <option>Select School Ownership</option>
                                <option value="Government">Government</option>
                                <option value="Non-Government">Non-Government</option>
                                <option value="Private">Private</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"> School cayegory</label>
                            <select onChange={handleChange("schoolCat")} value={schoolCat} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                <option>Select School Category</option>
                                <option value="Regular">Regular</option>
                                <option value="Special">Special</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">School Type </label>
                            <select onChange={handleChange("schoolType")} value={schoolType} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"> 
                                <option>Select School Type</option>
                                <option value="Day">Day</option>
                                <option value="Boarding1">Registered Boarding</option>
                                <option value="Boarding2">Unregistered Boarding</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email </label>
                            <input type="email" placeholder="email" onChange={handleChange("email")} value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Password  </label>
                            <input type="password" placeholder="Password" onChange={handleChange("password")} value={password} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Password Again </label>
                            <input type="password" placeholder="Password Confirmation" onChange={handleChange("password2")} value={password2} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">School Code</label>
                            <input type="text" placeholder="school code" onChange={handleChange("code")} value={code} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    {
                        loading ? <button type="submit"  className="btn btn-primary offset-9" disabled >Loading ...</button> : <button type="submit"  className="btn btn-primary offset-9" onClick={submit}  >Create .. </button>
                    }
                </div>
            </div>
            {/* <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h3">Add New School</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form>

                                            // <Form.Group controlId="formBasicEmail">
                                            //     <Form.Label>School Code</Form.Label>
                                            //     <Form.Control type="text" placeholder="school code" onChange={handleChange("code")} value={code} disabled />
                                            // </Form.Group>


                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>School Name</Form.Label>
                                                <Form.Control type="text" placeholder="school name" onChange={handleChange("names")} value={names} />
                                            </Form.Group>
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
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Address </Form.Label>
                                                <Form.Control type="text" placeholder="location, province e.g Veisaru Road, Savusavu" onChange={handleChange("address")} value={address} />
                                            </Form.Group>
                                           
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Locality</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("province")} value={province}>
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
                                                <Form.Control type="text" placeholder="P.O BOX 123, Tavua" onChange={handleChange("mailBox")} value={mailBox} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Phone </Form.Label>
                                                <Form.Control type="text" placeholder="official school phone number" onChange={handleChange("phone")} value={phone} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Fax</Form.Label>
                                                <Form.Control type="text" placeholder="school fax" onChange={handleChange("fax")} value={fax} />
                                            </Form.Group>
                                            {
                                                loading ? "loading ..." : <Button variant="primary" onClick={submit}  >Create ..</Button>
                                            }
                                        </Form>
                                    </Col>
                                    <Col md={6}>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Education Level</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("eduLevel")} value={eduLevel}>
                                                <option>Select Education Level</option>
                                                <option value="ECE">ECE</option>
                                                <option value="Primary">Primary</option>
                                                <option value="Secondary">Secondary</option>
                                                <option value="TVET">TVET</option>
                                            </Form.Control>
                                            </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Estab. Year </Form.Label>
                                                <Form.Control type="date" placeholder="year founded" onChange={handleChange("estabYear")} value={estabYear} />
                                            </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Ownership</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("ownership")} value={ownership}>
                                                <option>Select School Ownership</option>
                                                <option value="Government">Government</option>
                                                <option value="Non-Government">Non-Government</option>
                                                <option value="Private">Private</option>
                                                
                                            </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>School Category</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("schoolCat")} value={schoolCat}>
                                                <option>Select School Category</option>
                                                <option value="Regular">Regular</option>
                                                <option value="Special">Special</option>
                                            </Form.Control>
                                     </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>School Type</Form.Label>
                                            <Form.Control as="select" onChange={handleChange("schoolType")} value={schoolType}>
                                                <option>Select School Type</option>
                                                <option value="Day">Day</option>
                                                <option value="Boarding1">Registered Boarding</option>
                                                <option value="Boarding2">Unregistered Boarding</option>
                                            </Form.Control>
                                     </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>email </Form.Label>
                                            <Form.Control type="email" placeholder="email" onChange={handleChange("email")} value={email}/>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" onChange={handleChange("password")} value={password} />
                                            </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password Confirmation</Form.Label>
                                            <Form.Control type="password" placeholder="Password Confirmation" onChange={handleChange("password2")} value={password2} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row> */}
        </Aux>
    )
}