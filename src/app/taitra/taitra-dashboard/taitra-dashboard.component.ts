import { Component, OnInit, OnDestroy } from '@angular/core';

import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile' ;

import { EChartOption } from 'echarts';


interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
  number?: number;
}

@Component({
  selector: 'ngx-taitra-dashboard',
  templateUrl: './taitra-dashboard.component.html',
  styleUrls: ['./taitra-dashboard.component.scss']
})
export class TaitraDashboardComponent implements OnDestroy {

  // charts 

  // chartOption: EChartOption = {
  //   xAxis: {
  //     type: 'category',
  //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //   },
  //   yAxis: {
  //     type: 'value'
  //   },
  //   series: [{
  //     data: [820, 932, 901, 934, 1290, 1330, 1320],
  //     type: 'line'
  //   }]
  // }


  //  pie chart
  chartOption: EChartOption = {
    title : {
        text: 'Taitra造訪各服務比例',
        subtext: '10月',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 左邊的文字
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['台灣經貿網','台灣國際專業展','採洽易','活動匯','新南向']
    },
    // 超棒棒功能表！
    // toolbox: {
    //     show : true,
    //     feature : {
    //         mark : {
    //           show: false,
    //           title:{
    //             save:'存檔'
    //           }},
    //         dataView : {
    //           show: false, 
    //           readOnly: false, 
    //           title: '查看資料'},
    //         magicType : {
    //             show: true, 
    //             type: ['pie', 'funnel'],
    //             option: {
    //                 funnel: {
    //                     x: '25%',
    //                     width: '50%',
    //                     funnelAlign: 'left',
    //                     max: 1548
    //                 }
    //             }
    //         },
    //         restore : {
    //           show: false,
    //           title: '重新整理',
    //         },
    //         saveAsImage : {
    //           show: true,
    //           // 改名字
    //           title: '匯出',
    //          }
    //     }
    // },
    calculable : true,
    series : [
        {
            name:'Taitra',
            type:'pie',
            radius : '75%',
            center: ['50%', '50%'],
            data:[
              {value:335, name:'新南向'},
              {value:310, name:'活動匯'},
              {value:234, name:'採洽易'},
              {value:872, name:'台灣國際專業展'},
              {value:1548, name:'台灣經貿網'}
            ]
        }
    ]
};                   

