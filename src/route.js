import React from 'react';

const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const Signin1 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));

const AdminSignIn = React.lazy(() => import('./screen/Auth/admin/SignIn1'))

const route = [
    { path: '/auth/', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/auth/admin/signup', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/auth/admin/signin', exact: true, name: 'Signup 1', component: AdminSignIn },
    { path: '/auth/admin/forget', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/auth/admin/reset', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/auth/signin', exact: true, name: 'Signin 1', component: Signin1 }
];

export default route;