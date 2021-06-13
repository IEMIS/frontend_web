import React, {useState} from 'react';
import {NavLink, Redirect} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import Swal from 'sweetalert2'

import {forget} from './api';
import Navigation from '../welcome/components/Navigation';

//class SignIn extends React.Component {

const Forget = () => {
  

    //render () {
        const [values, setValues] = useState({
            loading:false,
            email:"",
            redirectToPage:false
        })
        const {loading, email, redirectToPage} = values;

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
           
            handleForget(); 
        }
        const handleForget = async () =>{
            let user = {email}
            const data  = await forget(user);
            if(!data){
                Swal.fire('Oops...', 'Internal server error, Please, check your internet connection', 'error')
                return setValues({...values, loading:false})
            }
            console.log(data)
            if(data.error){
                Swal.fire('Oops...', data.error, 'error')
                return setValues({...values, loading:false})
            }
            let Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });
            Toast.fire({
                type: 'success',
                title: 'request successful'
            })
            Swal.fire(' :)', data.message, 'success')
            setValues({...values, loading:false, redirectToPage:true})
        }

        const redirectUser = () => {
            if (redirectToPage){
                return <Redirect to="/auth/school/reset" />
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
                                <h3 className="mb-4">schools | Forget Password  </h3>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" name="email" onChange={handleChange("email")} value={email} placeholder="Email"/>
                                </div>
                                {
                                    loading ? "Loading " : <button className="btn btn-primary shadow-2 mb-4" onClick={submit}>Request !</button>
                                }
                                <p className="mb-2 text-muted">I know password? <NavLink to="/auth/school/signin">Login</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    //}
}

export default Forget;