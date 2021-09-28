
import React from 'react';
import $ from 'jquery';


window.jQuery = $;
window.$ = $;
global.jQuery = $;


const DistrictData = React.lazy(() => import('./DistrictData'));
const SchoolData = React.lazy(() => import('./SchoolData'));
const IndicatorData = React.lazy(() => import('./IndicatorData'));


const CreateSchool = React.lazy(()=>import('./school/Create'))
const ReadSchool = React.lazy(()=>import('./school/Read'))
const EditSchool = React.lazy(()=>import('./school/Edit'));
const ReadOneSchool = React.lazy(()=>import('./school/One'))
const DeleteSchool = React.lazy(()=>import('./school/Delete'))

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
    { path: '/district', exact: true, name: 'admin-district', component: DistrictData },
    { path: '/district/indicator', exact: true, name: 'admin-indicator', component: IndicatorData },
    { path: '/district/schools', exact: true, name: 'admin-school', component: SchoolData },
    
    { path: '/district/schools/create', exact: true, name: 'admin-sch-create', component: CreateSchool},
    { path: '/district/schools/read', exact: true, name: 'admin-sch-read', component: ReadSchool},
    { path: '/district/schools/read/:id', exact: true, name: 'admin-sch-read-one', component:ReadOneSchool},
    { path: '/district/schools/edit/:id', exact: true, name: 'admin-sch-edit', component: EditSchool},
    { path: '/district/schools/delete/:id', exact: true, name: 'admin-sch-delete', component: DeleteSchool},

    { path: '/district/students/create', exact: true, name: 'admin-sch-create', component: CreateStudent},
    { path: '/district/students/read', exact: true, name: 'admin-sch-read', component: ReadStudent},
    { path: '/district/students/read/:id', exact: true, name: 'admin-sch-read-one', component:ReadOneStudent},
    { path: '/district/students/edit/:id', exact: true, name: 'admin-sch-edit', component: EditStudent},
    { path: '/district/students/delete/:id', exact: true, name: 'admin-sch-delete', component: DeleteStudent},

    { path: '/district/teachers/create', exact: true, name: 'admin-sch-create', component: CreateTeacher},
    { path: '/district/teachers/read', exact: true, name: 'admin-sch-read', component: ReadTeacher},
    { path: '/district/teachers/read/:id', exact: true, name: 'admin-sch-read-one', component:ReadOneTeacher},
    { path: '/district/teachers/edit/:id', exact: true, name: 'admin-sch-edit', component: EditTeacher},
    { path: '/district/teachers/delete/:id', exact: true, name: 'admin-sch-delete', component: DeleteTeacher},

    { path: '/district/staffs/create', exact: true, name: 'admin-sch-create', component: CreateStaffs},
    { path: '/district/staffs/read', exact: true, name: 'admin-sch-read', component: ReadStaffs},
    { path: '/district/staffs/read/:id', exact: true, name: 'admin-sch-read-one', component:ReadOneStaffs},
    { path: '/district/staffs/edit/:id', exact: true, name: 'admin-sch-edit', component: EditStaffs},
    { path: '/district/staffs/delete/:id', exact: true, name: 'admin-sch-delete', component: DeleteStaffs},
];

export default routes;

