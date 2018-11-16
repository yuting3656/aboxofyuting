import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  // {
  //   title: 'E-commerce',
  //   icon: 'nb-e-commerce',
  //   link: '/pages/dashboard',
  //   home: true,
  // },
  {
    title: '資訊儀錶板',
    icon: 'nb-home',
    link: '/pages/iot-dashboard',
  },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  {
    title: '會員管理',
    icon: 'nb-person',
    link: '/pages/ui-features',
    children: [
      {
        title: '會員資料維護',
        link: '/pages/ui-features/buttons',
      },
      {
        title: '會員資料異動紀錄',
        link: '/pages/ui-features/grid',
      },
      {
        title: '會員與關聯公司維護',
        link: '/pages/ui-features/icons',
      },
      {
        title: '會員(公司管理員)授權日誌',
        link: '/pages/ui-features/modals',
      },
      // {
      //   title: 'Popovers',
      //   link: '/pages/ui-features/popovers',
      // },
      // {
      //   title: 'Typography',
      //   link: '/pages/ui-features/typography',
      // },
      // {
      //   title: 'Animated Searches',
      //   link: '/pages/ui-features/search-fields',
      // },
      // {
      //   title: 'Tabs',
      //   link: '/pages/ui-features/tabs',
      // },
    ],
  },
  {
    title: '數位足跡',
    icon: 'nb-paper-plane',
    children: [
      {
        title: '會員登錄紀錄',
        link: '/pages/forms/inputs',
      },
      {
        title: '會員加入紀錄',
        link: '/pages/forms/layouts',
      },
      {
        title: '會員使用紀錄',
        link: '/pages/forms/inputs',
      },
      {
        title: '會員同意紀錄',
        link: '/pages/forms/layouts',
      }
    ],
  },
  {
    title: '後台維護',
    icon: 'nb-gear',
    children: [
      {
        title: '管理者維護',
        link: '/pages/components/tree',
      }, {
        title: '功能權限維護',
        link: '/pages/components/notifications',
      },
      {
        title: '管理者登入紀錄',
        link: '/pages/components/tree',
      }, {
        title: '管理者異動日誌',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: '統計報表',
    icon: 'nb-bar-chart',
    children: [
      {
        title: '(會員/管理者)權限表',
        link: '/pages/maps/gmaps',
      },
      {
        title: '(會員/管理者)登入紀錄表',
        link: '/pages/maps/leaflet',
      },
      {
        title: '會員應用程式使用紀錄表',
        link: '/pages/maps/bubble',
      },
      {
        title: '授權日至稽核管理報表',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: '系統管理',
    icon: 'nb-lightbulb',
    children: [
      {
        title: 'API維護',
        link: '/pages/charts/echarts',
      },
      {
        title: '驗證維護',
        link: '/pages/charts/chartjs',
      },
      {
        title: '密碼規則',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: '前台維護',
    icon: 'nb-coffee-maker',
    children: [
      {
        title: '各服務維護',
        link: '/pages/editors/tinymce',
      },
      // {
      //   title: 'CKEditor',
      //   link: '/pages/editors/ckeditor',
      // },
    ],
  },
  // {
  //   title: 'Tables',
  //   icon: 'nb-tables',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'nb-shuffle',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
