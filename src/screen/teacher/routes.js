
import React from 'react';
import $ from 'jquery';


window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Dashboard= React.lazy(() => import('./Dashboard'));
const SchoolData = React.lazy(() => import('./SchoolData'));
const DistrictSignout = React.lazy(()=> import('../Auth/teacher/SignOut'));


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
    { path: '/teacher', exact: true, name: 'districts', component: Dashboard },
    { path: '/teacher/signout', exact: true, name: 'districts-signout', component: DistrictSignout},
    { path: '/teacher/districts/create', exact: true, name: 'districts-create', component: CreateDistrict},
    { path: '/teacher/districts/read', exact: true, name: 'districts-read', component: ReadDistrict},
    { path: '/teacher/districts/read/:id', exact: true, name: 'districts-read-one', component:ReadOneDistrict},
    { path: '/teacher/districts/edit/:id', exact: true, name: 'districts-edit', component: EditDistrict},
    { path: '/teacher/districts/delete/:id', exact: true, name: 'districts-delete', component: DeleteDistrict},

    { path: '/teacher/schools', exact: true, name: 'districts-school', component: SchoolData },
    { path: '/teacher/schools/create', exact: true, name: 'districts-sch-create', component: CreateSchool},
    { path: '/teacher/schools/read', exact: true, name: 'districts-sch-read', component: ReadSchool},
    { path: '/teacher/schools/read/:id', exact: true, name: 'districts-sch-read-one', component:ReadOneSchool},
    { path: '/teacher/schools/edit/:id', exact: true, name: 'districts-sch-edit', component: EditSchool},
    { path: '/teacher/schools/delete/:id', exact: true, name: 'districts-sch-delete', component: DeleteSchool},

    { path: '/teacher/students/create', exact: true, name: 'districts-sch-create', component: CreateStudent},
    { path: '/teacher/students/read', exact: true, name: 'districts-sch-read', component: ReadStudent},
    { path: '/teacher/students/read/:id', exact: true, name: 'districts-sch-read-one', component:ReadOneStudent},
    { path: '/teacher/students/edit/:id', exact: true, name: 'districts-sch-edit', component: EditStudent},
    { path: '/teacher/students/delete/:id', exact: true, name: 'districts-sch-delete', component: DeleteStudent},

    { path: '/teacher/teachers/create', exact: true, name: 'districts-sch-create', component: CreateTeacher},
    { path: '/teacher/teachers/read', exact: true, name: 'districts-sch-read', component: ReadTeacher},
    { path: '/teacher/teachers/read/:id', exact: true, name: 'districts-sch-read-one', component:ReadOneTeacher},
    { path: '/teacher/teachers/edit/:id', exact: true, name: 'districts-sch-edit', component: EditTeacher},
    { path: '/teacher/teachers/delete/:id', exact: true, name: 'districts-sch-delete', component: DeleteTeacher},

    { path: '/teacher/staffs/create', exact: true, name: 'districts-sch-create', component: CreateStaffs},
    { path: '/teacher/staffs/read', exact: true, name: 'districts-sch-read', component: ReadStaffs},
    { path: '/teacher/staffs/read/:id', exact: true, name: 'districts-sch-read-one', component:ReadOneStaffs},
    { path: '/teacher/staffs/edit/:id', exact: true, name: 'districts-sch-edit', component: EditStaffs},
    { path: '/teacher/staffs/delete/:id', exact: true, name: 'districts-sch-delete', component: DeleteStaffs},
];

export default routes;

