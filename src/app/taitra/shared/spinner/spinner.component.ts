import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs'
import { SpinnerService } from './spinner.service';

import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';



@Component({
  selector: 'ngx-spinner',
  templateUrl: './spinner.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  statusSubscription: Subscription;
  showAnimation: boolean;

  constructor( private spinnerService: SpinnerService ) { }

  ngOnInit() {
    this.statusSubscription = this.spinnerService.spinnerStatusChange$.subscribe(
      (status: boolean) => {
        this.showAnimation = status
      }
    )
  }

  ngOnDestroy(): void {
    this.statusSubscription.unsubscribe();
  }

}
