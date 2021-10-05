
import React from 'react';
import $ from 'jquery';


window.jQuery = $;
window.$ = $;
global.jQuery = $;


const SchoolData = React.lazy(() => import('./Dashboard'));
const IndicatorData = React.lazy(() => import('./IndicatorData'));

const CreateStudent = React.lazy(()=>import('./students/Create'))
const ReadStudent= React.lazy(()=>import('./students/Read'))
const EditStudent = React.lazy(()=>import('./students/Edit'));
const ReadOneStudent = React.lazy(()=>import('./students/One'))
const DeleteStudent = React.lazy(()=>import('./students/Delete'))

const CreateTeacher = React.lazy(()=>import('./teachers/Create'))
const ReadTeacher= React.lazy(()=>import('./teachers/Read'))
const EditTeacher = React.lazy(()=>import('./teachers/Edit'));
const ReadOneTeacher = React.lazy(()=>import('./teachers/One'))
const DeleteTeacher = React.lazy(()=>import('./teachers/Delete'))

const CreateStaffs = React.lazy(()=>import('./staffs/Create'))
const ReadStaffs= React.lazy(()=>import('./staffs/Read'))
const EditStaffs = React.lazy(()=>import('./staffs/Edit'));
const ReadOneStaffs = React.lazy(()=>import('./staffs/One'))
const DeleteStaffs = React.lazy(()=>import('./staffs/Delete'))

const routes = [
    { path: '/school', exact: true, name: 'admin-district', component: SchoolData },
    { path: '/school/indicator', exact: true, name: 'admin-indicator', component: IndicatorData },
  
    { path: '/school/students/create', exact: true, name: 'admin-sch-create', component: CreateStudent},
    { path: '/school/students/read', exact: true, name: 'admin-sch-read', component: ReadStudent},
    { path: '/school/students/read/:id', exact: true, name: 'admin-sch-read-one', component:ReadOneStudent},
    { path: '/school/students/edit/:id', exact: true, name: 'admin-sch-edit', component: EditStudent},
    { path: '/school/students/delete/:id', exact: true, name: 'admin-sch-delete', component: DeleteStudent},

    { path: '/school/teachers/create', exact: true, name: 'admin-sch-create', component: CreateTeacher},
    { path: '/school/teachers/read', exact: true, name: 'admin-sch-read', component: ReadTeacher},
    { path: '/school/teachers/read/:id', exact: true, name: 'admin-sch-read-one', component:ReadOneTeacher},
    { path: '/school/teachers/edit/:id', exact: true, name: 'admin-sch-edit', component: EditTeacher},
    { path: '/school/teachers/delete/:id', exact: true, name: 'admin-sch-delete', component: DeleteTeacher},

    { path: '/school/staffs/create', exact: true, name: 'admin-sch-create', component: CreateStaffs},
    { path: '/school/staffs/read', exact: true, name: 'admin-sch-read', component: ReadStaffs},
    { path: '/school/staffs/read/:id', exact: true, name: 'admin-sch-read-one', component:ReadOneStaffs},
    { path: '/school/staffs/edit/:id', exact: true, name: 'admin-sch-edit', component: EditStaffs},
    { path: '/school/staffs/delete/:id', exact: true, name: 'admin-sch-delete', component: DeleteStaffs},
];

export default routes;

