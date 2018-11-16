import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable'; 

@Injectable()
export class SpinnerService {
    
  private spinnerStatusChangeSubject: Subject<boolean> = new Subject<boolean>();
  spinnerStatusChange$: Observable<boolean> = this.spinnerStatusChangeSubject.asObservable();
 
  showSpinner(){
      this.spinnerStatusChangeSubject.next(true);
  }

  hideSpinner(){
      this.spinnerStatusChangeSubject.next(false);
  }
    
}