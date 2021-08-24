
import React from "react";
import Aux from "../../../hoc/_Aux";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
import { create } from "./api";
import { isAuthenticated } from "../../Auth/admin/api";

export default function Create() {
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    middleName: "",
    phone: "",
    email: "",
    password: "",
    password2: "",
    level: "",
    loading: false,
    redirectToPage: false,
  });
  const {
    firstName,
    lastName,
    middleName,
    phone,
    email,
    password,
    password2,
    level,
    loading,
    redirectToPage,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    setValues({ ...values, loading: true });
    if (firstName === "") {
      setValues({ ...values, loading: false });
      return Swal.fire("Oops...", "Admin first Name is required", "error");
    }
    if (middleName === "") {
      setValues({ ...values, loading: false });
      return Swal.fire("Oops...", "Admin Middle Name is required", "error");
    }
    if (lastName === "") {
      setValues({ ...values, loading: false });
      return Swal.fire("Oops...", "Admin Last Name is required", "error");
    }
    if (email === "") {
      setValues({ ...values, loading: false });
      return Swal.fire("Oops...", "Email is required", "error");
    }
    if (phone === "") {
      setValues({ ...values, loading: false });
      return Swal.fire("Oops...", "Phone Number is required", "error");
    }

    if (password !== password2) {
      setValues({ ...values, loading: false });
      return Swal.fire("Oops...", "Password must match each other", "error");
    }
    handleCreate();
  };

  const handleCreate = async () => {
    const user = {
      firstName,
      lastName,
      middleName,
      phone,
      email,
      password,
      password2,
      level,
    };
    const Auth = isAuthenticated();
    const data = await create(user, Auth.token);
    if (!data) {
      Swal.fire(
        "Oops...",
        "internet server error, Please, check your network connection",
        "error"
      );
      return setValues({ ...values, loading: false });
    }
    if (data.error) {
      Swal.fire("Oops...", data.error, "error");
      return setValues({ ...values, loading: false });
    }
    if (data.message) {
      Swal.fire("saved...", data.message, "success");
      setValues({ ...values, loading: false, redirectToPage: true });
      let Toast = Swal.mixin({
        toast: true,
        timerProgressBar: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });

      return Toast.fire({
        animation: true,
        type: "success",
        title: "Request is successful",
      });
    }
  };

  const redirectUser = () => {
    if (redirectToPage) {
      return <Redirect to="/admin/users/create" />;
    }
  };

  return (
    <Aux>
      {redirectUser()}
      <div className="row">
        <div className="container">
          <h1>Add new Admin user</h1>
          <hr />
          <div className="row">
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">First Name </label>
                  <input  type="text"placeholder="First Name" onChange={handleChange("firstName")}value={firstName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Last Name</label>
                  <input  type="text"placeholder="Last Name" onChange={handleChange("lastName")} value={lastName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Middle Name</label>
                  <input  type="text" placeholder="Middle name" onChange={handleChange("middleName")} value={middleName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Phone Number </label>
                  <input type="text"placeholder="phone Number" onChange={handleChange("phone")} value={phone} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Admin Email Address</label>
                  <input  type="email" placeholder="email" onChange={handleChange("email")} value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Admin Role</label>
                  <select onChange={handleChange("level")} value={level} className="form-control">
                    <option>Select Role</option>
                    <option value="1">Admin</option>
                    <option value="2">Moderator</option> 
                  </select>
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Password</label>
                  <input type="password" placeholder="Password" onChange={handleChange("password")} value={password} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Password Again </label>
                  <input type="password" placeholder="Password" onChange={handleChange("password2")} value={password2} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            {loading ? <button type="submit"  className="btn btn-primary offset-9" disabled >Loading ...</button> : <button type="submit" onClick={submit}  className="btn btn-primary offset-9">Submit</button>}
            </div>
        </div>
      </div>
    </Aux>
  );
}
