import React from 'react'
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {Redirect} from 'react-router-dom'
import { create } from './api';
import {isAuthenticated} from '../../Auth/admin/api'
import { Link } from 'react-router-dom';


export default function Create() {
    const [values, setValues] = React.useState({
        //code:"",
        names:"",
        phone:"",
        address:"",
        email:"",
        status:true,
        password:"",
        password2:"",
        loading:false,
        redirectToPage:false,
        
    })
    const { /*code,*/ names, phone, email, password, password2, address, status, loading, redirectToPage} = values

    const handleChange = name=>event=>{
        setValues({...values, [name]:event.target.value})
    }

    const submit = event =>{
        event.preventDefault();
        setValues({...values, loading:true})
        if(names===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'District name is required', 'error');
        }
        if(phone===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'District Phone number is required', 'error');
        }
        if(address===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'District address is required', 'error');
        }
        if(email===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'District email is required', 'error');
        }
        if(password===""){ 
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Password can not be an empty value', 'error');
        }

        if(password !== password2) {
            setValues({...values, loading:false})
            return Swal.fire('Oops...', 'Password must match each other', 'error');
        }
        handleCreate();
    }

    const handleCreate =async ()=>{
        const user = {names, phone, email, password, password2, address, status}
        const Auth = await isAuthenticated()
        const data = await create(user, Auth.token);
        console.log({data})
        if(!data){
            Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
            return setValues({...values, loading:false})
        }
        if(data.error){
            Swal.fire('Oops...', data.error, 'error')
            return setValues({...values, loading:false})
        }
        if(data.message){
            //Swal.fire('Saved...', data.message, 'success')
            setValues({...values, loading:false, redirectToPage:true});
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
                title: data.message,
            })
        }
    }

    const redirectUser = () => {
        if (redirectToPage){
            return <Redirect to="/admin/districts/create" />
        }
    };

    return (
        <Aux>
            {redirectUser()}
            <div className="container">
                <h1>Add new District</h1> 
                <hr />
                <h2> <Link to="/admin/districts/read" > Read Districts </Link></h2>
                <hr />
                <div className="row"> 
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">District Name </label>
                            <input  type="text" placeholder="district name" onChange={handleChange("names")} value={names} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Phone Number </label>
                            <input  type="text" placeholder="district phone" onChange={handleChange("phone")} value={phone} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email Address</label>
                            <input  type="email" placeholder="email" onChange={handleChange("email")} value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Address </label>
                            <input  type="text" placeholder="building/house name, city" onChange={handleChange("address")} value={address} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Password </label>
                            <input type="password" placeholder="Password" onChange={handleChange("password")} value={password} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Passwodr Again </label>
                            <input  type="password" placeholder="Password Confirmation" onChange={handleChange("password2")} value={password2}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    {loading ? <button type="submit"  className="btn btn-primary offset-9" disabled >Loading ...</button> : <button className="btn btn-primary offset-9" variant="primary" onClick={submit} > Create ..</button>}
                </div>
            </div>
        </Aux>
    )
}
