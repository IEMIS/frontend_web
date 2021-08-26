
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
    { path: '/district/districts', exact: true, name: 'admin-district', component: DistrictData },
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


    // { path: '/district/districts/create', exact: true, name: 'admin-dis-create', component: CreateDistrict},
    // { path: '/district/districts/read', exact: true, name: 'admin-dis-read', component: ReadDistrict},
    // { path: '/district/districts/read/:id', exact: true, name: 'admin-dis-read-one', component:ReadOneDistrict},
    // { path: '/district/districts/edit/:id', exact: true, name: 'admin-dis-edit', component: EditDistrict},
    // { path: '/district/districts/delete/:id', exact: true, name: 'admin-dis-delete', component: DeleteDistrict},

    // { path: '/district/class/create', exact: true, name: 'admin-class-create', component: CreateClass},
    // { path: '/district/class/read', exact: true, name: 'admin-class-read', component: ReadClass},
    // { path: '/district/class/read/:id', exact: true, name: 'admin-class-read-one', component:ReadOneClass},
    // { path: '/district/class/edit/:id', exact: true, name: 'admin-class-edit', component: EditClass},
    // { path: '/district/class/delete/:id', exact: true, name: 'admin-class-delete', component: DeleteClass},

    // { path: '/district/session/create', exact: true, name: 'admin-class-create', component: CreateSession},
    // { path: '/district/session/read', exact: true, name: 'admin-class-read', component: ReadSession},
    // { path: '/district/session/read/:id', exact: true, name: 'admin-class-read-one', component:ReadOneSession},
    // { path: '/district/session/edit/:id', exact: true, name: 'admin-class-edit', component: EditSession},
    // { path: '/district/session/delete/:id', exact: true, name: 'admin-class-delete', component: DeleteSession},

    // { path: '/district/population/create', exact: true, name: 'admin-population-create', component: CreatePopulation},
    // { path: '/district/population/read', exact: true, name: 'admin-population-read', component: ReadPopulation},
    // { path: '/district/population/read/:id', exact: true, name: 'admin-population-read-one', component:ReadOnePopulation},
    // { path: '/district/population/edit/:id', exact: true, name: 'admin-population-edit', component: EditPopulation},
    // { path: '/district/population/delete/:id', exact: true, name: 'admin-population-delete', component: DeletePopulation},



   



    // { path: '/district/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    // { path: '/district/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    // { path: '/district/tables', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    // { path: '/district/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    // { path: '/district/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    // { path: '/district/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    // { path: '/district/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    // { path: '/district/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    // { path: '/district/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    // { path: '/district/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    // { path: '/district/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    // { path: '/district/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    // { path: '/district/docs', exact: true, name: 'Documentation', component: OtherDocs },
   
];

export default routes;

