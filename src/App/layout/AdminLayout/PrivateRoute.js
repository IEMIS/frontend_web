/*import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';
import {isAuthenticated} from './index';

const PrivateRoute = ({ component: Component, ...rest})=>{

    <Route
        {...rest}
        render={props =>
                isAuthenticated() ? (
                <component {...props} />
                ):(
                <Redirect 
                to={{
                    pathname:"/SignIn",
                    state: { from: props.location }
                }} 
                />
                )
        }
    />
};
export default PrivateRoute;
*/
import React from "react";
import { Route, Redirect } from "react-router-dom";
//import { isAuthenticated } from "./index";

const PrivateRoute = ({ render: Component, ...rest }) => (
    // props means components passed down to this pricate route component
    <Route
        {...rest}
        component={props =>
            //isAuthenticated() 
            true ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/auth/admin/signin",
                        //state: { from: props.location }
                    }}
                />
            )
        }
    />
);
export default PrivateRoute;
