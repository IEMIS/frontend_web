import React, {useState} from 'react';
import {NavLink, Redirect} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import Swal from 'sweetalert2'

import {reset} from './api';
import Navigation from '../welcome/components/Navigation';

//class SignIn extends React.Component {

const Reset = () => {
  

    //render () {
        const [values, setValues] = useState({
            loading:false,
            resetToken:"",
            password:"",
            passwordConfirmation:"",
            redirectToPage:false
        })
        const {loading, password, passwordConfirmation, resetToken, redirectToPage} = values;

        const handleChange = name => event => {
            setValues({ ...values, error: false, [name]: event.target.value });
        };

        

        const submit = event =>{
            event.preventDefault();
            setValues({...values, loading:true})
            if(resetToken===""){
                Swal.fire('Oops...', 'reset token is required!', 'error')
                return setValues({...values, loading:false})
            }
            if(password===""){
                Swal.fire('Oops...', 'password is required!', 'error')
                return setValues({...values, loading:false})
            }
            if(password !== passwordConfirmation){
                Swal.fire('Oops...', 'password must match each other!', 'error')
                return setValues({...values, loading:false})
            }

            handleReset(); 
        }
        const handleReset = async () =>{
            let user = {resetToken, password, passwordConfirmation}
            const data  = await reset(user);
            console.log(data)
            if(!data){
                Swal.fire('Oops...', 'Internal server error, Please, check your internet connection', 'error')
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

            Swal.fire(' :)', data.message, 'success')

            await Toast.fire({
                animation: true,
                type: 'success',
                title: 'password successfully reset'
            })
            setValues({...values, loading:false, redirectToPage:true})
       
            //console.log({data})
        }

        const redirectUser = () => {
            if (redirectToPage){
                return <Redirect to="/auth/admin/login" />
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
                                <h3 className="mb-4">Admin | Reset Password </h3>
                                <div className="input-group mb-3">
                                    <input type="input" className="form-control"  onChange={handleChange("resetToken")} value={resetToken} placeholder="Reset Token"/>
                                </div>
                            
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control"  onChange={handleChange("password")} value={password} placeholder="Password"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" onChange={handleChange("passwordConfirmation")} value={passwordConfirmation} placeholder="password confirmation"/>
                                </div>
                    
                                {
                                    loading ? "Loading " : <button className="btn btn-primary shadow-2 mb-4" onClick={submit}>Reset Password</button>
                                }
                                
                                <p className="mb-2 text-muted">I know password? <NavLink to="/auth/admin/signin">Login</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    //}
}

export default Reset;