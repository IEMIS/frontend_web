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
                    url: '/staff',
                    icon: 'feather icon-home',
                },
                {
                    id: 'm-district',
                    title: 'Manage District',
                    type: 'item',
                    url: '/staff',
                    icon: 'feather icon-feather',
                },
                {
                    id: 'm-school',
                    title: 'Manage School',
                    type: 'item',
                    url: '/staff/school',
                    icon: 'feather book',
                },
                {
                    id: 'm-students',
                    title: 'Manage Students',
                    type: 'item',
                    url: '/staff/students',
                    icon: 'feather icon-book-open',
                }
            ],
        },
        {
            id: 'pages',
            title: 'Footer',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'disabled-menu',
                    title: 'Staff Signout',
                    type: 'item',
                    url: '/staff/signout',
                    classes: 'nav-item ',
                    icon: 'feather icon-power'
                }
            ]
        }
    ]
}