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
                    icon: 'feather book',
                },
                {
                    id: 'm-students',
                    title: 'Manage Students',
                    type: 'item',
                    url: '/admin/students',
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