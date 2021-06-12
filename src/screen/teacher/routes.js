
import React from 'react';
import $ from 'jquery';


window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Dashboard= React.lazy(() => import('./Dashboard'));
const SchoolData = React.lazy(() => import('./SchoolData'));
const DistrictSignout = React.lazy(()=> import('../Auth/district/SignOut'));


const CreateDistrict = React.lazy(()=>import('./district/Create'))
const ReadDistrict = React.lazy(()=>import('./district/View'))
const EditDistrict = React.lazy(()=>import('./district/Edit'))
const ReadOneDistrict = React.lazy(()=>import('./district/One'))
const DeleteDistrict = React.lazy(()=>import('./district/Delete'))


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
    { path: '/district', exact: true, name: 'districts', component: Dashboard },
    { path: '/district/signout', exact: true, name: 'districts-signout', component: DistrictSignout},
    { path: '/district/districts/create', exact: true, name: 'districts-create', component: CreateDistrict},
    { path: '/district/districts/read', exact: true, name: 'districts-read', component: ReadDistrict},
    { path: '/district/districts/read/:id', exact: true, name: 'districts-read-one', component:ReadOneDistrict},
    { path: '/district/districts/edit/:id', exact: true, name: 'districts-edit', component: EditDistrict},
    { path: '/district/districts/delete/:id', exact: true, name: 'districts-delete', component: DeleteDistrict},

    { path: '/district/schools', exact: true, name: 'districts-school', component: SchoolData },
    { path: '/district/schools/create', exact: true, name: 'districts-sch-create', component: CreateSchool},
    { path: '/district/schools/read', exact: true, name: 'districts-sch-read', component: ReadSchool},
    { path: '/district/schools/read/:id', exact: true, name: 'districts-sch-read-one', component:ReadOneSchool},
    { path: '/district/schools/edit/:id', exact: true, name: 'districts-sch-edit', component: EditSchool},
    { path: '/district/schools/delete/:id', exact: true, name: 'districts-sch-delete', component: DeleteSchool},

    { path: '/district/students/create', exact: true, name: 'districts-sch-create', component: CreateStudent},
    { path: '/district/students/read', exact: true, name: 'districts-sch-read', component: ReadStudent},
    { path: '/district/students/read/:id', exact: true, name: 'districts-sch-read-one', component:ReadOneStudent},
    { path: '/district/students/edit/:id', exact: true, name: 'districts-sch-edit', component: EditStudent},
    { path: '/district/students/delete/:id', exact: true, name: 'districts-sch-delete', component: DeleteStudent},

    { path: '/district/teachers/create', exact: true, name: 'districts-sch-create', component: CreateTeacher},
    { path: '/district/teachers/read', exact: true, name: 'districts-sch-read', component: ReadTeacher},
    { path: '/district/teachers/read/:id', exact: true, name: 'districts-sch-read-one', component:ReadOneTeacher},
    { path: '/district/teachers/edit/:id', exact: true, name: 'districts-sch-edit', component: EditTeacher},
    { path: '/district/teachers/delete/:id', exact: true, name: 'districts-sch-delete', component: DeleteTeacher},

    { path: '/district/staffs/create', exact: true, name: 'districts-sch-create', component: CreateStaffs},
    { path: '/district/staffs/read', exact: true, name: 'districts-sch-read', component: ReadStaffs},
    { path: '/district/staffs/read/:id', exact: true, name: 'districts-sch-read-one', component:ReadOneStaffs},
    { path: '/district/staffs/edit/:id', exact: true, name: 'districts-sch-edit', component: EditStaffs},
    { path: '/district/staffs/delete/:id', exact: true, name: 'districts-sch-delete', component: DeleteStaffs},
];

export default routes;

