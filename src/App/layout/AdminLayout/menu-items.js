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
                    title: 'Manage District',
                    type: 'item',
                    url: '/admin/district',
                    icon: 'feather icon-feather',
                },
                {
                    id: 'm-school',
                    title: 'Manage School',
                    type: 'item',
                    url: '/admin/school',
                    icon: 'feather icon-book',
                },
                {
                    id: 'm-students',
                    title: 'Manage Students',
                    type: 'item',
                    url: '/admin/students',
                    icon: 'feather icon-users',
                }
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
                            url: '/admin/user/read'
                        },
                        {
                            id: 'admin-Create',
                            title: 'Create ',
                            type: 'item',
                            url: '/admin/user/create'
                        },
                    ]
                },
                {
                    id: 'district',
                    title: 'District ',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    children: [
                        {
                            id: 'district-read',
                            title: 'Read',
                            type: 'item',
                            url: '/admin/district/read'
                        },
                        {
                            id: 'district-create',
                            title: 'Create',
                            type: 'item',
                            url: '/admin/district/create'
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
                            url: '/admin/school/read'
                        },
                        {
                            id: 'school-create',
                            title: 'Create',
                            type: 'item',
                            url: '/admin/school/create'
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
                }
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