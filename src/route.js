import React from 'react';

const Home = React.lazy(()=>import('./screen/Auth/welcome/Home'))
const AdminSignIn = React.lazy(() => import('./screen/Auth/admin/SignIn'))
const AdminForget = React.lazy(() => import('./screen/Auth/admin/SignIn'))
const AdminReset = React.lazy(() => import('./screen/Auth/admin/SignIn'))

const DSignIn = React.lazy(() => import('./screen/Auth/admin/SignIn'))
const DForget = React.lazy(() => import('./screen/Auth/admin/SignIn'))
const DReset = React.lazy(() => import('./screen/Auth/admin/SignIn'))

const SchoolSignIn = React.lazy(() => import('./screen/Auth/admin/SignIn'))
const SchoolForget = React.lazy(() => import('./screen/Auth/admin/SignIn'))
const SchoolReset = React.lazy(() => import('./screen/Auth/admin/SignIn'))

const route = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/auth/admin/signin', exact: true, name: 'admin-signin', component: AdminSignIn },
    { path: '/auth/admin/forget', exact: true, name: 'admin-forget', component: AdminForget},
    { path: '/auth/admin/reset', exact: true, name: 'admin-reset', component: AdminReset },
    { path: '/auth/district/signin', exact: true, name: 'd-signin', component: DSignIn },
    { path: '/auth/district/forget', exact: true, name: 'd-forget', component: DForget },
    { path: '/auth/district/reset', exact: true, name: 'd-reset', component: DReset},
    { path: '/auth/school/signin', exact: true, name: 'school-signin', component: SchoolSignIn },
    { path: '/auth/school/forget', exact: true, name: 'school-forget', component: SchoolForget },
    { path: '/auth/school/reset', exact: true, name: 'school-reset', component: SchoolReset}
];

export default route;