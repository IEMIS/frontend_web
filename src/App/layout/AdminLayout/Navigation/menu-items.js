export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
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
                    icon: 'feather icon-home',
                },
                {
                    id: 'm-school',
                    title: 'Manage School',
                    type: 'item',
                    url: '/admin/school',
                    icon: 'feather icon-home',
                },
                {
                    id: 'm-students',
                    title: 'Manage Students',
                    type: 'item',
                    url: '/admin/students',
                    icon: 'feather icon-home',
                }
            ],
        },
        {
            id: 'navigation2',
            title: 'Menu-M',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/admin',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'districts',
            title: 'districts board',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'districts',
                    title: 'Districts',
                    type: 'item',
                    url: '/admin/districts',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'district-list',
            title: 'Districts',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'basic',
                    title: 'District A',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'button',
                            title: 'School A',
                            type: 'item',
                            url: '/admin/districta/schoola'
                        },
                        {
                            id: 'badges',
                            title: 'School B',
                            type: 'item',
                            url: '/admin/districta/schoolb'
                        },
                    ]
                },
                {
                    id: 'basic',
                    title: 'District B',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'button',
                            title: 'School A',
                            type: 'item',
                            url: '/admin/districtb/schoola'
                        },
                        {
                            id: 'badges',
                            title: 'School B',
                            type: 'item',
                            url: '/admin/districtb/schoolb'
                        },
                    ]
                },
                {
                    id: 'basic',
                    title: 'District C',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'button',
                            title: 'Button',
                            type: 'item',
                            url: '/admin/districtc/schoolb'
                        },
                        {
                            id: 'badges',
                            title: 'Badges',
                            type: 'item',
                            url: '/admin/districtc/schoolb'
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
                    title: 'Disabled Menu',
                    type: 'item',
                    url: '#',
                    classes: 'nav-item disabled',
                    icon: 'feather icon-power'
                }
            ]
        }
    ]
}