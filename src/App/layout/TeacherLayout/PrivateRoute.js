
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./../../../screen/Auth/school/api";

const PrivateRoute = ({ render: Component, ...rest }) => (
    <Route
        {...rest}
        component={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/auth/teacher/signin",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);
export default PrivateRoute;
