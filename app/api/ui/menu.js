module.exports = [
  {
    key: 'account_page',
    name: 'Auth Page',
    icon: 'account_box',
    child: [
      {
        key: 'account_page',
        name: 'Sttaic Auth Page',
        title: true,
      },
      {
        key: 'login',
        name: 'Login',
        icon: 'account_box',
        link: '/login'
      },
      {
        key: 'register',
        name: 'Register',
        icon: 'border_color',
        link: '/register'
      },
      {
        key: 'reset',
        name: 'Reset Password',
        icon: 'undo',
        link: '/reset-password'
      },
      {
        key: 'account_page_firebase',
        name: 'Firebase Auth Page',
        title: true,
      },
      {
        key: 'login',
        name: 'Login',
        icon: 'account_box',
        link: '/login-firebase'
      },
      {
        key: 'register',
        name: 'Register',
        icon: 'border_color',
        link: '/register-firebase'
      },
      {
        key: 'reset',
        name: 'Reset Password',
        icon: 'undo',
        link: '/reset-password-firebase'
      },
    ]
  },
  {
    key: 'pages',
    name: 'Pages',
    icon: 'important_devices',
    child: [
      {
        key: 'other_page',
        name: 'Welcome Page',
        title: true,
      },
      {
        key: 'blank',
        name: 'Blank Page',
        icon: 'video_label',
        link: '/app'
      },
      {
        key: 'generic_page',
        name: 'Generic',
        title: true,
      },
      {
        key: 'dashboard',
        name: 'dashboard',
        icon: 'settings_brightness',
        link: '/app/dashboard'
      },
      {
        key: 'forms',
        name: 'Form',
        link: '/app/form',
        icon: 'ballot',
      },
      {
        key: 'tables',
        name: 'Table',
        icon: 'grid_on',
        link: '/app/table'
      },
      {
        key: 'maintenance',
        name: 'Maintenance',
        icon: 'settings',
        link: '/maintenance'
      },
      {
        key: 'coming_soon',
        name: 'Coming Soon',
        icon: 'polymer',
        link: '/coming-soon'
      },
    ]
  },
  {
    key: 'errors',
    name: 'Erros',
    icon: 'pets',
    child: [
      {
        key: 'errors',
        name: 'Errors',
        title: true,
      },
      {
        key: 'not_found_page',
        name: 'Not Found Page',
        icon: 'pets',
        link: '/app/pages/not-found'
      },
      {
        key: 'error_page',
        name: 'Error Page',
        icon: 'flash_on',
        link: '/app/pages/error'
      },
    ]
  },
  {
    key: 'menu_levels',
    name: 'Menu Levels',
    multilevel: true,
    icon: 'sort',
    child: [
      {
        key: 'level_1',
        name: 'Level 1',
        link: '/#'
      },
      {
        key: 'level_2',
        keyParent: 'menu_levels',
        name: 'Level 2',
        child: [
          {
            key: 'sub_menu_1',
            name: 'Sub Menu 1',
            link: '/#'
          },
          {
            key: 'sub_menu_2',
            name: 'Sub Menu 2',
            link: '/#'
          },
        ]
      },
    ]
  }
];
