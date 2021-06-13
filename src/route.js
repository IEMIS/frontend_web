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

const TeacherSignIn = React.lazy(() => import('./screen/Auth/teacher/SignIn'))
const TeacherForget = React.lazy(() => import('./screen/Auth/teacher/Forget'))
const TeacherReset = React.lazy(() => import('./screen/Auth/teacher/Reset'))

const StaffSignIn = React.lazy(() => import('./screen/Auth/staff/SignIn'))
const StaffForget = React.lazy(() => import('./screen/Auth/staff/Forget'))
const StaffReset = React.lazy(() => import('./screen/Auth/staff/Reset'))

const StudentSignIn = React.lazy(() => import('./screen/Auth/student/SignIn'))
const StudentForget = React.lazy(() => import('./screen/Auth/student/Forget'))
const StudentReset = React.lazy(() => import('./screen/Auth/student/Reset'))

const ParentSignIn = React.lazy(() => import('./screen/Auth/parent/SignIn'))
const ParentForget = React.lazy(() => import('./screen/Auth/parent/Forget'))
const ParentReset = React.lazy(() => import('./screen/Auth/parent/Reset'))

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

    { path: '/auth/teacher/signin', exact: true, name: 'teacher-signin', component: TeacherSignIn },
    { path: '/auth/teacher/forget', exact: true, name: 'teacher-forget', component: TeacherForget },
    { path: '/auth/teacher/reset', exact: true, name: 'teacher-reset', component: TeacherReset},

    { path: '/auth/staff/signin', exact: true, name: 'staff-signin', component: StaffSignIn },
    { path: '/auth/staff/forget', exact: true, name: 'staff-forget', component: StaffForget },
    { path: '/auth/staff/reset', exact: true, name: 'staff-reset', component: StaffReset},

    

    { path: '/auth/student/signin', exact: true, name: 'student-signin', component: StudentSignIn },
    { path: '/auth/student/forget', exact: true, name: 'student-forget', component: StudentForget },
    { path: '/auth/student/reset', exact: true, name: 'student-reset', component: StudentReset},

    { path: '/auth/parent/signin', exact: true, name: 'parent-signin', component: ParentSignIn },
    { path: '/auth/parent/forget', exact: true, name: 'parent-forget', component: ParentForget },
    { path: '/auth/parent/reset', exact: true, name: 'parent-reset', component: ParentReset},
];

export default route;