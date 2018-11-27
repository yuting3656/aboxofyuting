import { Component, OnInit } from '@angular/core';
import { v4 as uuid} from 'uuid'

// router 
import { ActivatedRoute, Router } from '@angular/router';
import { TaitraServicesFakeDataService } from '../../shared/data/taitra-services-fake-data.service';


@Component({
  selector: 'ngx-front-page-edit-page',
  templateUrl: './front-page-edit-page.component.html',
  styleUrls: ['./front-page-edit-page.component.scss']
})
export class FrontPageEditPageComponent implements OnInit {
  
  // 宣告一變數　可放入從參數加進來的id name
  editData

  // servcie key value 
  SrcKeyValue

  constructor(
    private activateRoute: ActivatedRoute,
    private TaitraAppService: TaitraServicesFakeDataService,
  ) { }

  ngOnInit() {
    // 拿取傳入的 id　然後去　跟service 拿資料 
    this.activateRoute.params.subscribe( params => {
    const id = params['id'];
    this.editData = this.TaitraAppService.getDataById(id)
    });
  }
 
  genereateUUID(){
    const _uuid =  uuid()
    this.SrcKeyValue = _uuid
  }

}
