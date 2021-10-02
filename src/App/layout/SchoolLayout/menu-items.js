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
                    url: '/school',
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
                    id: 'subjects',
                    title: 'Subjects',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    children: [
                        {
                            id: 'subjects-read',
                            title: 'Read',
                            type: 'item',
                            url: '/school/subjects/read'
                        },
                        {
                            id: 'subjects-create',
                            title: 'Create',
                            type: 'item',
                            url: '/school/subjects/create'
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
                    id: 'Class',
                    title: 'Class',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    children: [
                        {
                            id: 'class-read',
                            title: 'Read',
                            type: 'item',
                            url: '/school/class/read'
                        },
                        {
                            id: 'class-create',
                            title: 'Create',
                            type: 'item',
                            url: '/school/class/create'
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
                            url: '/school/exam/read'
                        },
                        {
                            id: 'exam-create',
                            title: 'Create',
                            type: 'item',
                            url: '/school/exam/create'
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
                            url: '/school/attendance/read'
                        },
                        {
                            id: 'attendance-create',
                            title: 'Create',
                            type: 'item',
                            url: '/school/attendance/create'
                        },
                    ]
                }, 
                {
                    id: 'extral',
                    title: 'Extra Data',
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
                    title: 'School Signout',
                    type: 'item',
                    url: '/school/signout',
                    classes: 'nav-item ',
                    icon: 'feather icon-power'
                }
            ]
        }
    ]
}