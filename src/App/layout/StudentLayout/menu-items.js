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
                    url: '/school',
                    icon: 'feather icon-home',
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
            ],
        },
        {
            id: 'district-list',
            title: 'Data Management',
            type: 'group',
            icon: 'icon-ui',
            children: [
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
                            url: '/school/students/read'
                        },
                        {
                            id: 'students-create',
                            title: 'Create',
                            type: 'item',
                            url: '/school/students/create'
                        },
                    ]
                },
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
                            url: '/school/staffs/read'
                        },
                        {
                            id: 'staffs-create',
                            title: 'Create',
                            type: 'item',
                            url: '/school/staffs/create'
                        },
                    ]
                },
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
                            url: '/school/teachers/read'
                        },
                        {
                            id: 'teachers-create',
                            title: 'Create',
                            type: 'item',
                            url: '/school/teachers/create'
                        },
                    ]
                },
                {
                    id: 'extral',
                    title: 'Extral Data',
                    type: 'collapse',
                    icon: 'feather icon-book',
                    children: [
                        {
                            id: 'extral-read',
                            title: 'Population',
                            type: 'item',
                            url: '/school/extral/read'
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
                    title: 'Districts Signout',
                    type: 'item',
                    url: '/school/signout',
                    classes: 'nav-item ',
                    icon: 'feather icon-power'
                }
            ]
        }
    ]
}