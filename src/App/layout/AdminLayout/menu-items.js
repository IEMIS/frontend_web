export default {
    items: [
        {
            id: 'navigation',
            title: 'admin Menu',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/admin',
                    icon: 'feather icon-home',
                },
                {
                    id: 'm-district',
                    title: 'District Data',
                    type: 'item',
                    url: '/admin/districts',
                    icon: 'feather icon-feather',
                },
                {
                    id: 'm-school',
                    title: 'Schools data',
                    type: 'item',
                    url: '/admin/schools',
                    icon: 'feather icon-book',
                },
                /*
                {
                    id: 'm-students',
                    title: 'Students Data',
                    type: 'item',
                    url: '/admin/students',
                    icon: 'feather icon-users',
                }
                */
                
                {
                    id: 'm-indicator',
                    title: 'Indicators Data',
                    type: 'item',
                    url: '/admin/indicator',
                    icon: 'feather icon-book',
                },
                {
                    id: 'm-iReport',
                        title: 'iReport',
                        type: 'collapse',
                        icon: 'feather icon-user',
                        children: [
                            {
                                id: 'admin-predict',
                                title: 'Predictive Analytics',
                                type: 'item',
                                url: 'admin/predict'
                            },
                            {
                                id: 'admin-aper',
                                title: 'APER',
                                type: 'item',
                                url: 'admin/aper'
                            },
                        ]
                    },
            
            ],
        },
        {
            id: 'district-list',
            title: 'Data Management',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'admin-user',
                    title: 'Admin',
                    type: 'collapse',
                    icon: 'feather icon-user',
                    children: [
                        {
                            id: 'admin-Read',
                            title: 'Read ',
                            type: 'item',
                            url: '/admin/users/read'
                        },
                        {
                            id: 'admin-Create',
                            title: 'Create ',
                            type: 'item',
                            url: '/admin/users/create'
                        },
                    ]
                },
                {
                    id: 'district',
                    title: 'District ',
                    type: 'collapse',
                    icon: 'feather icon-feather',
                    children: [
                        {
                            id: 'district-read',
                            title: 'Read',
                            type: 'item',
                            url: '/admin/districts/read'
                        },
                        {
                            id: 'district-create',
                            title: 'Create',
                            type: 'item',
                            url: '/admin/districts/create'
                        },
                    ]
                },
                {
                    id: 'School',
                    title: 'School',
                    type: 'collapse',
                    icon: 'feather icon-book',
                    children: [
                        {
                            id: 'school-read',
                            title: 'Read',
                            type: 'item',
                            url: '/admin/schools/read'
                        },
                        {
                            id: 'school-create',
                            title: 'Create',
                            type: 'item',
                            url: '/admin/schools/create'
                        },
                    ]
                },
                {
                    id: 'students',
                    title: 'Students',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    children: [
                        {
                            id: 'students-read',
                            title: 'Read',
                            type: 'item',
                            url: '/admin/students/read'
                        },
                        {
                            id: 'students-create',
                            title: 'Create',
                            type: 'item',
                            url: '/admin/students/create'
                        },
                    ]
                },
               /* 
                {
                    id: 'staff',
                    title: 'Staff',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    children: [
                        {
                            id: 'staffs-read',
                            title: 'Read',
                            type: 'item',
                            url: '/admin/staffs/read'
                        },
                        {
                            id: 'staffs-create',
                            title: 'Create',
                            type: 'item',
                            url: '/admin/staffs/create'
                        },
                    ]
                },
            */
                {
                    id: 'teachers',
                    title: 'Teachers',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    children: [
                        {
                            id: 'teachers-read',
                            title: 'Read',
                            type: 'item',
                            url: '/admin/teachers/read'
                        },
                        {
                            id: 'teachers-create',
                            title: 'Create',
                            type: 'item',
                            url: '/admin/teachers/create'
                        },
                    ]
                },
                {
                    id: 'Classes',
                    title: 'Class',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    children: [
                        {
                            id: 'class-read',
                            title: 'Read',
                            type: 'item',
                            url: '/admin/class/read'
                        },
                        {
                            id: 'class-create',
                            title: 'Create',
                            type: 'item',
                            url: '/admin/class/create'
                        },
                    ]
                },
                {
                    id: 'session',
                    title: 'Session',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    children: [
                        {
                            id: 'session-read',
                            title: 'Read',
                            type: 'item',
                            url: '/admin/session/read'
                        },
                        {
                            id: 'session-create',
                            title: 'Create',
                            type: 'item',
                            url: '/admin/session/create'
                        },
                    ]
                },
                {
                    id: 'population',
                    title: 'Population',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    children: [
                        {
                            id: 'population-read',
                            title: 'Read',
                            type: 'item',
                            url: '/admin/population/read'
                        },
                        {
                            id: 'population-create',
                            title: 'Create',
                            type: 'item',
                            url: '/admin/population/create'
                        },
                    ]
                }
               /* {
                    id: 'extra',
                    title: 'Extra Data',
                    type: 'collapse',
                    icon: 'feather icon-book',
                    children: [
                        {
                            id: 'extra-read',
                            title: 'Population',
                            type: 'item',
                            url: '/admin/extra/read'
                        },
                    ]
                }*/
            ]
        },
        {
            id: 'pages',
            title: 'Footer',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'disabled-menu',
                    title: 'Admin Signout',
                    type: 'item',
                    url: '/admin/signout',
                    classes: 'nav-item ',
                    icon: 'feather icon-power'
                }
            ]
        }
    ]
}