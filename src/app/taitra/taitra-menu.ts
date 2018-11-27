import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '資訊儀錶板',
    icon: 'nb-home',
    link: '/taitra/taitra-dashboard',
  },
  {
    // 會員管理
    title: '會員管理',
    icon: 'nb-person',
    link: '/taitra/members',
    children: [
      {
        title: '會員資料維護',
        link: '/taitra/members/edit-members',
      },
      {
        title: '會員資料查詢', 
        link: '/taitra/members/member-search',
      },
      {
        title: '公司資料查詢',
        link: '/taitra/members/companies/company-search'
      },
      // {
      //   title: '會員資料異動紀錄',
      //   link: '/taitra/members/icons',
      // },
      // {
      //   title: '會員(公司管理員)授權日誌',
      //   link: '/pages/ui-features/modals',
      // },
    ],
  },
  // {
    // 帳號歷程 
    // title: '應用系統使用紀錄',
    // icon: 'nb-paper-plane',
    // link: '/taitra/dig-log/dig-login-log',
    // children: [
    //   {
    //     title: '帳號歷程總覽',
    //     link: '/taitra/dig-log/dig-login-log',
    //   },
      // {
      //   title: '台灣經貿網',
      //   link: '/taitra',
      // },
      // {
      //   title: '台灣國際專業展',
      //   link: '/pages/forms/layouts',
      // },
      // {
      //   title: '採洽易',
      //   link: '/pages/forms/inputs',
      // },
      // {
      //   title: '活動匯',
      //   link: '/pages/forms/layouts',
      // } ,
      // {
      //   title: '新南向',
      //   link: '/pages/forms/layouts',
      // }
    // ],
  // },
  {
    // 應用系統管理
    title: '應用系統維護',
    icon: 'nb-coffee-maker',
    link: '/taitra/front-page/front-page-overview',
    // children: [
    //   {
    //     title: '系統維護總覽',
    //     link: '/taitra/front-page/front-page-overview',
    //   },
      // {
      //   title: '台灣經貿網',
      //   link: '/taitra/front-page/'
      // },
      // {
      //   title: '台灣國際專業展',
      //   link: '/taitra/front-page/',
      // },
      // {
      //   title: '採洽易',
      //   link: '/taitra/front-page/',
      // },
      // {
      //   title: '活動匯',
      //   link: '/taitra/front-page/',
      // },
      // {
      //   title: '新南向',
      //   link: '/taitra/front-page/',
      // }
    // ],
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
      {
        // 讓管理員可以編輯 然後寄送的 template 
        title: 'email 範本維護',
        link: '/taitra/system-setting/email-template-editor'
      }
      // {
      //   title: '系統帳號登入紀錄',
      //   link: '/taitra/system-setting/admin-login-log',
      // }, 
      // {
      //   title: '系統設定異動紀錄',
      //   link: '/taitra/system-setting/system-data-edit-log',
      // },
    ],
  },
  {
    title: '統計查詢',
    icon: 'nb-bar-chart',
    children:[
      {
        title: '會員登入紀錄',
        link: '/taitra/members/member-login-log', 
      },
      {
        title: '會員資料異動紀錄',
        link: '/taitra/members/member-update-log', 
      },
      {
        title: '應用系統使用紀錄',
        link: '/taitra/dig-log/dig-login-log',
      },
      {
        title: '系統設定異動紀錄',
        link: '/taitra/system-setting/system-data-edit-log', 
      },
      {
        title: '系統帳號登入紀錄',
        link: '/taitra/system-setting/admin-login-log', 
      },
      {
        title: 'API 介接紀錄',
        link: '/taitra/api-setting/api-usage-log', 
      },
      {
        title: 'API 授權紀錄',
        link: '/taitra/api-setting/api-auth-log', 
      },

    ]
  },
  // {
  //   title: '統計報表',
  //   icon: 'nb-keypad',
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
  {
    title: '規則管理',
    icon: 'nb-lightbulb',
    link: '/taitra/rule-setting',
    children: [
      // {
  //       title: 'API維護',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: '驗證維護',
  //       link: '/pages/charts/chartjs',
  //     },
      {
        title: '帳號密碼規則',
        link: '/taitra/rule-setting/setting-password-rule',
      },
    ],
  },
  {
    title: 'API 管理',
    icon: 'nb-cloudy',
    link: 'taitra/api-setting',
    children:[
      {
        title: 'API 總攬',
        link: '/taitra/api-setting/edit-api-setting'
      },
    ],
  },
];
