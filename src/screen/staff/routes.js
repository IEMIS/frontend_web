
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


// const DashboardDefault = React.lazy(() => import('./Dashboard'));
// const CreateDistrict = React.lazy(()=>import('./district/Create'))
// const ReadDistrict = React.lazy(()=>import('./district/View'))
// const EditDistrict = React.lazy(()=>import('./district/Edit'))
// const ReadOneDistrict = React.lazy(()=>import('./district/One'))
// const DeleteDistrict = React.lazy(()=>import('./district/Delete'))


// const CreateClass = React.lazy(()=>import('./classes/Create'))
// const ReadClass = React.lazy(()=>import('./classes/Read'))
// const EditClass = React.lazy(()=>import('./classes/Edit'));
// const ReadOneClass = React.lazy(()=>import('./classes/One'))
// const DeleteClass = React.lazy(()=>import('./classes/Delete'))

// const CreateSession = React.lazy(()=>import('./session/Create'))
// const ReadSession = React.lazy(()=>import('./session/Read'))
// const EditSession = React.lazy(()=>import('./session/Edit'));
// const ReadOneSession = React.lazy(()=>import('./session/One'))
// const DeleteSession = React.lazy(()=>import('./session/Delete'))

// const CreatePopulation = React.lazy(()=>import('./population/Create'))
// const ReadPopulation = React.lazy(()=>import('./population/Read'))
// const EditPopulation = React.lazy(()=>import('./population/Edit'));
// const ReadOnePopulation = React.lazy(()=>import('./population/One'))
// const DeletePopulation = React.lazy(()=>import('./population/Delete'))



// const Nvd3Chart = React.lazy(() => import('../../Demo/Charts/Nvd3Chart/index'));
// const UIBasicButton = React.lazy(() => import('../../Demo/UIElements/Basic/Button'));
// const UIBasicBadges = React.lazy(() => import('../../Demo/UIElements/Basic/Badges'));
// const UIBasicBreadcrumbPagination = React.lazy(() => import('../../Demo/UIElements/Basic/BreadcrumbPagination'));

// const UIBasicCollapse = React.lazy(() => import('../../Demo/UIElements/Basic/Collapse'));
// const UIBasicTabsPills = React.lazy(() => import('../../Demo/UIElements/Basic/TabsPills'));
// const UIBasicBasicTypography = React.lazy(() => import('../../Demo/UIElements/Basic/Typography'));

// const FormsElements = React.lazy(() => import('../../Demo/Forms/FormsElements'));

// const BootstrapTable = React.lazy(() => import('../../Demo/Tables/BootstrapTable'));

// const GoogleMap = React.lazy(() => import('../../Demo/Maps/GoogleMap/index'));

// const OtherSamplePage = React.lazy(() => import('../../Demo/Other/SamplePage'));
// const OtherDocs = React.lazy(() => import('../../Demo/Other/Docs'));




