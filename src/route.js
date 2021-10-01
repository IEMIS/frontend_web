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
const DSignOut = React.lazy(() => import('./screen/Auth/district/SignOut'))

const SchoolSignIn = React.lazy(() => import('./screen/Auth/school/SignIn'))
const SchoolForget = React.lazy(() => import('./screen/Auth/school/Forget'))
const SchoolReset = React.lazy(() => import('./screen/Auth/school/Reset'))
const SchoolSignOut = React.lazy(() => import('./screen/Auth/school/SignOut'))

const TeacherSignIn = React.lazy(() => import('./screen/Auth/teacher/SignIn'))
const TeacherForget = React.lazy(() => import('./screen/Auth/teacher/Forget'))
const TeacherReset = React.lazy(() => import('./screen/Auth/teacher/Reset'))
const TeacherSignOut = React.lazy(() => import('./screen/Auth/teacher/SignOut'))

const StaffSignIn = React.lazy(() => import('./screen/Auth/staff/SignIn'))
const StaffForget = React.lazy(() => import('./screen/Auth/staff/Forget'))
const StaffReset = React.lazy(() => import('./screen/Auth/staff/Reset'))
const StaffSignOut = React.lazy(() => import('./screen/Auth/staff/SignOut'))

const StudentSignIn = React.lazy(() => import('./screen/Auth/student/SignIn'))
const StudentForget = React.lazy(() => import('./screen/Auth/student/Forget'))
const StudentReset = React.lazy(() => import('./screen/Auth/student/Reset'))
const StudentSignOut = React.lazy(() => import('./screen/Auth/student/SignOut'))

const ParentSignIn = React.lazy(() => import('./screen/Auth/parent/SignIn'))
const ParentForget = React.lazy(() => import('./screen/Auth/parent/Forget'))
const ParentReset = React.lazy(() => import('./screen/Auth/parent/Reset'))
const ParentSignOut = React.lazy(() => import('./screen/Auth/parent/SignOut'))

const route = [
    { path: '/', exact: true, name: 'front-page', component: Front },
    { path: '/home', exact: true, name: 'Home', component: Home},
    { path: '/about', exact: true, name: 'Home', component: About},
    { path: '/feature', exact: true, name: 'Home', component: Feature},
    { path: '/auth/admin/signin', exact: true, name: 'admin-signin', component: AdminSignIn },
    { path: '/auth/admin/forget', exact: true, name: 'admin-forget', component: AdminForget},
    { path: '/auth/admin/reset/:resetToken', exact: true, name: 'admin-reset', component: AdminReset },

    { path: '/admin/signout', exact: true, name: 'admin-signout', component: AdminSignOut },

    { path: '/auth/district/signin', exact: true, name: 'd-signin', component: DSignIn },
    { path: '/auth/district/forget', exact: true, name: 'd-forget', component: DForget },
    { path: '/auth/district/reset/:resetToken', exact: true, name: 'd-reset', component: DReset},
    { path: '/district/signout', exact: true, name: 'd-signout', component: DSignOut },

    { path: '/auth/school/signin', exact: true, name: 'school-signin', component: SchoolSignIn },
    { path: '/auth/school/forget', exact: true, name: 'school-forget', component: SchoolForget },
    { path: '/auth/school/reset/:resetToken', exact: true, name: 'school-reset', component: SchoolReset},
    { path: '/school/signout', exact: true, name: 'school-signout', component: SchoolSignOut },

    { path: '/auth/teacher/signin', exact: true, name: 'teacher-signin', component: TeacherSignIn },
    { path: '/auth/teacher/forget', exact: true, name: 'teacher-forget', component: TeacherForget },
    { path: '/auth/teacher/reset/:resetToken', exact: true, name: 'teacher-reset', component: TeacherReset},
    { path: '/teacher/signout', exact: true, name: 'teacher-signout', component: TeacherSignOut },

    { path: '/auth/staff/signin', exact: true, name: 'staff-signin', component: StaffSignIn },
    { path: '/auth/staff/forget', exact: true, name: 'staff-forget', component: StaffForget },
    { path: '/auth/staff/reset/:resetToken', exact: true, name: 'staff-reset', component: StaffReset},
    { path: '/staff/signout', exact: true, name: 'staff-signout', component: StaffSignOut },
    

    { path: '/auth/student/signin', exact: true, name: 'student-signin', component: StudentSignIn },
    { path: '/auth/student/forget', exact: true, name: 'student-forget', component: StudentForget },
    { path: '/auth/student/reset/:resetToken', exact: true, name: 'student-reset', component: StudentReset},
    { path: '/student/signout', exact: true, name: 'student-signout', component: StudentSignOut },

    { path: '/auth/parent/signin', exact: true, name: 'parent-signin', component: ParentSignIn },
    { path: '/auth/parent/forget', exact: true, name: 'parent-forget', component: ParentForget },
    { path: '/auth/parent/reset/:resetToken', exact: true, name: 'parent-reset', component: ParentReset},
    { path: '/parent/signout', exact: true, name: 'parent-signout', component: ParentSignOut },
];

export default route;