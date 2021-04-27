export default {
    items: [
        {
            id: 'navigation',
            title: 'District Menu',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/district',
                    icon: 'feather icon-home',
                },
                {
                    id: 'm-district',
                    title: 'Manage District',
                    type: 'item',
                    url: '/district',
                    icon: 'feather icon-feather',
                },
                {
                    id: 'm-school',
                    title: 'Manage School',
                    type: 'item',
                    url: '/school',
                    icon: 'feather book',
                },
                {
                    id: 'm-students',
                    title: 'Manage Students',
                    type: 'item',
                    url: '/students',
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
                    title: 'Dsitrict Signout',
                    type: 'item',
                    url: '/district/signout',
                    classes: 'nav-item ',
                    icon: 'feather icon-power'
                }
            ]
        }
    ]
}