export default {
    items: [
        {
            id: 'navigation',
            title: 'Student Dashboard',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/student',
                    icon: 'feather icon-home',
                }
            ],
        },
        {
            id: 'course-reg',
            title: 'Data Management',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'Subject',
                    title: 'Subjects',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    children: [
                        {
                            id: 'students-subject',
                            title: 'Subject',
                            type: 'item',
                            url: '/student/subject/read'
                        },
                        {
                            id: 'students-create',
                            title: 'Register',
                            type: 'item',
                            url: '/student/subject/create'
                        },
                    ]
                },
                {
                    id: 'Class',
                    title: 'Class',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    children: [
                        {
                            id: 'class-curent',
                            title: 'Class',
                            type: 'item',
                            url: '/student/class'
                        },
                        {
                            id: 'class',
                            title: 'History',
                            type: 'item',
                            url: '/student/class/history'
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
                            title: 'Profile',
                            type: 'item',
                            url: '/student/profile'
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
                    url: '/student/auth/signout',
                    classes: 'nav-item ',
                    icon: 'feather icon-power'
                }
            ]
        }
    ]
}