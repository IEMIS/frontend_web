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
                    url: '/district/districts',
                    icon: 'feather icon-home',
                },
                {
                    id: 'm-school',
                    title: 'Schools data',
                    type: 'item',
                    url: '/district/schools',
                    icon: 'feather icon-book',
                },
                {
                    id: 'dashbo-indicator',
                    title: 'Indicators ',
                    type: 'item',
                    url: '/district/indicator',
                    icon: 'feather icon-home',
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
                    id: 'School',
                    title: 'School',
                    type: 'collapse',
                    icon: 'feather icon-book',
                    children: [
                        {
                            id: 'school-read',
                            title: 'Read',
                            type: 'item',
                            url: '/district/schools/read'
                        },
                        {
                            id: 'school-create',
                            title: 'Create',
                            type: 'item',
                            url: '/district/schools/create'
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
                            url: '/district/students/read'
                        },
                        {
                            id: 'students-create',
                            title: 'Create',
                            type: 'item',
                            url: '/district/students/create'
                        },
                    ]
                },
                // {
                //     id: 'staff',
                //     title: 'Staff',
                //     type: 'collapse',
                //     icon: 'feather icon-users',
                //     children: [
                //         {
                //             id: 'staffs-read',
                //             title: 'Read',
                //             type: 'item',
                //             url: '/district/staffs/read'
                //         },
                //         {
                //             id: 'staffs-create',
                //             title: 'Create',
                //             type: 'item',
                //             url: '/district/staffs/create'
                //         },
                //     ]
                // },
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
                            url: '/district/teachers/read'
                        },
                        {
                            id: 'teachers-create',
                            title: 'Create',
                            type: 'item',
                            url: '/district/teachers/create'
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
                            url: '/district/extral/read'
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
                    url: '/district/signout',
                    classes: 'nav-item ',
                    icon: 'feather icon-power'
                }
            ]
        }
    ]
}