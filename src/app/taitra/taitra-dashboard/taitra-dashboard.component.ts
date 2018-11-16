import { Component, OnInit, OnDestroy } from '@angular/core';

import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile' ;


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
