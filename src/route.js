import React from 'react';

const Home = React.lazy(()=>import('./screen/Auth/welcome/Home'))
const AdminSignIn = React.lazy(() => import('./screen/Auth/admin/SignIn1'))
const AdminForget = React.lazy(() => import('./screen/Auth/admin/SignIn1'))
const AdminReset = React.lazy(() => import('./screen/Auth/admin/SignIn1'))

const DSignIn = React.lazy(() => import('./screen/Auth/admin/SignIn1'))
const DForget = React.lazy(() => import('./screen/Auth/admin/SignIn1'))
const DReset = React.lazy(() => import('./screen/Auth/admin/SignIn1'))

const SchoolSignIn = React.lazy(() => import('./screen/Auth/admin/SignIn1'))
const SchoolForget = React.lazy(() => import('./screen/Auth/admin/SignIn1'))
const SchoolReset = React.lazy(() => import('./screen/Auth/admin/SignIn1'))

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