  // line chart 
  chartOption2: EChartOption = {
    title : {
      text: '(月)造訪各服務人數累積',
      },
      tooltip : {
          trigger: 'axis'
      },
      legend: {
        data:['台灣經貿網','台灣國際專業展','採洽易','活動匯','新南向']
      },
　　　// 超棒棒功能表！
    //   toolbox: {
    //       show : true,
    //       feature : {
    //           mark : {show: true},
    //           dataView : {show: false, readOnly: false},
    //           magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
    //           restore : {show: false},
    //           saveAsImage : {show: true}
    //       }
    //   },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              boundaryGap : false,
              data : ['1月', '2月', '3月', '4月', '5月', '6月',
                      '7月', '8月', '9月', '10月', '11月', '12月']
          }
      ],
      yAxis : [
          {
              type : 'value'
          }
      ],
      series : [
          {
              name:'新南向',
              type:'line',
              stack: '总量',
              data:[120, 132, 101, 134, 90, 230, 210, 531, 2093, 1098]
          },
          {
              name:'台灣國際專業展',
              type:'line',
              stack: '总量',
              data:[220, 182, 191, 234, 290, 330, 310, 981, 1123, 654]
          },
          {
              name:'採洽易',
              type:'line',
              stack: '总量',
              data:[150, 232, 201, 154, 190, 330, 410, 1111, 300, 123]
          },
          {
              name:'活動匯',
              type:'line',
              stack: '总量',
              data:[320, 332, 301, 334, 390, 330, 320, 2311, 470, 3321]
          },
          {
              name:'台灣經貿網',
              type:'line',
              stack: '总量',
              data:[820, 932, 901, 934, 1290, 1330, 1320, 987, 222, 1423]
          }
      ]
  };

  // cool test chart 
  chartOption3: EChartOption = {
      title: {
          x: 'center',
          text: '會員類別統計',
        //   subtext: 'Rainbow bar example',
        //   link: 'http://echarts.baidu.com/doc/example.html'
      },
      tooltip: {
          trigger: 'item'
    },
    // 左邊的文字
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['快速會員','一般會員','公司會員']
    },
    // 超棒棒功能表！
    //   toolbox: {
    //       show: true,
    //       feature: {
    //           dataView: {show: false, readOnly: false},
    //           restore: {show: false},
    //           saveAsImage: {show: true, title: '匯出'}
    //       }
    //   },
      calculable: true,
      grid: {
          borderWidth: 0,
          y: 80,
          y2: 60
      },
      xAxis: [
          {
              type: 'category',
              show: false,
              data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
          }
      ],
      yAxis: [
          {
              type: 'value',
              show: false
          }
      ],
      series: [
          {
              name: '會員比例',
              type: 'pie',
              radius : '60%',
              itemStyle: {
                  normal: {
                      color: function(params) {
                          // build a color map as your need.
                          var colorList = [
                            '#0F2043','#79CEDC','#D5A458','#E87C25','#27727B',
                             '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                             '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                          ];
                          return colorList[params.dataIndex]
                      },
                      /* 
                      '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                      '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                      '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                      */
                      label: {
                          show: true,
                          position: 'top',
                          formatter: '{b}\n{c}'
                      }
                  }
              },
              data: [
                  {value: 1301, name: '快速會員'},
                  {value: 3400, name: '一般會員'},
                  {value: 4298, name: '公司會員'},],
              // markPoint: {
              //     tooltip: {
              //         trigger: 'item',
              //         backgroundColor: 'rgba(0,0,0,0)',
              //         formatter: function(params){
              //             return '<img src="' 
              //                     + params.data.symbol.replace('image://', '')
              //                     + '"/>';
              //         }
              //     },
              //     data: [
              //         {xAxis:0, y: 350, name:'Line', symbolSize:20, symbol: 'image://../asset/ico/折线图.png'},
              //         {xAxis:1, y: 350, name:'Bar', symbolSize:20, symbol: 'image://../asset/ico/柱状图.png'},
              //         {xAxis:2, y: 350, name:'Scatter', symbolSize:20, symbol: 'image://../asset/ico/散点图.png'},
              //         {xAxis:3, y: 350, name:'K', symbolSize:20, symbol: 'image://../asset/ico/K线图.png'},
              //         {xAxis:4, y: 350, name:'Pie', symbolSize:20, symbol: 'image://../asset/ico/饼状图.png'},
              //         {xAxis:5, y: 350, name:'Radar', symbolSize:20, symbol: 'image://../asset/ico/雷达图.png'},
              //         {xAxis:6, y: 350, name:'Chord', symbolSize:20, symbol: 'image://../asset/ico/和弦图.png'},
              //         {xAxis:7, y: 350, name:'Force', symbolSize:20, symbol: 'image://../asset/ico/力导向图.png'},
              //         {xAxis:8, y: 350, name:'Map', symbolSize:20, symbol: 'image://../asset/ico/地图.png'},
              //         {xAxis:9, y: 350, name:'Gauge', symbolSize:20, symbol: 'image://../asset/ico/仪表盘.png'},
              //         {xAxis:10, y: 350, name:'Funnel', symbolSize:20, symbol: 'image://../asset/ico/漏斗图.png'},
              //     ]
              // }
          }
      ]
  };


  private alive = true;

  lightCard: CardSettings = {
    title: '總會員數',
    iconClass: 'nb-lightbulb',
    type: 'primary',
    number: 88997,
  };
  rollerShadesCard: CardSettings = {
    title: '本月新加入會員',
    iconClass: 'nb-star',
    type: 'success',
    number: 1098,
  };
  wirelessAudioCard: CardSettings = {
    title: '本日登入人數',
    iconClass: 'nb-person',
    type: 'info',
    number: 399,
  };
  coffeeMakerCard: CardSettings = {
    title: '公司總數',
    iconClass: 'nb-sunny-circled',
    type: 'warning',
    number: 498,
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    
    this.wirelessAudioCard,
    this.rollerShadesCard,
    this.lightCard,
    //this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
     corporate: this.commonStatusCardsSet,
    //[
    //   {
    //     ...this.lightCard,
    //     type: 'warning',
    //   },
    //   {
    //     ...this.rollerShadesCard,
    //     type: 'primary',
    //   },
    //   {
    //     ...this.wirelessAudioCard,
    //     type: 'danger',
    //   },
    //   {
    //     ...this.coffeeMakerCard,
    //     type: 'secondary',
    //   },
    // ],
  };

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
