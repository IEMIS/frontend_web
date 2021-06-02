
import React from 'react';
import $ from 'jquery';


window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Dashboard'));
const AdminSignout = React.lazy(()=> import('../Auth/admin/SignOut'));

const CreateAdmin = React.lazy(()=>import('./admin/Create'))
const ReadAdmin = React.lazy(()=>import('./admin/Read'))
const DeleteAdmin = React.lazy(()=>import('./admin/Delete'))
const EditAdmin = React.lazy(()=>import('./admin/Edit'))
const ReadOneAdmin = React.lazy(()=>import('./admin/One'))

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



const Nvd3Chart = React.lazy(() => import('../../Demo/Charts/Nvd3Chart/index'));
const UIBasicButton = React.lazy(() => import('../../Demo/UIElements/Basic/Button'));
const UIBasicBadges = React.lazy(() => import('../../Demo/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('../../Demo/UIElements/Basic/BreadcrumbPagination'));

const UIBasicCollapse = React.lazy(() => import('../../Demo/UIElements/Basic/Collapse'));
const UIBasicTabsPills = React.lazy(() => import('../../Demo/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('../../Demo/UIElements/Basic/Typography'));

const FormsElements = React.lazy(() => import('../../Demo/Forms/FormsElements'));

const BootstrapTable = React.lazy(() => import('../../Demo/Tables/BootstrapTable'));

const GoogleMap = React.lazy(() => import('../../Demo/Maps/GoogleMap/index'));

const OtherSamplePage = React.lazy(() => import('../../Demo/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('../../Demo/Other/Docs'));




const routes = [
    { path: '/admin', exact: true, name: 'admin', component: DashboardDefault },
    { path: '/admin/signout', exact: true, name: 'admin-signout', component: AdminSignout },
    { path: '/admin/users/create', exact: true, name: 'admin-ad-create', component: CreateAdmin },
    { path: '/admin/users/read', exact: true, name: 'admin-ad-read', component: ReadAdmin},
    { path: '/admin/users/read/:id', exact: true, name: 'admin-ad-read-one', component: ReadOneAdmin},
    { path: '/admin/users/edit/:id', exact: true, name: 'admin-ad-edit', component: EditAdmin},
    { path: '/admin/users/delete/:id', exact: true, name: 'admin-ad-delete', component: DeleteAdmin},


    { path: '/admin/districts/create', exact: true, name: 'admin-dis-create', component: CreateDistrict},
    { path: '/admin/districts/read', exact: true, name: 'admin-dis-read', component: ReadDistrict},
    { path: '/admin/districts/read/:id', exact: true, name: 'admin-dis-read-one', component:ReadOneDistrict},
    { path: '/admin/districts/edit/:id', exact: true, name: 'admin-dis-edit', component: EditDistrict},
    { path: '/admin/districts/delete/:id', exact: true, name: 'admin-dis-delete', component: DeleteDistrict},


    { path: '/admin/schools/create', exact: true, name: 'admin-sch-create', component: CreateSchool},
    { path: '/admin/schools/read', exact: true, name: 'admin-sch-read', component: ReadSchool},
    { path: '/admin/schools/read/:id', exact: true, name: 'admin-sch-read-one', component:ReadOneSchool},
    { path: '/admin/schools/edit/:id', exact: true, name: 'admin-sch-edit', component: EditSchool},
    { path: '/admin/schools/delete/:id', exact: true, name: 'admin-sch-delete', component: DeleteSchool},

    { path: '/admin/students/create', exact: true, name: 'admin-sch-create', component: CreateStudent},
    { path: '/admin/students/read', exact: true, name: 'admin-sch-read', component: ReadStudent},
    { path: '/admin/students/read/:id', exact: true, name: 'admin-sch-read-one', component:ReadOneStudent},
    { path: '/admin/students/edit/:id', exact: true, name: 'admin-sch-edit', component: EditStudent},
    { path: '/admin/students/delete/:id', exact: true, name: 'admin-sch-delete', component: DeleteStudent},



    { path: '/admin/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    { path: '/admin/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/admin/tables', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    { path: '/admin/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    { path: '/admin/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    { path: '/admin/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    { path: '/admin/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    { path: '/admin/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    { path: '/admin/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    { path: '/admin/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    { path: '/admin/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    { path: '/admin/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/admin/docs', exact: true, name: 'Documentation', component: OtherDocs },
   
];

export default routes;

