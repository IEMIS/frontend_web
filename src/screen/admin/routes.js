
import React from 'react';
import $ from 'jquery';


window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Dashboard'));
const AdminSignout = React.lazy(()=> import('../Auth/admin/SignOut'));

const CreateAdmin = React.lazy(()=>import('./admin/Create'))




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
   


    { path: '/admin/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
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
    { path: '/admin/users/create', exact: true, name: 'admin-create', component: CreateAdmin },
   
];

export default routes;

