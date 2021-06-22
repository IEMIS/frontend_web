
import React from 'react';
import $ from 'jquery';


window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Dashboard = React.lazy(() => import('./Dashboard'));
const Profile = React.lazy(()=> import('./Profile'))
const SignOut = React.lazy(()=>import('../Auth/student/SignOut'))

const CurrentClass = React.lazy(()=> import('./class/Read'))
const ClassHistory = React.lazy(()=> import('./class/History'))
const RegisterSubject = React.lazy(()=> import('./subject/Create'))
const ReadSubject = React.lazy(()=> import('./subject/Read'))





const routes = [
    { path: '/student', exact: true, name: 'student', component: Dashboard },
    { path: '/student/subject/read', exact: true, name: 'student-subject', component: ReadSubject },
    { path: '/student/subject/create', exact: true, name: 'student-subject-create', component: RegisterSubject },
    { path: '/student/class', exact: true, name: 'student-class', component: CurrentClass },
    { path: '/student/class/history', exact: true, name: 'student-class-history', component: ClassHistory },
    { path: '/student/profile', exact: true, name: 'student-profile', component: Profile },

    { path: '/student/auth/signout', exact: true, name: 'student-auth-signout', component: SignOut },  
];

export default routes;

