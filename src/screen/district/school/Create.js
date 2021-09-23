import React from 'react'
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {Redirect, Link} from 'react-router-dom'
import { create} from './api';
import {isAuthenticated} from '../../Auth/district/api'


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
        // if(code===""){ 
        //    setValues({...values, loading:false})
        //   return Swal.fire('Oops...', 'School code is required', 'error');
        // }
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
            return Swal.fire('Oops...', 'District address is required', 'error');
        }
        if(email===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'District email is required', 'error');
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
        // console.log({school})
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
            return <Redirect to="/district/schools/create" />
        }
    };

    React.useEffect(() => {
        const bootstrap = async () =>{
            const Auth = await isAuthenticated()
            //const dist = await readsDistrict(Auth.token);
            //let code = `SCH${`0013`}`;
            //code
            setValues(v => ({...v, district:Auth.district._id })); 
        }
        bootstrap()
    }, [])
    

    return (
        <Aux>
            {redirectUser()}
            <div className="container">
                <h1>Add new District</h1> 
                <hr />
                <h2> <Link to="/district/schools/read" > Read Schools </Link></h2>
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
                            <label htmlFor="exampleInputEmail1">Year Created </label>
                            <input type="date" placeholder="year founded" onChange={handleChange("estabYear")} value={estabYear} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"> School Ownership</label>
                            <select  className="form-control" onChange={handleChange("ownership")} value={ownership} id="exampleInputEmail1" aria-describedby="emailHelp">
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
                    {
                        loading ? <button type="submit"  className="btn btn-primary offset-9" disabled >Loading ...</button> : <button type="submit"  className="btn btn-primary offset-9" onClick={submit}  >Create .. </button>
                    }
                </div>
            </div>
        </Aux>
    )
}