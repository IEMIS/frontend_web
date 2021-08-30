export default {
    items: [
        {
            id: 'navigation',
            title: 'School Menu',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/teacher',
                    icon: 'feather icon-home',
                },
            ],
        },
        {
            id: 'data-list',
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
                            url: '/teacher/students/read'
                        },
                        {
                            id: 'students-create',
                            title: 'Create',
                            type: 'item',
                            url: '/teacher/students/create'
                        },
                    ]
                },
                {
                    id: 'subjects',
                    title: 'Subjects',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    children: [
                        {
                            id: 'subjects-read',
                            title: 'Read',
                            type: 'item',
                            url: '/teacher/subjects/read'
                        },
                        {
                            id: 'subjects-create',
                            title: 'Create',
                            type: 'item',
                            url: '/teacher/subjects/create'
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
                            id: 'class-read',
                            title: 'Read',
                            type: 'item',
                            url: '/teacher/class/read'
                        },
                        {
                            id: 'class-create',
                            title: 'Create',
                            type: 'item',
                            url: '/teacher/class/create'
                        },
                    ]
                }, 
                {
                    id: 'Exam',
                    title: 'Exam Record',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    children: [
                        {
                            id: 'exam-read',
                            title: 'Read',
                            type: 'item',
                            url: '/teacher/exam/read'
                        },
                        {
                            id: 'exam-create',
                            title: 'Create',
                            type: 'item',
                            url: '/teacher/exam/create'
                        },
                    ]
                }, 
                {
                    id: 'Attendance',
                    title: 'Attendance Record',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    children: [
                        {
                            id: 'attendance-read',
                            title: 'Read',
                            type: 'item',
                            url: '/teacher/attendance/read'
                        },
                        {
                            id: 'attendance-create',
                            title: 'Create',
                            type: 'item',
                            url: '/teacher/attendance/create'
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
                            url: '/teacher/extral/read'
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
                    url: '/teacher/signout',
                    classes: 'nav-item ',
                    icon: 'feather icon-power'
                }
            ]
        }
    ]
}