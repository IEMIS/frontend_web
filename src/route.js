import React from 'react';


const Front = React.lazy(()=>import('./screen/Auth/welcome/Front'))
const Home = React.lazy(()=>import('./screen/Auth/welcome/Home'))
const About = React.lazy(()=>import('./screen/Auth/welcome/About'))
const Feature = React.lazy(()=>import('./screen/Auth/welcome/Feature'))
const AdminSignIn = React.lazy(() => import('./screen/Auth/admin/SignIn'))
const AdminForget = React.lazy(() => import('./screen/Auth/admin/Forget'))
const AdminReset = React.lazy(() => import('./screen/Auth/admin/Reset'))
const AdminSignOut = React.lazy(() => import('./screen/Auth/admin/SignOut'))

const DSignIn = React.lazy(() => import('./screen/Auth/district/SignIn'))
const DForget = React.lazy(() => import('./screen/Auth/district/Forget'))
const DReset = React.lazy(() => import('./screen/Auth/district/Reset'))

const SchoolSignIn = React.lazy(() => import('./screen/Auth/school/SignIn'))
const SchoolForget = React.lazy(() => import('./screen/Auth/school/Forget'))
const SchoolReset = React.lazy(() => import('./screen/Auth/school/Reset'))

const route = [
    { path: '/', exact: true, name: 'front-page', component: Front },
    { path: '/home', exact: true, name: 'Home', component: Home},
    { path: '/about', exact: true, name: 'Home', component: About},
    { path: '/feature', exact: true, name: 'Home', component: Feature},
    { path: '/auth/admin/signin', exact: true, name: 'admin-signin', component: AdminSignIn },
    { path: '/auth/admin/forget', exact: true, name: 'admin-forget', component: AdminForget},
    { path: '/auth/admin/reset', exact: true, name: 'admin-reset', component: AdminReset },

    { path: '/admin/signout', exact: true, name: 'admin-signout', component: AdminSignOut },

    { path: '/auth/district/signin', exact: true, name: 'd-signin', component: DSignIn },
    { path: '/auth/district/forget', exact: true, name: 'd-forget', component: DForget },
    { path: '/auth/district/reset', exact: true, name: 'd-reset', component: DReset},

    { path: '/auth/school/signin', exact: true, name: 'school-signin', component: SchoolSignIn },
    { path: '/auth/school/forget', exact: true, name: 'school-forget', component: SchoolForget },
    { path: '/auth/school/reset', exact: true, name: 'school-reset', component: SchoolReset},

    { path: '/auth/teacher/signin', exact: true, name: 'teacher-signin', component: SchoolSignIn },
    { path: '/auth/teacher/forget', exact: true, name: 'teacher-forget', component: SchoolForget },
    { path: '/auth/teacher/reset', exact: true, name: 'teacher-reset', component: SchoolReset},

    { path: '/auth/staff/signin', exact: true, name: 'staff-signin', component: SchoolSignIn },
    { path: '/auth/staff/forget', exact: true, name: 'staff-forget', component: SchoolForget },
    { path: '/auth/staff/reset', exact: true, name: 'staff-reset', component: SchoolReset},

    

    { path: '/auth/student/signin', exact: true, name: 'student-signin', component: SchoolSignIn },
    { path: '/auth/student/forget', exact: true, name: 'student-forget', component: SchoolForget },
    { path: '/auth/student/reset', exact: true, name: 'student-reset', component: SchoolReset},

    { path: '/auth/parent/signin', exact: true, name: 'parent-signin', component: SchoolSignIn },
    { path: '/auth/parent/forget', exact: true, name: 'parent-forget', component: SchoolForget },
    { path: '/auth/parent/reset', exact: true, name: 'parent-reset', component: SchoolReset},


];

export default route;