import React, {useState} from 'react';
import {NavLink, Redirect} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import Swal from 'sweetalert2'

import {authenticate, login} from './api';
import Navigation from '../welcome/components/Navigation';

//class SignIn extends React.Component {

const SignIn = () => {
  

    //render () {
        const [values, setValues] = useState({
            loading:false,
            password:"",
            email:"",
            redirectToPage:false
        })
        const {loading, password, email, redirectToPage} = values;

        const handleChange = name => event => {
            setValues({ ...values, error: false, [name]: event.target.value });
        };

        

        const submit = event =>{
            event.preventDefault();
            setValues({...values, loading:true})
            if(email===""){
                Swal.fire('Oops...', 'A valid email address required!', 'error')
                return setValues({...values, loading:false})
            }
            if(password===""){
                Swal.fire('Oops...', 'password is required!', 'error')
                return setValues({...values, loading:false})
            }
            handleSigin(); 
        }
        const handleSigin = async () =>{
            let user = {email, password}
            const data  = await login(user);
            if(!data){
                Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
                return setValues({...values, loading:false})
            }

            if(data.error){
                Swal.fire('Oops...', data.error, 'error')
                return setValues({...values, loading:false})
            }

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
                title: 'Signed in successfully'
            })
       
            authenticate(data, ()=>{
                setValues({...values, loading:false, redirectToPage:true})
            })
            
            console.log({data})
        }

        const redirectUser = () => {
            if (redirectToPage){
                return <Redirect to="/school" />
            }
        };
        return(
            <Aux>
                {redirectUser()}
                <Breadcrumb/>
                <Navigation />
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon"/>
                                </div>
                                <h3 className="mb-4">Parent Login  </h3>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" name="email" onChange={handleChange("email")} value={email} placeholder="Email"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" placeholder="password" name="password"  onChange={handleChange("password")} value={password} />
                                </div>
                                <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                    </div>
                                </div>
                                {
                                    loading ? "Loading ... " : <button className="btn btn-primary shadow-2 mb-4" onClick={submit}>Login</button>
                                }
                                
                                <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/school/forget">Reset</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    //}
}

export default SignIn;