const routes = [
    { path: '/staff/staffs', exact: true, name: 'admin-district', component: DistrictData },
    { path: '/staff/indicator', exact: true, name: 'admin-indicator', component: IndicatorData },
    { path: '/staff/schools', exact: true, name: 'admin-school', component: SchoolData },
    

    
    { path: '/staff/schools/create', exact: true, name: 'admin-sch-create', component: CreateSchool},
    { path: '/staff/schools/read', exact: true, name: 'admin-sch-read', component: ReadSchool},
    { path: '/staff/schools/read/:id', exact: true, name: 'admin-sch-read-one', component:ReadOneSchool},
    { path: '/staff/schools/edit/:id', exact: true, name: 'admin-sch-edit', component: EditSchool},
    { path: '/staff/schools/delete/:id', exact: true, name: 'admin-sch-delete', component: DeleteSchool},

    { path: '/staff/students/create', exact: true, name: 'admin-sch-create', component: CreateStudent},
    { path: '/staff/students/read', exact: true, name: 'admin-sch-read', component: ReadStudent},
    { path: '/staff/students/read/:id', exact: true, name: 'admin-sch-read-one', component:ReadOneStudent},
    { path: '/staff/students/edit/:id', exact: true, name: 'admin-sch-edit', component: EditStudent},
    { path: '/staff/students/delete/:id', exact: true, name: 'admin-sch-delete', component: DeleteStudent},

    { path: '/staff/teachers/create', exact: true, name: 'admin-sch-create', component: CreateTeacher},
    { path: '/staff/teachers/read', exact: true, name: 'admin-sch-read', component: ReadTeacher},
    { path: '/staff/teachers/read/:id', exact: true, name: 'admin-sch-read-one', component:ReadOneTeacher},
    { path: '/staff/teachers/edit/:id', exact: true, name: 'admin-sch-edit', component: EditTeacher},
    { path: '/staff/teachers/delete/:id', exact: true, name: 'admin-sch-delete', component: DeleteTeacher},

    { path: '/staff/staffs/create', exact: true, name: 'admin-sch-create', component: CreateStaffs},
    { path: '/staff/staffs/read', exact: true, name: 'admin-sch-read', component: ReadStaffs},
    { path: '/staff/staffs/read/:id', exact: true, name: 'admin-sch-read-one', component:ReadOneStaffs},
    { path: '/staff/staffs/edit/:id', exact: true, name: 'admin-sch-edit', component: EditStaffs},
    { path: '/staff/staffs/delete/:id', exact: true, name: 'admin-sch-delete', component: DeleteStaffs},


    // { path: '/staff/staffs/create', exact: true, name: 'admin-dis-create', component: CreateDistrict},
    // { path: '/staff/staffs/read', exact: true, name: 'admin-dis-read', component: ReadDistrict},
    // { path: '/staff/staffs/read/:id', exact: true, name: 'admin-dis-read-one', component:ReadOneDistrict},
    // { path: '/staff/staffs/edit/:id', exact: true, name: 'admin-dis-edit', component: EditDistrict},
    // { path: '/staff/staffs/delete/:id', exact: true, name: 'admin-dis-delete', component: DeleteDistrict},

    // { path: '/staff/class/create', exact: true, name: 'admin-class-create', component: CreateClass},
    // { path: '/staff/class/read', exact: true, name: 'admin-class-read', component: ReadClass},
    // { path: '/staff/class/read/:id', exact: true, name: 'admin-class-read-one', component:ReadOneClass},
    // { path: '/staff/class/edit/:id', exact: true, name: 'admin-class-edit', component: EditClass},
    // { path: '/staff/class/delete/:id', exact: true, name: 'admin-class-delete', component: DeleteClass},

    // { path: '/staff/session/create', exact: true, name: 'admin-class-create', component: CreateSession},
    // { path: '/staff/session/read', exact: true, name: 'admin-class-read', component: ReadSession},
    // { path: '/staff/session/read/:id', exact: true, name: 'admin-class-read-one', component:ReadOneSession},
    // { path: '/staff/session/edit/:id', exact: true, name: 'admin-class-edit', component: EditSession},
    // { path: '/staff/session/delete/:id', exact: true, name: 'admin-class-delete', component: DeleteSession},

    // { path: '/staff/population/create', exact: true, name: 'admin-population-create', component: CreatePopulation},
    // { path: '/staff/population/read', exact: true, name: 'admin-population-read', component: ReadPopulation},
    // { path: '/staff/population/read/:id', exact: true, name: 'admin-population-read-one', component:ReadOnePopulation},
    // { path: '/staff/population/edit/:id', exact: true, name: 'admin-population-edit', component: EditPopulation},
    // { path: '/staff/population/delete/:id', exact: true, name: 'admin-population-delete', component: DeletePopulation},



   



    // { path: '/staff/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    // { path: '/staff/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    // { path: '/staff/tables', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    // { path: '/staff/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    // { path: '/staff/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    // { path: '/staff/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    // { path: '/staff/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    // { path: '/staff/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    // { path: '/staff/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    // { path: '/staff/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    // { path: '/staff/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    // { path: '/staff/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    // { path: '/staff/docs', exact: true, name: 'Documentation', component: OtherDocs },
   
];

export default routes;

