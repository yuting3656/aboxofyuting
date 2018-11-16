import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '資訊儀錶板',
    icon: 'nb-home',
    link: '/taitra/taitra-dashboard',
  },
  {
    title: '會員管理',
    icon: 'nb-person',
    link: '/taitra/members',
    children: [
      {
        title: '會員資料維護',
        link: '/taitra/members/edit-members',
      },
      // {
      //   title: '會員資料異動紀錄',
      //   link: '/pages/ui-features/grid',
      // },
      // {
      //   title: '會員與關聯公司維護',
      //   link: '/pages/ui-features/icons',
      // },
      // {
      //   title: '會員(公司管理員)授權日誌',
      //   link: '/pages/ui-features/modals',
      // },
    ],
  },
  {
    title: '數位足跡',
    icon: 'nb-paper-plane',
    children: [
      {
        title: '會員足跡總覽',
        link: '/taitra/dig-log/dig-login-log',
      },
      {
        title: '台灣經貿網',
        link: '/taitra',
      },
      {
        title: '台灣國際專業展',
        link: '/pages/forms/layouts',
      },
      {
        title: '採洽易',
        link: '/pages/forms/inputs',
      },
      {
        title: '活動匯',
        link: '/pages/forms/layouts',
      } ,
      {
        title: '新南向',
        link: '/pages/forms/layouts',
      }
    ],
  },
  {
    title: '系統維護',
    icon: 'nb-gear',
    link: 'taitra/system-setting', 
    children: [
      {
        title: '系統帳號維護',
        link: '/taitra/system-setting/edit-system-admin',
      }, {
        title: '系統權限角色維護',
        link: '/taitra/system-setting/edit-admin-list-roles',
      },
      // {
      //   title: '管理者登入紀錄',
      //   link: '/pages/components/tree',
      // }, {
      //   title: '管理者異動日誌',
      //   link: '/pages/components/notifications',
      // },
    ],
  },
  // {
  //   title: '前台維護',
  //   icon: 'nb-coffee-maker',
  //   children: [
  //     {
  //       title: '各服務維護',
  //       link: '/pages/editors/tinymce',
  //     },
  //     // {
  //     //   title: 'CKEditor',
  //     //   link: '/pages/editors/ckeditor',
  //     // },
  //   ],
  // },
  // {
  //   title: '統計報表',
  //   icon: 'nb-bar-chart',
  //   children: [
  //     {
  //       title: '(會員/管理者)權限表',
  //       link: '/pages/maps/gmaps',
  //     },
  //     {
  //       title: '(會員/管理者)登入紀錄表',
  //       link: '/pages/maps/leaflet',
  //     },
  //     {
  //       title: '會員應用程式使用紀錄表',
  //       link: '/pages/maps/bubble',
  //     },
  //     {
  //       title: '授權日至稽核管理報表',
  //       link: '/pages/maps/searchmap',
  //     },
  //   ],
  // },
  // {
  //   title: '系統管理',
  //   icon: 'nb-lightbulb',
  //   children: [
  //     {
  //       title: 'API維護',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: '驗證維護',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: '密碼規則',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
];
